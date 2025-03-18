
import IWeeklyMassScheduleGateway from "../../../domain/gateways/weekly-mass-schedule.gateway";
import WeeklyMassSchedule from "../../../domain/entities/WeeklyMassSchedule";

export default class SaveWeeklyMassScheduleUseCase {

    constructor(
        private scheduleGate: IWeeklyMassScheduleGateway
    ) {
    }

    async exec(schedule: WeeklyMassSchedule): Promise<void> {
        await this.scheduleGate.save(schedule);
    }
}