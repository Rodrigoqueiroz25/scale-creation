import {Option} from "../../../@types/option";
import {DateTimeLocal} from "../entities/Mass";

export default interface IAltarServerAssignment {
    assignAltarServer(altarServer: Option, idSlot: number, massId: DateTimeLocal): void;
    unassignAltarServer(idSlot: number, massId: DateTimeLocal): void
}