import DateCustom from "./DateCustom";

export default class Week {

    private readonly days: DateCustom[];

    constructor(private id: number){
        if(this.id < 1 ) throw new Error("semana inválida");
        this.days = [];
    }

    public addDay(day: DateCustom){
        if(this.days.find(d => DateCustom.isEqual(d, day)))
            throw new Error("cannot have repeated days")
        if(this.days.length > 6) throw new Error("week support a total of 7 days")
        this.days.push(day);
    }


    public getAll(){
        return this.days;
    }

    public get number(): number{
        return this.id;
    }

}