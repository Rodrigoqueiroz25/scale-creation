
import {Option} from "../../../@types/option";
import DateCustom from "../../domain/entities/DateCustom";
import IAltarServerQueryAssignment from "../../domain/interfaces/IAltarServerQueryAssignment";

export default class AltarServerList {

    constructor(
        private readonly altarServers: Option[],
        private readonly altarServerQueryAssignment: IAltarServerQueryAssignment
    ) {
    }

    public getList(date: DateCustom): Option[] {
        return this.altarServers.filter(altarServer => this.altarServerQueryAssignment.canAssignAltarServer(date, altarServer));
    }


}
