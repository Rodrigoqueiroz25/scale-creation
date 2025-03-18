import WeeklyMassSchedule from "../domain/entities/WeeklyMassSchedule";
import WeeklyAltarServerMassAssignmentManager from "../application/usecases/WeeklyAltarServerMassAssignmentManager";
import WeekDayAssigmentRule from "../domain/rules/altar-server-assignment/week-day-assigment-rule";
import {plannedMasses} from "../../shared/data/plannedMassesParish";
import MonthFactory from "../../modules/calendar/month.factory";
import {NameMonths} from "../../shared/enums/NameMonths.enum";
import Month from "../../modules/calendar/Month";
import DateCustom from "../../modules/calendar/DateCustom";
import {DateTimeLocal} from "../domain/entities/Mass";

describe("WeekDayAssigmentRules", () => {

    let weeklyMassSchedule: WeeklyMassSchedule;
    let altarServerMassAssigmnet: WeeklyAltarServerMassAssignmentManager;
    let weekDayAssigmnetRule: WeekDayAssigmentRule;
    let datesMonth: Month;

    beforeEach(() => {
        datesMonth = MonthFactory.create(NameMonths.JANEIRO, new Date().getFullYear());
        weeklyMassSchedule = WeeklyMassSchedule.create(datesMonth.getWeek(2), plannedMasses);
        weekDayAssigmnetRule = new WeekDayAssigmentRule(weeklyMassSchedule);
        altarServerMassAssigmnet = new WeeklyAltarServerMassAssignmentManager(weeklyMassSchedule);
    })

    test("retorna true quando o altar server não está alocado em nenhuma missa entre terça e sábado", () => {
        expect(weekDayAssigmnetRule.canAssign({name: "alef", id: 1})).toEqual(true);
    })

    test("retorna false quando o altar server está alocado em uma missa entre terça e sábado", () => {
        let massId: DateTimeLocal = {
            date: new DateCustom(8,1,2025),
            time: "19:00",
            local: "matriz"
        }
        altarServerMassAssigmnet.assignToMass({name: "alef", id: 1}, 1, massId);
        expect(weekDayAssigmnetRule.canAssign({name: "alef", id: 1})).toEqual(false);
    })
    
})