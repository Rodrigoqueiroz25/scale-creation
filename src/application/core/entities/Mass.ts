import DateCustom from "../types/DateCustom";
import {Option} from "../../../@types/option";
import {AltarServerRecord} from "../types/AltarServerRecord";

export default class Mass {

    private altarServers: AltarServerRecord;

    constructor(
        private readonly date: DateCustom,
        private readonly time: string,
        private readonly local: string,
        private description: string,
        private numVacancies: number
    ) {
        this.altarServers = new AltarServerRecord();
    }

    public static create(date: DateCustom, time: string, local: string, description: string, numVacancies: number): Mass {
        return new Mass(date, time, local, description, numVacancies);
    }

    public setDescription(description: string) {
        this.description = description;
    }


    public assignAltarServer(altarServer: Option, idSlot: number) {
        if(!this.isAltarServerAssign(altarServer.id))
            this.altarServers.set(idSlot,altarServer);
    }

    public cancelAssignAltarServer(idSlot: number) {
        this.altarServers.delete(idSlot);
    }

    public getAllAltarServers(): Option[] {
        return this.altarServers.getAll();
    }

    public getAltarServer(idSlot: number): Option | undefined {
        return this.altarServers.get(idSlot);
    }

    public getDate(){
        return this.date;
    }

    public getTime(){
        return this.time;
    }

    public getLocal(){
        return this.local;
    }

    public getDescription(){
        return this.description;
    }

    public getNumVacancies(){
        return this.numVacancies;
    }

    public isMatch(date: DateCustom, time: string, local: string): boolean {
        return DateCustom.isEqual(date, this.date) && this.time === time && this.local === local;
    }

    public isAltarServerAssign(id: number): boolean {
        let flag = false;
        this.altarServers.getAll().forEach(altarServer => {
            if (altarServer.id === id)
                flag = true;
        })
        return flag;
    }

}