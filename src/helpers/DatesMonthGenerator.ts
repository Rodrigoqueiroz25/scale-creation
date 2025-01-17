
import DateCustom from "../entities/DateCustom";
import Week from "../entities/Week";
import MonthFactory from "./MonthFactory";

export class DatesMonthGenerator {

    private weeks: Week[] = [];
    private readonly name: string;
    private readonly year: number;
    private readonly id: number;
    private readonly totalDays: number;

    constructor(name: string, year: number) {
        if(!this.isValidNameMonth(name.toUpperCase())){
            throw new Error("Missing name month");
        }
        const infoMonth = MonthFactory.create(name, year);
        this.year = year;
        this.name = name;
        this.id = infoMonth.id;
        this.totalDays = infoMonth.numberDays;
        this.execute();
    }

    private execute(){
        let week = new Week(1);
        for (let dayMonth = 1; dayMonth <= this.totalDays; dayMonth++) {
            let date = new DateCustom(dayMonth, this.id, this.year);
            week.addDay(date);
            if (date.isSaturday() || this.isLastDayMonth(dayMonth)) {
                this.weeks.push(week);
                week = new Week(this.weeks.length + 1)
            }
        }
    }

    public getName(): string {
        return this.name;
    }

    public get totalWeeks(){
        return this.weeks.length;
    }

    public getWeek(id: number) {
        if (id < 1 || id > this.totalWeeks)
            throw new Error("semana inválida");
        return this.weeks[id - 1];
    }

    public get number(): number {
        return this.id;
    }

    public get allWeeks(): Week[] {
        return this.weeks;
    }

    private isLastDayMonth(dayMonth: number): boolean {
        return dayMonth === this.totalDays;
    }

    private isValidNameMonth(nameMonth: string) : boolean {
        return !!MonthFactory.create(nameMonth, this.year);
    }

}
