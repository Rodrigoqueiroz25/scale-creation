
import Week from "./Week";
import {NameMonths} from "../enum/NameMonths.enum";

export default class Month {

    private weeks: Week[] = [];
    private readonly name: string;
    private readonly year: number;
    private readonly id: number;
    private readonly length: number;

    constructor(name: string, year: number, id: number, length: number) {
        if(!this.isValidNameMonth(name.toUpperCase())) {
            throw new Error("Missing name month");
        }
        this.year = year;
        this.name = name;
        this.id = id;
        this.length = length;
    }

    public getName(): string {
        return this.name;
    }

    public get number(): number {
        return this.id;
    }

    public get totalWeeks(){
        return this.weeks.length;
    }

    public get totalDays(){
        return this.length;
    }

    public getWeek(id: number) {
        if (id < 1 || id > this.totalWeeks || this.weeks[id -1])
            throw new Error("semana inválida");
        return this.weeks[id - 1];
    }

    public get allWeeks(): Week[] {
        return this.weeks;
    }

    public addWeek(week: Week): void {
        if(this.weeks.find(w => w.number === week.number))
            throw new Error("week with id is already in month");
        this.weeks.push(week);
    }

    private isValidNameMonth(nameMonth: string)  {
        return !!Object.values(NameMonths).find(name => name === nameMonth);
    }

}
