import DateCustom from "./DateCustom";
import {PlannedMassRecord} from "../infra/gateways/plannedMass/PlannedMassGateway";
import Week from "./Week";
import Mass from "./Mass";
import {Option} from "../@types/option";


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

    public get massesScheduledForWeek(): Mass[] {
        return this.scheduledMasses;
    }

    public unscheduleMass(date: DateCustom, time: string, local: string) {

    }

    public schedulingMass(date: DateCustom, time: string, local: string, description: string, numVacancies: number): void {

    }


    public assignToMass(altarServer: Option, id: number, date: DateCustom, time: string, local: string) {
        const mass = this.getScheduledMass(date, time, local);
        if (mass) {
            if (!mass.getDate().isSunday()) {
                //saber se ja está na mesma missa
                //se já está entre terça e sábado
                if (!this.isAssignedBetweenTuesdayAndSaturday(altarServer)) {
                    mass.assignAltarServer(altarServer, id);
                }
            } else {
                //se já está em alguma missa domingo ou do mesmo dia
                if (!this.isAssignedInMassOnDay(altarServer, date))
                    mass.assignAltarServer(altarServer, id);
            }
        }
        console.log(mass);
    }

    public cancelAssignAltarServer(id: number, date: DateCustom, time: string, local: string): void {
        const mass = this.getScheduledMass(date, time, local);
        if (mass) {
            mass.cancelAssignAltarServer(id);
        }

    }

    private getScheduledMass(date: DateCustom, time: string, local: string): Mass | undefined {
        return this.scheduledMasses.find(mass => mass.isMatch(date, time, local));
    }


    public getAssignedAltarServersInMass(date: DateCustom, time: string, local: string): Option[] {
        const mass = this.getScheduledMass(date, time, local);
        if (mass) {
            return mass.getAllAltarServers();
        }
        return [];
    }

    private isAssignedBetweenTuesdayAndSaturday(altarServer: Option): boolean {
        let flag = false;
        this.scheduledMasses.forEach((mass) => {
            if (!mass.getDate().isSunday()) {
                if (mass.getAllAltarServers().find(as => as.id === altarServer.id))
                    flag = true;
            }
        })
        return flag;
    }

    private isAssignedInMass(altarServer: Option, date: DateCustom, time: string, local: string): boolean {
        const mass = this.getScheduledMass(date, time, local);
        if (mass) {
            if (mass.getAllAltarServers().find(as => as.id === altarServer.id))
                return true;
        }
        return false;
    }

    private isAssignedInMassOnDay(altarServer: Option, date: DateCustom): boolean {
        let flag = false;
        this.scheduledMasses.forEach((mass) => {
            if (mass.getDate().getDayWeek() === date.getDayWeek()) {
                if (mass.getAllAltarServers().find(as => as.id === altarServer.id))
                    flag = true;
            }
        })
        return flag;
    }

}