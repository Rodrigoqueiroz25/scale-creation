
import DateCustom from "../../../modules/calendar/DateCustom";
import {AltarServer} from "../../domain/models/altar-server";
import IAltarServerGateway from "../../domain/gateways/altar-server.gateway";
import IWeeklyMassScheduleGateway from "../../domain/gateways/weekly-mass-schedule.gateway";

export default class AltarServerListService {

    constructor(
        private readonly altarServerGate: IAltarServerGateway,
        private readonly scheduleGate: IWeeklyMassScheduleGateway
    ) {
    }

    async getList(weekId: number, date: DateCustom): Promise<AltarServer[]> {
        const altarServers = await this.altarServerGate.getAll();
        const weeklySchedule = await this.scheduleGate.get(weekId);
        if (!weeklySchedule) throw new Error("not a weekly schedule");

        return altarServers.filter(altarServer => weeklySchedule.canAssignAltarServer(date, altarServer))
    }


}
