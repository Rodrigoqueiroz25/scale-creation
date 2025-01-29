
import Mass from "../../entities/Mass";
import AltarServerAssignmentRule from "./AltarServerAssignmentRule";
import SundayAssigmentRule from "./SundayAssigmentRule";
import WeeklyMassSchedule from "../../entities/WeeklyMassSchedule";
import WeekDayAssigmentRule from "./WeekDayAssigmentRule";

export default class AssignmentRuleManager {

    constructor(private readonly weeklyMassSchedule: WeeklyMassSchedule) {
    }

    public getRule(mass: Mass): AltarServerAssignmentRule {
        if(mass.getDate().isSunday())
            return new SundayAssigmentRule(this.weeklyMassSchedule)
        return new WeekDayAssigmentRule(this.weeklyMassSchedule);
    }

}