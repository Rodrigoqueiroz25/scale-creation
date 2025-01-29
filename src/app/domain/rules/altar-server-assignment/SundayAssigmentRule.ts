import AltarServerAssignmentRule from "./AltarServerAssignmentRule";
import {Option} from "../../../../@types/option";
import WeeklyMassSchedule from "../../entities/WeeklyMassSchedule";
import {DaysWeek} from "../../../shared/enums/DaysWeek.enum";

export default class SundayAssigmentRule implements AltarServerAssignmentRule {

    constructor(private readonly weeklyMassSchedule: WeeklyMassSchedule) {
    }

    public canAssign(altarServer: Option): boolean {
        return this.weeklyMassSchedule.getMassesByDay(DaysWeek.DOMINGO).every(
            mass => !mass.isAltarServerAssign(altarServer.id)
        )
    }
}

//se for domingo e não tiver selecionando em nenhuma missa dominical.