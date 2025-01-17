import {NameMonths} from "../enum/NameMonths.enum";
import {isLeapYear} from "../utils/functions";

export default class MonthFactory {

    public static create(name: string, year: number) {
        if(name === NameMonths.JANEIRO) {
            return {
                numberDays: 31,
                id: 1
            }
        }
        if(name === NameMonths.FEVEREIRO) {
            return {
                numberDays: isLeapYear(year) ? 29 : 28,
                id: 2
            }
        }
        if(name === NameMonths.MARCO) {
            return {
                numberDays: 31,
                id: 3
            }
        }
        if(name === NameMonths.ABRIL) {
            return {
                numberDays: 30,
                id: 4
            }
        }
        if(name === NameMonths.MAIO) {
            return {
                numberDays: 31,
                id: 5
            }
        }
        if(name === NameMonths.JUNHO) {
            return {
                numberDays: 30,
                id: 6
            }
        }
        if(name === NameMonths.JULHO) {
            return {
                numberDays: 31,
                id: 7
            }
        }
        if(name === NameMonths.AGOSTO) {
            return {
                numberDays: 31,
                id: 8
            }
        }
        if(name === NameMonths.SETEMBRO) {
            return {
                numberDays: 30,
                id: 9
            }
        }
        if(name === NameMonths.OUTUBRO) {
            return {
                numberDays: 31,
                id: 10
            }
        }
        if(name === NameMonths.NOVEMBRO) {
            return {
                numberDays: 30,
                id: 11
            }
        }
        if(name === NameMonths.DEZEMBRO) {
            return {
                numberDays: 31,
                id: 12
            }
        }
        return {
            numberDays: 0,
            id: 0
        }
    }

}