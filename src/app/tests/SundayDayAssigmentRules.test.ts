import WeeklyMassSchedule from "../domain/entities/WeeklyMassSchedule";
import WeeklyAltarServerMassAssignmentManager from "../application/usecases/WeeklyAltarServerMassAssignmentManager";
import WeekDayAssigmentRule from "../domain/rules/altar-server-assignment/WeekDayAssigmentRule";
import {plannedMasses} from "../shared/data/plannedMassesParish";
import MonthFactory from "../domain/factories/MonthFactory";
import {NameMonths} from "../shared/enums/NameMonths.enum";
import Month from "../domain/entities/Month";
import DateCustom from "../domain/entities/DateCustom";
import SundayAssigmentRule from "../domain/rules/altar-server-assignment/SundayAssigmentRule";
import {DateTimeLocal} from "../domain/entities/Mass";

describe("SundayDayAssigmentRules", () => {

    let weeklyMassSchedule: WeeklyMassSchedule;
    let altarServerMassAssigmnet: WeeklyAltarServerMassAssignmentManager;
    let sundayAssigmnetRule: SundayAssigmentRule;
    let datesMonth: Month;

    beforeEach(() => {
        datesMonth = MonthFactory.create(NameMonths.JANEIRO, new Date().getFullYear());
        weeklyMassSchedule = WeeklyMassSchedule.create(datesMonth.getWeek(2), plannedMasses);
        sundayAssigmnetRule = new SundayAssigmentRule(weeklyMassSchedule);
        altarServerMassAssigmnet = new WeeklyAltarServerMassAssignmentManager(weeklyMassSchedule);
    })

    test("retorna true quando o altar server não está alocado em nenhuma missa do domingo", () => {
        expect(sundayAssigmnetRule.canAssign({name: "alef", id: 1})).toEqual(true);
    })

    test("retorna false quando o altar server está alocado em uma missa dominical", () => {
        let massId: DateTimeLocal = {
            date: new DateCustom(5,1,2025),
            time: "08:00",
            local: "matriz"
        }
        altarServerMassAssigmnet.assignToMass({name: "alef", id: 1}, 1, massId);
        expect(sundayAssigmnetRule.canAssign({name: "alef", id: 1})).toEqual(false);
    })
    
})