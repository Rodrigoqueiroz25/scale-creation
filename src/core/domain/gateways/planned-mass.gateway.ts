import { DaysWeek } from "../../../shared/enums/DaysWeek.enum";
import {PlannedMass, PlannedMassRecord} from "../models/planned-mass";

export default interface IPlannedMassGateway {
    get(dayWeek: DaysWeek): Promise<PlannedMass[]>;
    getAll(): Promise<PlannedMassRecord>
}

