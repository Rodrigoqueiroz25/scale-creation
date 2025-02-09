import DateCustom from "./DateCustom";
import {PlannedMassRecord} from "../../infra/gateways/plannedMass/PlannedMassGateway";
import Week from "./Week";
import Mass, {DateTimeLocal} from "./Mass";
import {DaysWeek} from "../../shared/enums/DaysWeek.enum";

export default class WeeklyMassSchedule {

    constructor(
        private scheduledMasses: Mass[],
        private readonly id: number
    ) {
    }

    static create(dates: Week, plannedMasses: PlannedMassRecord): WeeklyMassSchedule {
        const masses: Mass[] = [];
        dates.getAll().forEach((day) => {
            plannedMasses[day.getDayWeek()].forEach(pm => {
                masses.push(
                    Mass.create(day, pm.time, pm.local, pm.description, pm.vacancies)
                )
            })
        })
        return new WeeklyMassSchedule(masses, dates.number);
    }

    static restore(id: number, masses: Mass[]): WeeklyMassSchedule {
        return new WeeklyMassSchedule(masses, id);
    }

    public getSchedule(): Mass[] {
        return this.scheduledMasses;
    }

    public getMassesByDay(day: DaysWeek): Mass[] {
        return this.scheduledMasses.filter(mass => mass.getDate().getDayWeek() === day);
    }

    public getMassesBetweenDays(startDay: DaysWeek, endDay: DaysWeek) {
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

    public unscheduleMass(date: DateCustom, time: string, local: string) {

    }

    public schedulingMass(date: DateCustom, time: string, local: string, description: string, numVacancies: number): void {

    }

}