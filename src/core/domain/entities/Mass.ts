import DateCustom from "../../../modules/calendar/DateCustom";
import {Option} from "../../../../exclude/hooks(deprecated)/@types/option";
import {AltarServerRecord} from "./AltarServerRecord";
import {AltarServer} from "../models/altar-server";

export type DateTimeLocal = {
    date: DateCustom,
    time: string,
    local: string
}


export default class Mass {

    constructor(
        private readonly date: DateCustom,
        private readonly time: string,
        private readonly local: string,
        private description: string,
        private numVacancies: number,
        private altarServers: AltarServerRecord
    ) {
    }

    public static create(date: DateCustom, time: string, local: string, description: string, numVacancies: number): Mass {
        return new Mass(date, time, local, description, numVacancies, AltarServerRecord.create());
    }

    public static restore(date: DateCustom, time: string, local: string, description: string, numVacancies: number, altarServers: AltarServerRecord): Mass {
        return new Mass(date, time, local, description, numVacancies, altarServers);
    }

    public setDescription(description: string) {
        this.description = description;
    }

    public assignAltarServer(altarServer: Option, idSlot: number) {
        if(!this.isAltarServerAssign(altarServer.id))
            this.altarServers.set(idSlot,altarServer);
    }

    public unassignAltarServer(idSlot: number) {
        this.altarServers.delete(idSlot);
    }

    public getAllAltarServers(): AltarServer[] {
        return this.altarServers.getAll();
    }

    public getAltarServers(): AltarServerRecord {
        return this.altarServers;
    }


    public getAltarServer(idSlot: number): AltarServer | undefined {
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

    public getDateTimeLocal(): DateTimeLocal{
        return {
            date: this.date,
            time: this.time,
            local: this.local
        }
    }

    public get id(): string {
        return `${this.getDate().getDayNumber()}/${this.getDate().getMonth()}/${this.getDate().getYear()}-${this.local}-${this.time}`;
    }

    public isMatch(massId: DateTimeLocal): boolean {
        return DateCustom.isEqual(massId.date, this.date) && this.time === massId.time && this.local === massId.local;
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