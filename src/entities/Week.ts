import DateCustom from "./DateCustom";

export default class Week {

    private readonly days: DateCustom[];

    constructor(private id: number){
        if(this.id < 1 ) throw new Error("semana inválida");
        this.days = [];
    }

    public addDay(day: DateCustom){
        if(this.days.length <= 7)
            this.days.push(day);
    }

    public getAll(){
        return this.days;
    }

    public get number(): number{
        return this.id;
    }

}