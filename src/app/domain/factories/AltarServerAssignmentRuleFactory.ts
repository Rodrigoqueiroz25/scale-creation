
import AltarServerAssignmentRule from "../rules/altar-server-assignment/AltarServerAssignmentRule";
import SundayAssigmentRule from "../rules/altar-server-assignment/SundayAssigmentRule";
import WeekDayAssigmentRule from "../rules/altar-server-assignment/WeekDayAssigmentRule";
import DateCustom from "../entities/DateCustom";


export default class AltarServerAssignmentRuleFactory {

    public static getRule(date: DateCustom): AltarServerAssignmentRule {
        if(date.isSunday())
            return new SundayAssigmentRule()
        return new WeekDayAssigmentRule();
    }

}
