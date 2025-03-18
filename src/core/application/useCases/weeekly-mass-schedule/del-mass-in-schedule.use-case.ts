import {DateTimeLocal} from "../../../domain/entities/Mass";
import IWeeklyMassScheduleGateway from "../../../domain/gateways/weekly-mass-schedule.gateway";

export default class DelMassInScheduleUseCase {

    constructor(private scheduleGate: IWeeklyMassScheduleGateway) {
    }

    async exec(weekId: number, idMass: DateTimeLocal): Promise<void> {
        const weeklyMassSchedule = await this.scheduleGate.get(weekId);
        if (!weeklyMassSchedule) throw new Error();

        weeklyMassSchedule.unscheduleMass(idMass);
        await this.scheduleGate.save(weeklyMassSchedule);
    }
}