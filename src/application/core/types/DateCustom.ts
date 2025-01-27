
import { DaysWeek } from "../../shared/enums/DaysWeek.enum";

export default class DateCustom {

    private readonly day: number;
    private readonly year: number;
    private readonly month: number;
    private readonly dayWeekId: number;
    private readonly dayWeek: DaysWeek;

    constructor(day: number, month: number, year: number) {
        //fazer validações.
        if(day < 1) throw new Error("Data inválida");
        if(month < 1 || month > 12) throw new Error("Data inválida");
      
        this.day = day;
        this.year = year;
        this.month = month;
        this.dayWeekId = new Date(year, month - 1, day).getDay();
        this.dayWeek = this.genDayWeek(this.dayWeekId);
    }

    public getMonth(): number {
        return this.month;
    }
 
    public getYear(): number {
        return this.year;
    }

    public getDayWeek(): DaysWeek {
        return this.dayWeek;
    }

    public getDayWeekId(): number {
        return this.dayWeekId;
    }

    public getDayNumber(): number {
        return this.day;
    }

    public isSaturday(): boolean {
        return this.dayWeek === this.genDayWeek(6);
    }

    public isSunday(): boolean {
        return this.dayWeek === this.genDayWeek(0);
    }

    //compare
    public static isEqual(date1: DateCustom, date2: DateCustom): boolean {
        return date1.getDayNumber() === date2.getDayNumber() && date1.getMonth() === date2.getMonth() && date1.getYear() === date2.getYear() &&
            date1.getDayWeekId() === date2.getDayWeekId() && date1.getDayWeek() === date2.getDayWeek();
    }

    private genDayWeek(id: number): DaysWeek {
        if(id < 0 || id > 6) throw new Error("dia inválido");
        const days = [
            DaysWeek.DOMINGO,
            DaysWeek.SEGUNDA,
            DaysWeek.TERCA,
            DaysWeek.QUARTA,
            DaysWeek.QUINTA,
            DaysWeek.SEXTA,
            DaysWeek.SABADO,
        ];
        return days[id];
    }

}