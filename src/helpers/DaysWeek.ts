
type Day = {
    name: string;
    id: number;
}

export default class DaysWeek {

    public static get sunday(){
        return "DOMINGO";
    }
    
    public static get monday(){
        return "SEGUNDA-FEIRA";
    }
    
    public static get tuesday(){
        return "TERÇA-FEIRA";
    }
    
    public static get wednesday(){
        return "QUARTA-FEIRA";
    }
    
    public static get thursday(){
        return "QUINTA-FEIRA";
    }
    
    public static get friday(){
        return "SEXTA-FEIRA";
    }
    
    public static get saturday(){
        return "SÁBADO";
    }
    

    private static days: Day[] = [
        {
            name: this.sunday,
            id: 1
        },
        {
            name: this.monday,
            id: 2
        },
        {
            name: this.tuesday,
            id: 3
        },
        {
            name: this.wednesday,
            id: 4
        },
        {
            name: this.thursday,
            id: 5
        },
        {
            name: this.friday,
            id: 6
        },
        {
            name: this.saturday,
            id: 7
        },
    ];

    public static getDay(id: number): string {
        const day = this.days.find((d) => d.id === id);
        if (!day) {
            throw new Error("Dia inválido.");
        }
        return day.name;
    }

}
