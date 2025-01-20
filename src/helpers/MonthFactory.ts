import {NameMonths} from "../enum/NameMonths.enum";
import {isLeapYear} from "../utils/functions";
import Month from "../entities/Month";
import Week from "../entities/Week";
import DateCustom from "../entities/DateCustom";

export default class MonthFactory {

    private static monthGenerator(totalDays: number, idMes: number, year: number, name: string): Month {
        const month =  new Month(name, year, idMes, totalDays);
        let week = new Week(1);
        for (let dayMonth = 1; dayMonth <= totalDays; dayMonth++) {
            let date = new DateCustom(dayMonth, idMes, year);
            week.addDay(date);
            if (date.isSaturday() || (dayMonth === totalDays)) {
                month.addWeek(week);
                week = new Week(month.totalWeeks + 1);
            }
        }
        return month;
    }

    public static create(name: string, year: number) {
        switch (name) {
            case NameMonths.JANEIRO:
                return this.monthGenerator(31, 1, year, name);
            case NameMonths.FEVEREIRO:
                return this.monthGenerator(isLeapYear(year) ? 29 : 28, 2, year, name);
            case NameMonths.MARCO:
                return this.monthGenerator(31, 3, year, name);
            case NameMonths.ABRIL:
                return this.monthGenerator(30, 4, year, name);
            case NameMonths.MAIO:
                return this.monthGenerator(31, 5, year, name);
            case NameMonths.JUNHO:
                return this.monthGenerator(30, 6, year, name);
            case NameMonths.JULHO:
                return this.monthGenerator(31, 7, year, name);
            case NameMonths.AGOSTO:
                return this.monthGenerator(31, 8, year, name);
            case NameMonths.SETEMBRO:
                return this.monthGenerator(30, 9, year, name);
            case NameMonths.OUTUBRO:
                return this.monthGenerator(31, 10, year, name);
            case NameMonths.NOVEMBRO:
                return this.monthGenerator(30, 11, year, name);
            case NameMonths.DEZEMBRO:
                return this.monthGenerator(31, 12, year, name);
            default:
                throw new Error(`Unknown Month ${name}`);
        }
    }

}