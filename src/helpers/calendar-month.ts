import { daysWeek, months } from "../constants/calendar";

type Day = {
    id: number;
    name: string;
}

type Week = {
    id: number;
    days: Day[];
}

export class MonthlyCalendar {

    private id: number;
    private numWeeks: number;
    private lenght: number;
    private weeks: Week[] = [];

    constructor(private name: string) {
        this.lenght = this.numberDaysMonth(months.indexOf(name));
        this.id = this.getMonthId(name) + 1;

        this.numWeeks = 1;
        let week: Week = {
            id: this.numWeeks,
            days: []
        };

        for (let dayMonth = 1; dayMonth <= this.lenght; dayMonth++) {
            let dayWeekId = this.getDayWeek(dayMonth, this.id - 1);

            if (dayWeekId === 1 && dayMonth !== 1) {
                this.weeks.push(week);
                if (!this.monthEnds(dayMonth)) {
                    this.numWeeks++;
                    week = {
                        id: this.numWeeks,
                        days: []
                    };
                }
            }
            else {
                let day: Day = {
                    id: dayMonth,
                    name: daysWeek[dayWeekId]
                }
                week.days.push(day);
            }

            if (this.monthEnds(dayMonth)) {
                this.weeks.push(week);
                break;
            }
        }
    }

    get weekArray(){
        return this.weeks;
    }

    get numMonth(){
        return this.id;
    }

   
    private monthEnds(dayMonth: number): boolean {
        return dayMonth === this.lenght;
    }

    private numberDaysMonth(month: number) {
        return new Date(this.currentYear(), month + 1, 0).getDate();
    }

    private currentYear() {
        return new Date().getFullYear();
    }

    private getMonthId(nameMonth: string) {
        return months.indexOf(nameMonth);
    }

    private getDayWeek(date: number, month: number) {
        return new Date(this.currentYear(), month, date).getDay();
    }
}