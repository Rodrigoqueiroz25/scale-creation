
import DaysWeek from "../../../helpers/DaysWeek";
import DateAdaper from "./DateAdapter";

export default class DateDefaultAdapter implements DateAdaper{

    private date: Date;

    constructor(day: number, month: number, year: number) {
        //const res = Calendar.getMonth(month)
        this.date = new Date(year, month - 1, day);
    }

    public static getActualDate(){
        const date = new Date();
        return new DateDefaultAdapter(date.getDate(), date.getMonth() + 1, date.getFullYear());
    }

    
    getYear(): number {
        return this.date.getFullYear();
    }
    isLeapYear(year: number): boolean {
        return (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0));
    }
    getDayWeek(): string {
        return DaysWeek.getDay(this.date.getDay() + 1);
    }
    getDayNumber(): number {
        return this.date.getDate();
    }

    isSunday(): boolean {
        return this.getDayWeek() === DaysWeek.sunday;
    }

    isMonday(): boolean {
        return this.getDayWeek() === DaysWeek.monday;
    }

    isBusinessDay(): boolean { //regra de negócio???
        return this.getDayWeek() !== DaysWeek.monday;
    }

}


    // getDateFormatted(): string{

    // }