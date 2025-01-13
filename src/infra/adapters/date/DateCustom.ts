
import DateAdapter from "./DateAdapter";


export default class DateCustom implements DateAdapter {

    private day: number;
    private year: number;
    private month: number;
    private dayWeekId: number;
    private dayWeek: string;

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

    public getDayWeek(): string {
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

    private genDayWeek(id: number): string {
        switch (id) {
            case 0:
                return "DOMINGO";
            case 1:
                return "SEGUNDA-FEIRA";
            case 2:
                return "TERÇA-FEIRA";
            case 3:
               return "QUARTA-FEIRA";
            case 4:
                return "QUINTA-FEIRA";
            case 5:
                return "SEXTA-FEIRA";
            case 6:
                return "SÁBADO";
        }
        return "";
    }

}