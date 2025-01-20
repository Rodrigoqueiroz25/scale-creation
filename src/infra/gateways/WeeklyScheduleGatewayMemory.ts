import WeeklyScheduleGateway, {ScheduledMass} from "./WeeklyScheduleGateway";

export class WeeklyScheduleGatewayMemory implements WeeklyScheduleGateway {

    constructor(private readonly scheduledMasses: ScheduledMass[]) {
    }

    public getAll(): Promise<ScheduledMass[]> {
        return Promise.resolve(this.scheduledMasses);
    }

    public get(dayWeek: string): Promise<ScheduledMass[]> {
        return Promise.resolve(this.scheduledMasses.filter(sm => sm.dayWeek === dayWeek.toUpperCase()));
    }

}