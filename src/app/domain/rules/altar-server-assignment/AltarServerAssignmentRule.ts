import {Option} from "../../../../@types/option";
import IWeeklySchedule from "../../interfaces/IWeeklySchedule";

export default interface AltarServerAssignmentRule {
    canAssign(altarServer: Option, weeklySchedule: IWeeklySchedule): boolean;
}
