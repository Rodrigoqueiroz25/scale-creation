
import AltarServerAssignmentRule from "./altar-server-assignment/altar-server-assignment-rule";
import SundayAssigmentRule from "./altar-server-assignment/sunday-assigment-rule";
import WeekDayAssigmentRule from "./altar-server-assignment/week-day-assigment-rule";
import DateCustom from "../../../modules/calendar/DateCustom";


export default class AltarServerAssignmentRuleFactory {

    public static getRule(date: DateCustom): AltarServerAssignmentRule {
        if(date.isSunday())
            return new SundayAssigmentRule()
        return new WeekDayAssigmentRule();
    }

}
