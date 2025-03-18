import DateCustom from "../../../modules/calendar/DateCustom";
import Week from "../../../modules/calendar/Week";
import Mass, {DateTimeLocal} from "./Mass";
import {DaysWeek} from "../../../shared/enums/DaysWeek.enum";
import {Option} from "../../../../exclude/hooks(deprecated)/@types/option";
import AltarServerAssignmentRuleFactory from "../rules/altar-server-assignment-rule.factory";
import IWeeklySchedule from "../interfaces/IWeeklySchedule";
import IAltarServerQueryAssignment from "../interfaces/IAltarServerQueryAssignment";
import {PlannedMassRecord} from "../models/planned-mass";

export default class WeeklyMassSchedule implements IWeeklySchedule, IAltarServerQueryAssignment{

    constructor(
        private scheduledMasses: Mass[],
        private readonly id: number,
    ) {
    }

    public static create(dates: Week, plannedMasses: PlannedMassRecord): WeeklyMassSchedule {
        const masses: Mass[] = [];
        dates.getAll().forEach((day) => {
            plannedMasses[day.getDayWeek()].forEach(pm => {
                masses.push(
                    Mass.create(day, pm.time, pm.local, pm.description, pm.vacancies)
                )
            })
        })
        return new WeeklyMassSchedule(masses, dates.id);
    }

    public static restore(id: number, masses: Mass[]): WeeklyMassSchedule {
        return new WeeklyMassSchedule(masses, id);
    }

    public getScheduledMasses(): Mass[] {
        return this.scheduledMasses;
    }

    public getMassesByDay(day: DaysWeek): Mass[] {
        return this.scheduledMasses.filter(mass => mass.getDate().getDayWeek() === day);
    }

    public getMassesBetweenDays(startDay: DaysWeek, endDay: DaysWeek): Record<DaysWeek, Mass[]> {
        const days = Object.values(DaysWeek);
        const rangeDays = days.slice(days.indexOf(startDay), days.indexOf(endDay) + 1);
        return rangeDays.reduce((result, day) => {
            result[day] = this.getMassesByDay(day);
            return result;
        }, {} as Record<DaysWeek, Mass[]>);
    }

    public getScheduledMass(massId: DateTimeLocal): Mass | undefined {
        return this.scheduledMasses.find(mass => mass.isMatch(massId));
    }

    public getId(): number {
        return this.id;
    }

    public unscheduleMass(date: DateTimeLocal) {

    }

    public schedulingMass(mass: Mass): void {

    }

    public canAssignAltarServer(date: DateCustom, altarServer: Option): boolean {
        const assignmentRule = AltarServerAssignmentRuleFactory.getRule(date);
        return assignmentRule.canAssign(altarServer, this);
    }

}