import Month from "../entities/Month";
import {NameMonths} from "../enum/NameMonths.enum";
import Week from "../entities/Week";
import DateCustom from "../entities/DateCustom";


let month: Month;

describe('Month', () => {
    beforeEach(() => {
        month = new Month(NameMonths.JANEIRO, 2024, 1, 31);
    })

    test("Lança exceção se nome não for válido", () => {
        expect(() => new Month("Janeir", 2024, 1, 31)).toThrow("Missing name month");
    })

    test("o nome é JANEIRO conforme passado no construtor", () => {
        expect(month.getName()).toEqual("JANEIRO");
    })

    test("o id é 1 conforme passado no construtor", () => {
        expect(month.number).toEqual(1);
    })

    test("o total de dias é 31 conforme passado no construtor", () => {
        expect(month.totalDays).toEqual(31);
    })

    test("Adiciona uma semana ao mês", () => {
        const week = new Week(1);
        week.addDay(new DateCustom(2, 1, 2024));
        week.addDay(new DateCustom(3, 1, 2024));
        week.addDay(new DateCustom(4, 1, 2024));
        month.addWeek(week);
        expect(month.getWeek(1)).toEqual({"days": [{"day": 2, "dayWeek": "TERCA-FEIRA", "dayWeekId": 2, "month": 1, "year": 2024}, {"day": 3, "dayWeek": "QUARTA-FEIRA", "dayWeekId": 3, "month": 1, "year": 2024}, {"day": 4, "dayWeek": "QUINTA-FEIRA", "dayWeekId": 4, "month": 1, "year": 2024}], "id": 1});
    })

    test("Não pode adicionar semana com id igual de semana existente", () => {
        const week = new Week(1);
        const week2 = new Week(1);
        week.addDay(new DateCustom(2, 1, 2024));
        week.addDay(new DateCustom(3, 1, 2024));
        week.addDay(new DateCustom(4, 1, 2024));
        week2.addDay(new DateCustom(2, 1, 2024));
        week2.addDay(new DateCustom(3, 1, 2024));
        week2.addDay(new DateCustom(4, 1, 2024));
        month.addWeek(week);
        expect(() => month.addWeek(week2)).toThrow("week with id is already in month")
    })

    test("Obtem todas as semanas do mês", () => {
        const week = new Week(1);
        const week2 = new Week(2);
        week.addDay(new DateCustom(2, 1, 2024));
        week.addDay(new DateCustom(3, 1, 2024));
        week.addDay(new DateCustom(4, 1, 2024));
        month.addWeek(week);
        week2.addDay(new DateCustom(2, 1, 2024));
        week2.addDay(new DateCustom(3, 1, 2024));
        week2.addDay(new DateCustom(4, 1, 2024));
        month.addWeek(week2);
        expect(month.allWeeks).toEqual([{"days": [{"day": 2, "dayWeek": "TERCA-FEIRA", "dayWeekId": 2, "month": 1, "year": 2024}, {"day": 3, "dayWeek": "QUARTA-FEIRA", "dayWeekId": 3, "month": 1, "year": 2024}, {"day": 4, "dayWeek": "QUINTA-FEIRA", "dayWeekId": 4, "month": 1, "year": 2024}], "id": 1}, {"days": [{"day": 2, "dayWeek": "TERCA-FEIRA", "dayWeekId": 2, "month": 1, "year": 2024}, {"day": 3, "dayWeek": "QUARTA-FEIRA", "dayWeekId": 3, "month": 1, "year": 2024}, {"day": 4, "dayWeek": "QUINTA-FEIRA", "dayWeekId": 4, "month": 1, "year": 2024}], "id": 2}]);
    })

    test("não pode obter semana com id menor que 1", () => {
        expect(() => month.getWeek(0)).toThrow("semana inválida")
    })

    test("não pode obter semana que tem id maior que a quantidade existente", () => {
        const week = new Week(1);
        week.addDay(new DateCustom(2, 1, 2024));
        week.addDay(new DateCustom(3, 1, 2024));
        week.addDay(new DateCustom(4, 1, 2024));
        month.addWeek(week);
        expect(() => month.getWeek(2)).toThrow("semana inválida")
    })

    test("não pode obter semana que não existe", () => {
        const week = new Week(1);
        const week2 = new Week(3);
        week.addDay(new DateCustom(2, 1, 2024));
        week.addDay(new DateCustom(3, 1, 2024));
        week.addDay(new DateCustom(4, 1, 2024));
        month.addWeek(week);
        month.addWeek(week2);
        expect(() => month.getWeek(2)).toThrow("semana inválida")
    })


})

