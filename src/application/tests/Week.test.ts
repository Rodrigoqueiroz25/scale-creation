
import {describe} from "@jest/globals";
import Week from "../core/types/Week";
import DateCustom from "../core/types/DateCustom";

let week: Week;

describe("Week", () => {

    test("Lança uma exceção se id da semana for menor q 1", () => {
        expect(() => new Week(0)).toThrow("semana inválida")
    })

    test("o id da semana é 1", () => {
        week = new Week(1);
        expect(week.number).toEqual(1);
    })

    test("se o dia 18/01/2025, sábado foi adicionado", () => {
        week = new Week(1);
        week.addDay(new DateCustom(18, 1, 2025));
        expect(week.getAll()).toEqual([{"day": 18, "dayWeek": "SABADO", "dayWeekId": 6, "month": 1, "year": 2025}]);
    })

    test("se adicionar mais que 7 dias, lança exceção", () => {
        week = new Week(1);
        week.addDay(new DateCustom(18, 1, 2025));
        week.addDay(new DateCustom(19, 1, 2025));
        week.addDay(new DateCustom(20, 1, 2025));
        week.addDay(new DateCustom(21, 1, 2025));
        week.addDay(new DateCustom(22, 1, 2025));
        week.addDay(new DateCustom(23, 1, 2025));
        week.addDay(new DateCustom(24, 1, 2025));
        expect(() => week.addDay(new DateCustom(25, 1, 2025))).toThrow("week support a total of 7 days");
    })

    test("se adicionar uma data repetida, lança exceção", () => {
        week = new Week(1);
        week.addDay(new DateCustom(18, 2, 2025));
        expect(() => week.addDay(new DateCustom(18, 2, 2025))).toThrow("cannot have repeated days");
    })

})