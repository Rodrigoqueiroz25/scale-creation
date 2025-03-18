import {DateTimeLocal} from "../../../domain/entities/Mass";
import IWeeklyMassScheduleGateway from "../../../domain/gateways/weekly-mass-schedule.gateway";
import {AltarServer} from "../../../domain/models/altar-server";

export default class AssignAltarServerToMassUseCase {

    constructor(private scheduleGate: IWeeklyMassScheduleGateway) {
    }

    async exec(weekId: number, altarServer: AltarServer, idSlot: number, massId: DateTimeLocal): Promise<void> {
        const weeklyMassSchedule = await this.scheduleGate.get(weekId);
        if (!weeklyMassSchedule) throw new Error("not a weekly schedule");
        if (!weeklyMassSchedule.canAssignAltarServer(massId.date, altarServer)) throw new Error("can't assign altar server");

        const mass = weeklyMassSchedule.getScheduledMass(massId);
        if(!mass) throw new Error("Mass not found");
        mass.assignAltarServer(altarServer, idSlot);

        await this.scheduleGate.save(weeklyMassSchedule);
    }
}