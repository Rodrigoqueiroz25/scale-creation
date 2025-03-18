import Mass, {DateTimeLocal} from "../entities/Mass";
import {DaysWeek} from "../../../shared/enums/DaysWeek.enum";

export default interface IWeeklySchedule {
    getScheduledMasses(): Mass[];
    getScheduledMass(massId: DateTimeLocal): Mass | undefined;
    getMassesByDay(day: DaysWeek): Mass[];
    getMassesBetweenDays(startDay: DaysWeek, endDay: DaysWeek): Record<DaysWeek, Mass[]>;
    getId(): number;
}