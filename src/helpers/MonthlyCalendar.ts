import DateCustom from "../infra/adapters/date/DateCustom";
import Calendar, { Month } from "./Calendar";

type Week = {
    id: number;
    days: DateCustom[];
}

export class MonthlyCalendar {

    private numWeeks: number;
    private weeks: Week[] = [];
    private month: Month;

    constructor(private name: string, private year: number) {
        this.month = Calendar.getMonthByName(this.name);
        this.numWeeks = 0;
        let week = this.createWeek();
        for (let dayMonth = 1; dayMonth <= this.month.numberDays; dayMonth++) {
            let date = new DateCustom(dayMonth, this.month.id, this.year);
            week.days.push(date);
            if (date.isSaturday() || this.isLastDayMonth(dayMonth)) {
                this.weeks.push(week);
                this.numWeeks = this.weeks.length;
                week = this.createWeek();
            }
        }
    }

    public getWeek(num: number): Week {
        if (num <= 0 || num > this.numWeeks)
            throw new Error("semana inválida");
        return this.weeks[num - 1];
    }

    public getWeeks() {
        return this.weeks;
    }

    get numMonth() {
        return this.month.id;
    }

    get numberWeeks() {
        return this.numWeeks;
    }

    private createWeek(): Week {
        return {
            id: this.numWeeks + 1,
            days: []
        }
    }

    private isLastDayMonth(dayMonth: number): boolean {
        return dayMonth === this.month.numberDays;
    }

}