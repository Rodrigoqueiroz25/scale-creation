
import IWeeklyMassScheduleGateway from "../../../domain/gateways/weekly-mass-schedule.gateway";

export default class DeleteWeeklyMassScheduleUseCase {

    constructor(private scheduleGate: IWeeklyMassScheduleGateway) {
    }

    async exec(weekId: number): Promise<void> {
        await this.scheduleGate.delete(weekId);
    }
}