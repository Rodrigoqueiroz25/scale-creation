import PlannedMassGateway, {PlannedMass, plannedMass, PlannedMassRecord} from "./PlannedMassGateway";
import {DaysWeek} from "../../../enum/DaysWeek.enum";

export class PlannedMassGatewayMemory implements PlannedMassGateway {

    constructor(private readonly plannedMasses: PlannedMassRecord) {
    }

    public getAll(): Promise<PlannedMassRecord> {
        return Promise.resolve(this.plannedMasses);
    }

    public get(dayWeek: DaysWeek): Promise<PlannedMass[]> {
        return Promise.resolve(this.plannedMasses[dayWeek])
        //return Promise.resolve(this.plannedMasses.filter(sm => sm.dayWeek === dayWeek.toUpperCase()));
    }

}