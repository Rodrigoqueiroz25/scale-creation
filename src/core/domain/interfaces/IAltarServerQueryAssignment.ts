import DateCustom from "../../../modules/calendar/DateCustom";
import {Option} from "../../../../exclude/hooks(deprecated)/@types/option";

export default interface IAltarServerQueryAssignment {
    canAssignAltarServer(date: DateCustom, altarServer: Option): boolean;
}