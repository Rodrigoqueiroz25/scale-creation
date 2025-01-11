
import DateDefaultAdapter from "../infra/adapters/date/DateDefaultAdapter";
import Calendar from "./Calendar";

type Day = {
    number: number;
    dayWeekId: number;
}
//interface chamada Day e classes com os nomes dos dias

type Week = {
    id: number;
    days: Day[];
}

type Month = {
    name: string;
    numberDays: number;
    id: number;
}

export class MonthlyCalendar {

    private numWeeks: number;
    private weeks: Week[] = [];
    private month: Month;

    constructor(private name: string, private year: number) {
        this.month = Calendar.getMonthByName(name);
        this.numWeeks = 1;

        let week: Week = {
            id: this.numWeeks,
            days: []
        };

        for (let dayMonth = 1; dayMonth <= this.month.numberDays; dayMonth++) {//para cada dia do mês faz

            if (this.isMonday(dayMonth) && dayMonth !== 1) {// se for segunda e não for o primeiro dia do mês //condição de parada. finaliza semana.
                this.weeks.push(week);
                if (!this.monthEnds(dayMonth)) { //se não for ultimo dia do mês
                    this.numWeeks++;
                    week = {
                        id: this.numWeeks,
                        days: []
                    };
                }
            }
            else { 
                if(!this.isMonday(dayMonth)){// se não for segunda cria o dia e adiciona no array week.
                    let day: Day = {
                        number: dayMonth,
                        dayWeekId: this.getDayWeek(dayMonth, this.month.id)
                    }
                    week.days.push(day);
                }
            }

            if (this.monthEnds(dayMonth)) { //se o mês acabou, encerra.
                this.weeks.push(week);
                break;
            }
        }
    }


    public getWeek(num: number){
        if(num > 0)
            return this.weeks[num - 1];
    }

    get numMonth(){
        return this.month.id;
    }

    get numberWeeks(){
        return this.numWeeks;
    }

    private isMonday(day: number): boolean{
        const weekDay = new DateDefaultAdapter(day, this.month.id, this.year);
        // const weekDay = this.getDayWeek(day, this.month.id);
        return weekDay.isMonday();
    }

     
    private monthEnds(dayMonth: number): boolean {
        return dayMonth === this.month.numberDays;
    }


    private getDayWeek(day: number, month: number) {
        //return new DateDefaultAdapter(day, this.month.id, this.year).getDayWeek();
        return new Date(this.year, month - 1, day).getDay();
    }

}