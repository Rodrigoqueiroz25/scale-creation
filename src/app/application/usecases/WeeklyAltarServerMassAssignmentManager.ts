import {Option} from "../../../@types/option";
import WeeklyMassSchedule from "../../domain/entities/WeeklyMassSchedule";
import AssignmentRuleManager from "../../domain/rules/altar-server-assignment/AssignmentRuleManager";
import {DateTimeLocal} from "../../domain/entities/Mass";

export default class WeeklyAltarServerMassAssignmentManager {

    private assignmentManager: AssignmentRuleManager;

    constructor(
        private readonly weeklyMassSchedule: WeeklyMassSchedule,
    ) {
        this.assignmentManager = new AssignmentRuleManager(weeklyMassSchedule);
    }

    public assignToMass(altarServer: Option, idSlot: number, massId: DateTimeLocal): void {
        const mass = this.weeklyMassSchedule.getScheduledMass(massId);
        if (!mass) return;
        const assignmentRule = this.assignmentManager.getRule(mass);
        if (assignmentRule.canAssign(altarServer))
            mass.assignAltarServer(altarServer, idSlot);
        console.log(mass);
    }

    public unassignFromMass(idSlot: number, massId: DateTimeLocal): void {
        const mass = this.weeklyMassSchedule.getScheduledMass(massId);
        if (!mass) return;
        mass.unassignAltarServer(idSlot);
    }

}