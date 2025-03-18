
import IPlannedMassGateway from "../../../domain/gateways/planned-mass.gateway";
import {DaysWeek} from "../../../../shared/enums/DaysWeek.enum";
import {PlannedMass, PlannedMassRecord} from "../../../domain/models/planned-mass";

export class PlannedMassMemoryGateway implements IPlannedMassGateway {

    constructor(private readonly plannedMasses: PlannedMassRecord) {
    }

    public getAll(): Promise<PlannedMassRecord> {
        return Promise.resolve(this.plannedMasses);
    }

    public get(dayWeek: DaysWeek): Promise<PlannedMass[]> {
        return Promise.resolve(this.plannedMasses[dayWeek])
    }

}