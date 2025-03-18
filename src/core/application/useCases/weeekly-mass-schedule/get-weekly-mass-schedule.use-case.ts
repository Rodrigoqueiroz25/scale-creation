
import IWeeklyMassScheduleGateway from "../../../domain/gateways/weekly-mass-schedule.gateway";
import WeeklyMassSchedule from "../../../domain/entities/WeeklyMassSchedule";


export default class GetWeeklyMassScheduleUseCase {

    constructor(
        private scheduleGate: IWeeklyMassScheduleGateway
    ) {
    }

    async exec(weekId: number): Promise<WeeklyMassSchedule> {
        let weeklyMassSchedule = await this.scheduleGate.get(weekId);
        if(!weeklyMassSchedule) throw new Error("weeklyMassSchedule not found");
        return weeklyMassSchedule;
    }
}