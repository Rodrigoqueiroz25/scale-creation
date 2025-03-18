import WeeklyMassSchedule from "../domain/entities/WeeklyMassSchedule";
import WeeklyAltarServerMassAssignmentManager from "../application/usecases/WeeklyAltarServerMassAssignmentManager";
import WeekDayAssigmentRule from "../domain/rules/altar-server-assignment/week-day-assigment-rule";
import {plannedMasses} from "../../shared/data/plannedMassesParish";
import MonthFactory from "../../modules/calendar/month.factory";
import {NameMonths} from "../../shared/enums/NameMonths.enum";
import Month from "../../modules/calendar/Month";
import DateCustom from "../../modules/calendar/DateCustom";
import AltarServerAssignmentRuleFactory from "../domain/rules/altar-server-assignment-rule.factory";
import Mass from "../domain/entities/Mass";
import SundayAssigmentRule from "../domain/rules/altar-server-assignment/sunday-assigment-rule";

describe("WeekDayAssigmentRules", () => {

    let weeklyMassSchedule: WeeklyMassSchedule;
    let assigmnetRuleManager: AltarServerAssignmentRuleFactory;
    let datesMonth: Month;

    beforeEach(() => {
        datesMonth = MonthFactory.create(NameMonths.JANEIRO, new Date().getFullYear());
        weeklyMassSchedule = WeeklyMassSchedule.create(datesMonth.getWeek(2), plannedMasses);
        assigmnetRuleManager = new AltarServerAssignmentRuleFactory(weeklyMassSchedule);
    })

    test("retorna objeto do tipo SundayAssigmentRule quando a missa é dominical", () => {
        expect(assigmnetRuleManager.getRule(Mass.create(new DateCustom(5,1,2025), "17:00", "matriz", "", 8)) instanceof SundayAssigmentRule).toEqual(true);
    })

    test("retorna objeto do tipo WeekDayAssigmentRule quando a missa não é dominical", () => {
        expect(assigmnetRuleManager.getRule(Mass.create(new DateCustom(7,1,2025), "19:00", "matriz", "", 4)) instanceof WeekDayAssigmentRule).toEqual(true);
    })

    
})