import {Option} from "../../../@types/option";
import DateCustom from "../types/DateCustom";
import WeeklyMassSchedule from "./WeeklyMassSchedule";
import Mass from "./Mass";

export default class AltarServerWeeklySchedule {

    constructor(private readonly weeklyMassSchedule: WeeklyMassSchedule) {
    }

    public assignToMass(altarServer: Option, id: number, date: DateCustom, time: string, local: string) {
        const mass = this.weeklyMassSchedule.getScheduledMass(date, time, local);
        if (mass) {
            if (!mass.getDate().isSunday()) {
                if (!this.isAssignedBetweenTuesdayAndSaturday(altarServer)) {
                    mass.assignAltarServer(altarServer, id);
                }
            } else {
                if (!this.isAssignedInMassSomeDay(altarServer, date))
                    mass.assignAltarServer(altarServer, id);
            }
        }
    }

    public cancelAssignAltarServer(id: number, date: DateCustom, time: string, local: string): void {
        const mass = this.weeklyMassSchedule.getScheduledMass(date, time, local);
        if (mass) {
            mass.cancelAssignAltarServer(id);
        }

    }

    private isAssignedBetweenTuesdayAndSaturday(altarServer: Option): boolean {
        return this.isAssignedByCondition(altarServer, mass => !mass.getDate().isSunday());
    }

    private isAssignedInMassSomeDay(altarServer: Option, date: DateCustom): boolean {
        return this.isAssignedByCondition(altarServer, mass => mass.getDate().getDayWeek() === date.getDayWeek());
    }

    private isAssignedByCondition(altarServer: Option, condition: (mass: Mass) => boolean): boolean {
        let flag = false;
        this.weeklyMassSchedule.getSchedule().forEach((mass) => {
            if(condition(mass))
                if(mass.isAltarServerAssign(altarServer.id))
                    flag = true;
        })
        return flag;
    }

}