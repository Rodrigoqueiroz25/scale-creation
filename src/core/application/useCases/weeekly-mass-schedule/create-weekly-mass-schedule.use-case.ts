
import WeeklyMassSchedule from "../../../domain/entities/WeeklyMassSchedule";
import IPlannedMassGateway from "../../../domain/gateways/planned-mass.gateway";
import Week from "../../../../modules/calendar/Week";
import IWeeklyMassScheduleGateway from "../../../domain/gateways/weekly-mass-schedule.gateway";

export default class CreateWeeklyMassScheduleUseCase {

    constructor(
        private plannedMassGate: IPlannedMassGateway,
        private scheduleGate: IWeeklyMassScheduleGateway
    ) {
    }

    async exec(week: Week): Promise<void> {
        const plannedMasses = await this.plannedMassGate.getAll();
        const weeklyMassSchedule = WeeklyMassSchedule.create(week, plannedMasses);
        await this.scheduleGate.save(weeklyMassSchedule);
    }
}