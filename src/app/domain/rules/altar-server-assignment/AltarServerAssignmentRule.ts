import {Option} from "../../../../@types/option";

export default interface AltarServerAssignmentRule {
    canAssign(altarServer: Option): boolean;
}
