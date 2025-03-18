import {DateTimeLocal} from "../../../domain/entities/Mass";
import IWeeklyMassScheduleGateway from "../../../domain/gateways/weekly-mass-schedule.gateway";


export default class UnassignAltarServerOfMassUseCase {

    constructor(private scheduleGate: IWeeklyMassScheduleGateway) {
    }

    async exec(weekId: number, idSlot: number, massId: DateTimeLocal): Promise<void> {
        const weeklyMassSchedule = await this.scheduleGate.get(weekId);
        if (!weeklyMassSchedule) throw new Error("not a weekly schedule");

        const mass = weeklyMassSchedule.getScheduledMass(massId);
        if(!mass) throw new Error("Mass not found");
        mass.unassignAltarServer(idSlot);

        await this.scheduleGate.save(weeklyMassSchedule);
    }
}