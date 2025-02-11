import DateCustom from "../entities/DateCustom";
import {Option} from "../../../@types/option";

export default interface IAltarServerQueryAssignment {
    canAssignAltarServer(date: DateCustom, altarServer: Option): boolean;
}