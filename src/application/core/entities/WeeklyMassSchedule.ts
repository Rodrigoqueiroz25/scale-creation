import DateCustom from "../types/DateCustom";
import {PlannedMassRecord} from "../../infra/gateways/plannedMass/PlannedMassGateway";
import Week from "../types/Week";
import Mass from "./Mass";

export default class WeeklyMassSchedule {

    constructor(private scheduledMasses: Mass[], private readonly id: number) {
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

    static recover(weekId: number, scheduledMass: Mass[]): WeeklyMassSchedule {
        return new WeeklyMassSchedule(scheduledMass, weekId);
    }

    public getSchedule(): Mass[] {
        return this.scheduledMasses;
    }

    public unscheduleMass(date: DateCustom, time: string, local: string) {

    }

    public schedulingMass(date: DateCustom, time: string, local: string, description: string, numVacancies: number): void {

    }

    public getScheduledMass(date: DateCustom, time: string, local: string): Mass | undefined {
        return this.scheduledMasses.find(mass => mass.isMatch(date, time, local));
    }

}