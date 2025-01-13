import { isLeapYear } from "../utils/functions";

export type Month = {
    name: string;
    numberDays: number;
    id: number;
}

export default class Calendar {

    private static months: Month[] = [
        {
            name: "JANEIRO",
            numberDays: 31,
            id: 1
        },
        {
            name: "FEVEREIRO",
            numberDays: 28,
            id: 2
        },
        {
            name: "MARÇO",
            numberDays: 31,
            id: 3
        },
        {
            name: "ABRIL",
            numberDays: 30,
            id: 4
        },
        {
            name: "MAIO",
            numberDays: 31,
            id: 5
        },
        {
            name: "JUNHO",
            numberDays: 30,
            id: 6
        },
        {
            name: "JULHO",
            numberDays: 31,
            id: 7
        },
        {
            name: "AGOSTO",
            numberDays: 31,
            id: 8
        },
        {
            name: "SETEMBRO",
            numberDays: 30,
            id: 9
        },
        {
            name: "OUTUBRO",
            numberDays: 31,
            id: 10
        },
        {
            name: "NOVEMBRO",
            numberDays: 30,
            id: 11
        },
        {
            name: "DEZEMBRO",
            numberDays: 31,
            id: 12
        },

    ];

    public static listMonths(){
        return this.months;
    }

    public static getMonthByName(name: string): Month {
        const month = this.months.find((m) => m.name === name.toUpperCase());
        if (!month) {
            throw new Error("Mês inválido.");
        }
        return this.isleapYear(month);
    }

    public static getMonthById(id: number): Month {
        const month = this.months.find((m) => m.id === id);
        if (!month) {
            throw new Error("Mês inválido.");
        }
        return this.isleapYear(month);
    }

    private static isleapYear(month: Month) {
        if (month.name === "FEVEREIRO" && this.isBissexto()) {
            month.numberDays = 29;
        }
        return month;
    }

    private static isBissexto() {
        const year = new Date().getFullYear();
        return isLeapYear(year);

    }
}
