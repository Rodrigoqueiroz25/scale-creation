import Mass from "../../../domain/entities/Mass";
import IWeeklyMassScheduleGateway from "../../../domain/gateways/weekly-mass-schedule.gateway";

export default class AddMassInScheduleUseCase {

    constructor(private scheduleGate: IWeeklyMassScheduleGateway) {
    }

    async exec(weekId: number, mass: Mass): Promise<void> {
        const weeklyMassSchedule = await this.scheduleGate.get(weekId);
        if (!weeklyMassSchedule) throw new Error();

        weeklyMassSchedule.schedulingMass(mass);
        await this.scheduleGate.save(weeklyMassSchedule);
    }
}