import {Option} from "../../../@types/option";
import WeeklyMassSchedule from "../../domain/entities/WeeklyMassSchedule";
import Mass from "../../domain/entities/Mass";
import AssignmentRuleManager from "../../domain/rules/altar-server-assignment/AssignmentRuleManager";

export default class AltarServerList {

    private assignmentManager: AssignmentRuleManager;

    constructor(
        private readonly altarServers: Option[],
        private readonly weeklyMassSchedule: WeeklyMassSchedule
    ) {
        this.assignmentManager = new AssignmentRuleManager(weeklyMassSchedule);
    }

    public getList(mass: Mass): Option[] {
        const assignmentRule = this.assignmentManager.getRule(mass);
        return this.altarServers.filter(altarServer => assignmentRule.canAssign(altarServer));
    }


}
