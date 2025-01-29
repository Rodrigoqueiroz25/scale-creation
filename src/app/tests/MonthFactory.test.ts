
import {describe} from "@jest/globals";
import MonthFactory from "../domain/factories/MonthFactory";
import Month from "../domain/entities/Month";
import {NameMonths} from "../shared/enums/NameMonths.enum";

//year 2024
let month: Month;

describe("Factory january month", () => {
    beforeEach(() => {
        month = MonthFactory.create(NameMonths.JANEIRO, 2024) as Month;
    })

    test("O mês de janeiro tem id 1", () => {
        expect(month.number).toEqual(1);
    })

    test("O mês de janeiro tem 31 dias no total", () => {
        expect(month.totalDays).toEqual(31);
    })

    test("O mês de janeiro tem o nome JANEIRO", () => {
        expect(month.getName()).toEqual(NameMonths.JANEIRO);
    })

    test("O mês de janeiro de 2024 tem 5 semanas", () => {
        expect(month.totalWeeks).toEqual(5);
    })

    test("Todos os dias do mês de janeiro de 2024", () => {
        expect(JSON.stringify(month.allWeeks)).toEqual(
            "[{\"id\":1,\"days\":[{\"day\":1,\"year\":2024,\"month\":1,\"dayWeekId\":1,\"dayWeek\":\"SEGUNDA-FEIRA\"},{\"day\":2,\"year\":2024,\"month\":1,\"dayWeekId\":2,\"dayWeek\":\"TERCA-FEIRA\"},{\"day\":3,\"year\":2024,\"month\":1,\"dayWeekId\":3,\"dayWeek\":\"QUARTA-FEIRA\"},{\"day\":4,\"year\":2024,\"month\":1,\"dayWeekId\":4,\"dayWeek\":\"QUINTA-FEIRA\"},{\"day\":5,\"year\":2024,\"month\":1,\"dayWeekId\":5,\"dayWeek\":\"SEXTA-FEIRA\"},{\"day\":6,\"year\":2024,\"month\":1,\"dayWeekId\":6,\"dayWeek\":\"SABADO\"}]},{\"id\":2,\"days\":[{\"day\":7,\"year\":2024,\"month\":1,\"dayWeekId\":0,\"dayWeek\":\"DOMINGO\"},{\"day\":8,\"year\":2024,\"month\":1,\"dayWeekId\":1,\"dayWeek\":\"SEGUNDA-FEIRA\"},{\"day\":9,\"year\":2024,\"month\":1,\"dayWeekId\":2,\"dayWeek\":\"TERCA-FEIRA\"},{\"day\":10,\"year\":2024,\"month\":1,\"dayWeekId\":3,\"dayWeek\":\"QUARTA-FEIRA\"},{\"day\":11,\"year\":2024,\"month\":1,\"dayWeekId\":4,\"dayWeek\":\"QUINTA-FEIRA\"},{\"day\":12,\"year\":2024,\"month\":1,\"dayWeekId\":5,\"dayWeek\":\"SEXTA-FEIRA\"},{\"day\":13,\"year\":2024,\"month\":1,\"dayWeekId\":6,\"dayWeek\":\"SABADO\"}]},{\"id\":3,\"days\":[{\"day\":14,\"year\":2024,\"month\":1,\"dayWeekId\":0,\"dayWeek\":\"DOMINGO\"},{\"day\":15,\"year\":2024,\"month\":1,\"dayWeekId\":1,\"dayWeek\":\"SEGUNDA-FEIRA\"},{\"day\":16,\"year\":2024,\"month\":1,\"dayWeekId\":2,\"dayWeek\":\"TERCA-FEIRA\"},{\"day\":17,\"year\":2024,\"month\":1,\"dayWeekId\":3,\"dayWeek\":\"QUARTA-FEIRA\"},{\"day\":18,\"year\":2024,\"month\":1,\"dayWeekId\":4,\"dayWeek\":\"QUINTA-FEIRA\"},{\"day\":19,\"year\":2024,\"month\":1,\"dayWeekId\":5,\"dayWeek\":\"SEXTA-FEIRA\"},{\"day\":20,\"year\":2024,\"month\":1,\"dayWeekId\":6,\"dayWeek\":\"SABADO\"}]},{\"id\":4,\"days\":[{\"day\":21,\"year\":2024,\"month\":1,\"dayWeekId\":0,\"dayWeek\":\"DOMINGO\"},{\"day\":22,\"year\":2024,\"month\":1,\"dayWeekId\":1,\"dayWeek\":\"SEGUNDA-FEIRA\"},{\"day\":23,\"year\":2024,\"month\":1,\"dayWeekId\":2,\"dayWeek\":\"TERCA-FEIRA\"},{\"day\":24,\"year\":2024,\"month\":1,\"dayWeekId\":3,\"dayWeek\":\"QUARTA-FEIRA\"},{\"day\":25,\"year\":2024,\"month\":1,\"dayWeekId\":4,\"dayWeek\":\"QUINTA-FEIRA\"},{\"day\":26,\"year\":2024,\"month\":1,\"dayWeekId\":5,\"dayWeek\":\"SEXTA-FEIRA\"},{\"day\":27,\"year\":2024,\"month\":1,\"dayWeekId\":6,\"dayWeek\":\"SABADO\"}]},{\"id\":5,\"days\":[{\"day\":28,\"year\":2024,\"month\":1,\"dayWeekId\":0,\"dayWeek\":\"DOMINGO\"},{\"day\":29,\"year\":2024,\"month\":1,\"dayWeekId\":1,\"dayWeek\":\"SEGUNDA-FEIRA\"},{\"day\":30,\"year\":2024,\"month\":1,\"dayWeekId\":2,\"dayWeek\":\"TERCA-FEIRA\"},{\"day\":31,\"year\":2024,\"month\":1,\"dayWeekId\":3,\"dayWeek\":\"QUARTA-FEIRA\"}]}]"
        );
    })
})

describe("Factory february month", () => {

    beforeEach(() => {
        month = MonthFactory.create(NameMonths.FEVEREIRO, 2024) as Month;
    })

    test("O mês de fevereiro tem id 2", () => {
        expect(month.number).toEqual(2);
    })

    test("O mês de fevereiro tem 29 dias em 2024 por ser ano bissexto", () => {
        expect(month.totalDays).toEqual(29);
    })

    test("O mês de fevereiro tem 28 dias em 2023 por não ser ano bissexto", () => {
        const month = MonthFactory.create(NameMonths.FEVEREIRO, 2023) as Month;
        expect(month.totalDays).toEqual(28);
    })


    test("O mês de fevereiro tem o nome FEVEREIRO", () => {
        expect(month.getName()).toEqual(NameMonths.FEVEREIRO);
    })

    test("O mês de fevereiro de 2024 tem 5 semanas", () => {
        expect(month.totalWeeks).toEqual(5);
    })

    test("Todos os dias do mês de fevereiro de 2024", () => {
        expect(JSON.stringify(month.allWeeks)).toEqual(
            "[{\"id\":1,\"days\":[{\"day\":1,\"year\":2024,\"month\":2,\"dayWeekId\":4,\"dayWeek\":\"QUINTA-FEIRA\"},{\"day\":2,\"year\":2024,\"month\":2,\"dayWeekId\":5,\"dayWeek\":\"SEXTA-FEIRA\"},{\"day\":3,\"year\":2024,\"month\":2,\"dayWeekId\":6,\"dayWeek\":\"SABADO\"}]},{\"id\":2,\"days\":[{\"day\":4,\"year\":2024,\"month\":2,\"dayWeekId\":0,\"dayWeek\":\"DOMINGO\"},{\"day\":5,\"year\":2024,\"month\":2,\"dayWeekId\":1,\"dayWeek\":\"SEGUNDA-FEIRA\"},{\"day\":6,\"year\":2024,\"month\":2,\"dayWeekId\":2,\"dayWeek\":\"TERCA-FEIRA\"},{\"day\":7,\"year\":2024,\"month\":2,\"dayWeekId\":3,\"dayWeek\":\"QUARTA-FEIRA\"},{\"day\":8,\"year\":2024,\"month\":2,\"dayWeekId\":4,\"dayWeek\":\"QUINTA-FEIRA\"},{\"day\":9,\"year\":2024,\"month\":2,\"dayWeekId\":5,\"dayWeek\":\"SEXTA-FEIRA\"},{\"day\":10,\"year\":2024,\"month\":2,\"dayWeekId\":6,\"dayWeek\":\"SABADO\"}]},{\"id\":3,\"days\":[{\"day\":11,\"year\":2024,\"month\":2,\"dayWeekId\":0,\"dayWeek\":\"DOMINGO\"},{\"day\":12,\"year\":2024,\"month\":2,\"dayWeekId\":1,\"dayWeek\":\"SEGUNDA-FEIRA\"},{\"day\":13,\"year\":2024,\"month\":2,\"dayWeekId\":2,\"dayWeek\":\"TERCA-FEIRA\"},{\"day\":14,\"year\":2024,\"month\":2,\"dayWeekId\":3,\"dayWeek\":\"QUARTA-FEIRA\"},{\"day\":15,\"year\":2024,\"month\":2,\"dayWeekId\":4,\"dayWeek\":\"QUINTA-FEIRA\"},{\"day\":16,\"year\":2024,\"month\":2,\"dayWeekId\":5,\"dayWeek\":\"SEXTA-FEIRA\"},{\"day\":17,\"year\":2024,\"month\":2,\"dayWeekId\":6,\"dayWeek\":\"SABADO\"}]},{\"id\":4,\"days\":[{\"day\":18,\"year\":2024,\"month\":2,\"dayWeekId\":0,\"dayWeek\":\"DOMINGO\"},{\"day\":19,\"year\":2024,\"month\":2,\"dayWeekId\":1,\"dayWeek\":\"SEGUNDA-FEIRA\"},{\"day\":20,\"year\":2024,\"month\":2,\"dayWeekId\":2,\"dayWeek\":\"TERCA-FEIRA\"},{\"day\":21,\"year\":2024,\"month\":2,\"dayWeekId\":3,\"dayWeek\":\"QUARTA-FEIRA\"},{\"day\":22,\"year\":2024,\"month\":2,\"dayWeekId\":4,\"dayWeek\":\"QUINTA-FEIRA\"},{\"day\":23,\"year\":2024,\"month\":2,\"dayWeekId\":5,\"dayWeek\":\"SEXTA-FEIRA\"},{\"day\":24,\"year\":2024,\"month\":2,\"dayWeekId\":6,\"dayWeek\":\"SABADO\"}]},{\"id\":5,\"days\":[{\"day\":25,\"year\":2024,\"month\":2,\"dayWeekId\":0,\"dayWeek\":\"DOMINGO\"},{\"day\":26,\"year\":2024,\"month\":2,\"dayWeekId\":1,\"dayWeek\":\"SEGUNDA-FEIRA\"},{\"day\":27,\"year\":2024,\"month\":2,\"dayWeekId\":2,\"dayWeek\":\"TERCA-FEIRA\"},{\"day\":28,\"year\":2024,\"month\":2,\"dayWeekId\":3,\"dayWeek\":\"QUARTA-FEIRA\"},{\"day\":29,\"year\":2024,\"month\":2,\"dayWeekId\":4,\"dayWeek\":\"QUINTA-FEIRA\"}]}]"
        );
    })
})

describe("Factory march month", () => {

    beforeEach(() => {
        month = MonthFactory.create(NameMonths.MARCO, 2024) as Month;
    })

    test("O mês de março tem id 3", () => {
        expect(month.number).toEqual(3);
    })

    test("O mês de março tem 31 dias no total", () => {
        expect(month.totalDays).toEqual(31);
    })

    test("O mês de março tem o nome MARCO", () => {
        expect(month.getName()).toEqual(NameMonths.MARCO);
    })

    test("O mês de março de 2024 tem 5 semanas", () => {
        expect(month.totalWeeks).toEqual(6);
    })

    test("Todos os dias do mês de março de 2024", () => {
        expect(JSON.stringify(month.allWeeks)).toEqual(
            "[{\"id\":1,\"days\":[{\"day\":1,\"year\":2024,\"month\":3,\"dayWeekId\":5,\"dayWeek\":\"SEXTA-FEIRA\"},{\"day\":2,\"year\":2024,\"month\":3,\"dayWeekId\":6,\"dayWeek\":\"SABADO\"}]},{\"id\":2,\"days\":[{\"day\":3,\"year\":2024,\"month\":3,\"dayWeekId\":0,\"dayWeek\":\"DOMINGO\"},{\"day\":4,\"year\":2024,\"month\":3,\"dayWeekId\":1,\"dayWeek\":\"SEGUNDA-FEIRA\"},{\"day\":5,\"year\":2024,\"month\":3,\"dayWeekId\":2,\"dayWeek\":\"TERCA-FEIRA\"},{\"day\":6,\"year\":2024,\"month\":3,\"dayWeekId\":3,\"dayWeek\":\"QUARTA-FEIRA\"},{\"day\":7,\"year\":2024,\"month\":3,\"dayWeekId\":4,\"dayWeek\":\"QUINTA-FEIRA\"},{\"day\":8,\"year\":2024,\"month\":3,\"dayWeekId\":5,\"dayWeek\":\"SEXTA-FEIRA\"},{\"day\":9,\"year\":2024,\"month\":3,\"dayWeekId\":6,\"dayWeek\":\"SABADO\"}]},{\"id\":3,\"days\":[{\"day\":10,\"year\":2024,\"month\":3,\"dayWeekId\":0,\"dayWeek\":\"DOMINGO\"},{\"day\":11,\"year\":2024,\"month\":3,\"dayWeekId\":1,\"dayWeek\":\"SEGUNDA-FEIRA\"},{\"day\":12,\"year\":2024,\"month\":3,\"dayWeekId\":2,\"dayWeek\":\"TERCA-FEIRA\"},{\"day\":13,\"year\":2024,\"month\":3,\"dayWeekId\":3,\"dayWeek\":\"QUARTA-FEIRA\"},{\"day\":14,\"year\":2024,\"month\":3,\"dayWeekId\":4,\"dayWeek\":\"QUINTA-FEIRA\"},{\"day\":15,\"year\":2024,\"month\":3,\"dayWeekId\":5,\"dayWeek\":\"SEXTA-FEIRA\"},{\"day\":16,\"year\":2024,\"month\":3,\"dayWeekId\":6,\"dayWeek\":\"SABADO\"}]},{\"id\":4,\"days\":[{\"day\":17,\"year\":2024,\"month\":3,\"dayWeekId\":0,\"dayWeek\":\"DOMINGO\"},{\"day\":18,\"year\":2024,\"month\":3,\"dayWeekId\":1,\"dayWeek\":\"SEGUNDA-FEIRA\"},{\"day\":19,\"year\":2024,\"month\":3,\"dayWeekId\":2,\"dayWeek\":\"TERCA-FEIRA\"},{\"day\":20,\"year\":2024,\"month\":3,\"dayWeekId\":3,\"dayWeek\":\"QUARTA-FEIRA\"},{\"day\":21,\"year\":2024,\"month\":3,\"dayWeekId\":4,\"dayWeek\":\"QUINTA-FEIRA\"},{\"day\":22,\"year\":2024,\"month\":3,\"dayWeekId\":5,\"dayWeek\":\"SEXTA-FEIRA\"},{\"day\":23,\"year\":2024,\"month\":3,\"dayWeekId\":6,\"dayWeek\":\"SABADO\"}]},{\"id\":5,\"days\":[{\"day\":24,\"year\":2024,\"month\":3,\"dayWeekId\":0,\"dayWeek\":\"DOMINGO\"},{\"day\":25,\"year\":2024,\"month\":3,\"dayWeekId\":1,\"dayWeek\":\"SEGUNDA-FEIRA\"},{\"day\":26,\"year\":2024,\"month\":3,\"dayWeekId\":2,\"dayWeek\":\"TERCA-FEIRA\"},{\"day\":27,\"year\":2024,\"month\":3,\"dayWeekId\":3,\"dayWeek\":\"QUARTA-FEIRA\"},{\"day\":28,\"year\":2024,\"month\":3,\"dayWeekId\":4,\"dayWeek\":\"QUINTA-FEIRA\"},{\"day\":29,\"year\":2024,\"month\":3,\"dayWeekId\":5,\"dayWeek\":\"SEXTA-FEIRA\"},{\"day\":30,\"year\":2024,\"month\":3,\"dayWeekId\":6,\"dayWeek\":\"SABADO\"}]},{\"id\":6,\"days\":[{\"day\":31,\"year\":2024,\"month\":3,\"dayWeekId\":0,\"dayWeek\":\"DOMINGO\"}]}]"
        );
    })
})

describe("Factory april month", () => {
    beforeEach(() => {
        month = MonthFactory.create(NameMonths.ABRIL, 2024) as Month;
    })

    test("O mês de abril tem id 4", () => {
        expect(month.number).toEqual(4);
    })

    test("O mês de abril tem 30 dias no total", () => {
        expect(month.totalDays).toEqual(30);
    })

    test("O mês de abril tem o nome ABRIL", () => {
        expect(month.getName()).toEqual(NameMonths.ABRIL);
    })

    test("O mês de abril de 2024 tem 5 semanas", () => {
        expect(month.totalWeeks).toEqual(5);
    })

    test("Todos os dias do mês de abril de 2024", () => {
        expect(JSON.stringify(month.allWeeks)).toEqual(
            "[{\"id\":1,\"days\":[{\"day\":1,\"year\":2024,\"month\":4,\"dayWeekId\":1,\"dayWeek\":\"SEGUNDA-FEIRA\"},{\"day\":2,\"year\":2024,\"month\":4,\"dayWeekId\":2,\"dayWeek\":\"TERCA-FEIRA\"},{\"day\":3,\"year\":2024,\"month\":4,\"dayWeekId\":3,\"dayWeek\":\"QUARTA-FEIRA\"},{\"day\":4,\"year\":2024,\"month\":4,\"dayWeekId\":4,\"dayWeek\":\"QUINTA-FEIRA\"},{\"day\":5,\"year\":2024,\"month\":4,\"dayWeekId\":5,\"dayWeek\":\"SEXTA-FEIRA\"},{\"day\":6,\"year\":2024,\"month\":4,\"dayWeekId\":6,\"dayWeek\":\"SABADO\"}]},{\"id\":2,\"days\":[{\"day\":7,\"year\":2024,\"month\":4,\"dayWeekId\":0,\"dayWeek\":\"DOMINGO\"},{\"day\":8,\"year\":2024,\"month\":4,\"dayWeekId\":1,\"dayWeek\":\"SEGUNDA-FEIRA\"},{\"day\":9,\"year\":2024,\"month\":4,\"dayWeekId\":2,\"dayWeek\":\"TERCA-FEIRA\"},{\"day\":10,\"year\":2024,\"month\":4,\"dayWeekId\":3,\"dayWeek\":\"QUARTA-FEIRA\"},{\"day\":11,\"year\":2024,\"month\":4,\"dayWeekId\":4,\"dayWeek\":\"QUINTA-FEIRA\"},{\"day\":12,\"year\":2024,\"month\":4,\"dayWeekId\":5,\"dayWeek\":\"SEXTA-FEIRA\"},{\"day\":13,\"year\":2024,\"month\":4,\"dayWeekId\":6,\"dayWeek\":\"SABADO\"}]},{\"id\":3,\"days\":[{\"day\":14,\"year\":2024,\"month\":4,\"dayWeekId\":0,\"dayWeek\":\"DOMINGO\"},{\"day\":15,\"year\":2024,\"month\":4,\"dayWeekId\":1,\"dayWeek\":\"SEGUNDA-FEIRA\"},{\"day\":16,\"year\":2024,\"month\":4,\"dayWeekId\":2,\"dayWeek\":\"TERCA-FEIRA\"},{\"day\":17,\"year\":2024,\"month\":4,\"dayWeekId\":3,\"dayWeek\":\"QUARTA-FEIRA\"},{\"day\":18,\"year\":2024,\"month\":4,\"dayWeekId\":4,\"dayWeek\":\"QUINTA-FEIRA\"},{\"day\":19,\"year\":2024,\"month\":4,\"dayWeekId\":5,\"dayWeek\":\"SEXTA-FEIRA\"},{\"day\":20,\"year\":2024,\"month\":4,\"dayWeekId\":6,\"dayWeek\":\"SABADO\"}]},{\"id\":4,\"days\":[{\"day\":21,\"year\":2024,\"month\":4,\"dayWeekId\":0,\"dayWeek\":\"DOMINGO\"},{\"day\":22,\"year\":2024,\"month\":4,\"dayWeekId\":1,\"dayWeek\":\"SEGUNDA-FEIRA\"},{\"day\":23,\"year\":2024,\"month\":4,\"dayWeekId\":2,\"dayWeek\":\"TERCA-FEIRA\"},{\"day\":24,\"year\":2024,\"month\":4,\"dayWeekId\":3,\"dayWeek\":\"QUARTA-FEIRA\"},{\"day\":25,\"year\":2024,\"month\":4,\"dayWeekId\":4,\"dayWeek\":\"QUINTA-FEIRA\"},{\"day\":26,\"year\":2024,\"month\":4,\"dayWeekId\":5,\"dayWeek\":\"SEXTA-FEIRA\"},{\"day\":27,\"year\":2024,\"month\":4,\"dayWeekId\":6,\"dayWeek\":\"SABADO\"}]},{\"id\":5,\"days\":[{\"day\":28,\"year\":2024,\"month\":4,\"dayWeekId\":0,\"dayWeek\":\"DOMINGO\"},{\"day\":29,\"year\":2024,\"month\":4,\"dayWeekId\":1,\"dayWeek\":\"SEGUNDA-FEIRA\"},{\"day\":30,\"year\":2024,\"month\":4,\"dayWeekId\":2,\"dayWeek\":\"TERCA-FEIRA\"}]}]"
        );
    })
})

describe("Factory may month", () => {
    beforeEach(() => {
        month = MonthFactory.create(NameMonths.MAIO, 2024) as Month;
    })

    test("O mês de maio tem id 5", () => {
        expect(month.number).toEqual(5);
    })

    test("O mês de maio tem 31 dias no total", () => {
        expect(month.totalDays).toEqual(31);
    })

    test("O mês de maio tem o nome MAIO", () => {
        expect(month.getName()).toEqual(NameMonths.MAIO);
    })

    test("O mês de maio de 2024 tem 5 semanas", () => {
        expect(month.totalWeeks).toEqual(5);
    })

    test("Todos os dias do mês de maio de 2024", () => {
        expect(JSON.stringify(month.allWeeks)).toEqual(
            "[{\"id\":1,\"days\":[{\"day\":1,\"year\":2024,\"month\":5,\"dayWeekId\":3,\"dayWeek\":\"QUARTA-FEIRA\"},{\"day\":2,\"year\":2024,\"month\":5,\"dayWeekId\":4,\"dayWeek\":\"QUINTA-FEIRA\"},{\"day\":3,\"year\":2024,\"month\":5,\"dayWeekId\":5,\"dayWeek\":\"SEXTA-FEIRA\"},{\"day\":4,\"year\":2024,\"month\":5,\"dayWeekId\":6,\"dayWeek\":\"SABADO\"}]},{\"id\":2,\"days\":[{\"day\":5,\"year\":2024,\"month\":5,\"dayWeekId\":0,\"dayWeek\":\"DOMINGO\"},{\"day\":6,\"year\":2024,\"month\":5,\"dayWeekId\":1,\"dayWeek\":\"SEGUNDA-FEIRA\"},{\"day\":7,\"year\":2024,\"month\":5,\"dayWeekId\":2,\"dayWeek\":\"TERCA-FEIRA\"},{\"day\":8,\"year\":2024,\"month\":5,\"dayWeekId\":3,\"dayWeek\":\"QUARTA-FEIRA\"},{\"day\":9,\"year\":2024,\"month\":5,\"dayWeekId\":4,\"dayWeek\":\"QUINTA-FEIRA\"},{\"day\":10,\"year\":2024,\"month\":5,\"dayWeekId\":5,\"dayWeek\":\"SEXTA-FEIRA\"},{\"day\":11,\"year\":2024,\"month\":5,\"dayWeekId\":6,\"dayWeek\":\"SABADO\"}]},{\"id\":3,\"days\":[{\"day\":12,\"year\":2024,\"month\":5,\"dayWeekId\":0,\"dayWeek\":\"DOMINGO\"},{\"day\":13,\"year\":2024,\"month\":5,\"dayWeekId\":1,\"dayWeek\":\"SEGUNDA-FEIRA\"},{\"day\":14,\"year\":2024,\"month\":5,\"dayWeekId\":2,\"dayWeek\":\"TERCA-FEIRA\"},{\"day\":15,\"year\":2024,\"month\":5,\"dayWeekId\":3,\"dayWeek\":\"QUARTA-FEIRA\"},{\"day\":16,\"year\":2024,\"month\":5,\"dayWeekId\":4,\"dayWeek\":\"QUINTA-FEIRA\"},{\"day\":17,\"year\":2024,\"month\":5,\"dayWeekId\":5,\"dayWeek\":\"SEXTA-FEIRA\"},{\"day\":18,\"year\":2024,\"month\":5,\"dayWeekId\":6,\"dayWeek\":\"SABADO\"}]},{\"id\":4,\"days\":[{\"day\":19,\"year\":2024,\"month\":5,\"dayWeekId\":0,\"dayWeek\":\"DOMINGO\"},{\"day\":20,\"year\":2024,\"month\":5,\"dayWeekId\":1,\"dayWeek\":\"SEGUNDA-FEIRA\"},{\"day\":21,\"year\":2024,\"month\":5,\"dayWeekId\":2,\"dayWeek\":\"TERCA-FEIRA\"},{\"day\":22,\"year\":2024,\"month\":5,\"dayWeekId\":3,\"dayWeek\":\"QUARTA-FEIRA\"},{\"day\":23,\"year\":2024,\"month\":5,\"dayWeekId\":4,\"dayWeek\":\"QUINTA-FEIRA\"},{\"day\":24,\"year\":2024,\"month\":5,\"dayWeekId\":5,\"dayWeek\":\"SEXTA-FEIRA\"},{\"day\":25,\"year\":2024,\"month\":5,\"dayWeekId\":6,\"dayWeek\":\"SABADO\"}]},{\"id\":5,\"days\":[{\"day\":26,\"year\":2024,\"month\":5,\"dayWeekId\":0,\"dayWeek\":\"DOMINGO\"},{\"day\":27,\"year\":2024,\"month\":5,\"dayWeekId\":1,\"dayWeek\":\"SEGUNDA-FEIRA\"},{\"day\":28,\"year\":2024,\"month\":5,\"dayWeekId\":2,\"dayWeek\":\"TERCA-FEIRA\"},{\"day\":29,\"year\":2024,\"month\":5,\"dayWeekId\":3,\"dayWeek\":\"QUARTA-FEIRA\"},{\"day\":30,\"year\":2024,\"month\":5,\"dayWeekId\":4,\"dayWeek\":\"QUINTA-FEIRA\"},{\"day\":31,\"year\":2024,\"month\":5,\"dayWeekId\":5,\"dayWeek\":\"SEXTA-FEIRA\"}]}]"
        );
    })
})

describe("Factory june month", () => {

    beforeEach(() => {
        month = MonthFactory.create(NameMonths.JUNHO, 2024) as Month;
    })

    test("O mês de junho tem id 6", () => {
        expect(month.number).toEqual(6);
    })

    test("O mês de junho tem 30 dias no total", () => {
        expect(month.totalDays).toEqual(30);
    })

    test("O mês de junho tem o nome JUNHO", () => {
        expect(month.getName()).toEqual(NameMonths.JUNHO);
    })

    test("O mês de junho de 2024 tem 6 semanas", () => {
        expect(month.totalWeeks).toEqual(6);
    })

    test("Todos os dias do mês de junho de 2024", () => {
        expect(JSON.stringify(month.allWeeks)).toEqual(
            "[{\"id\":1,\"days\":[{\"day\":1,\"year\":2024,\"month\":6,\"dayWeekId\":6,\"dayWeek\":\"SABADO\"}]},{\"id\":2,\"days\":[{\"day\":2,\"year\":2024,\"month\":6,\"dayWeekId\":0,\"dayWeek\":\"DOMINGO\"},{\"day\":3,\"year\":2024,\"month\":6,\"dayWeekId\":1,\"dayWeek\":\"SEGUNDA-FEIRA\"},{\"day\":4,\"year\":2024,\"month\":6,\"dayWeekId\":2,\"dayWeek\":\"TERCA-FEIRA\"},{\"day\":5,\"year\":2024,\"month\":6,\"dayWeekId\":3,\"dayWeek\":\"QUARTA-FEIRA\"},{\"day\":6,\"year\":2024,\"month\":6,\"dayWeekId\":4,\"dayWeek\":\"QUINTA-FEIRA\"},{\"day\":7,\"year\":2024,\"month\":6,\"dayWeekId\":5,\"dayWeek\":\"SEXTA-FEIRA\"},{\"day\":8,\"year\":2024,\"month\":6,\"dayWeekId\":6,\"dayWeek\":\"SABADO\"}]},{\"id\":3,\"days\":[{\"day\":9,\"year\":2024,\"month\":6,\"dayWeekId\":0,\"dayWeek\":\"DOMINGO\"},{\"day\":10,\"year\":2024,\"month\":6,\"dayWeekId\":1,\"dayWeek\":\"SEGUNDA-FEIRA\"},{\"day\":11,\"year\":2024,\"month\":6,\"dayWeekId\":2,\"dayWeek\":\"TERCA-FEIRA\"},{\"day\":12,\"year\":2024,\"month\":6,\"dayWeekId\":3,\"dayWeek\":\"QUARTA-FEIRA\"},{\"day\":13,\"year\":2024,\"month\":6,\"dayWeekId\":4,\"dayWeek\":\"QUINTA-FEIRA\"},{\"day\":14,\"year\":2024,\"month\":6,\"dayWeekId\":5,\"dayWeek\":\"SEXTA-FEIRA\"},{\"day\":15,\"year\":2024,\"month\":6,\"dayWeekId\":6,\"dayWeek\":\"SABADO\"}]},{\"id\":4,\"days\":[{\"day\":16,\"year\":2024,\"month\":6,\"dayWeekId\":0,\"dayWeek\":\"DOMINGO\"},{\"day\":17,\"year\":2024,\"month\":6,\"dayWeekId\":1,\"dayWeek\":\"SEGUNDA-FEIRA\"},{\"day\":18,\"year\":2024,\"month\":6,\"dayWeekId\":2,\"dayWeek\":\"TERCA-FEIRA\"},{\"day\":19,\"year\":2024,\"month\":6,\"dayWeekId\":3,\"dayWeek\":\"QUARTA-FEIRA\"},{\"day\":20,\"year\":2024,\"month\":6,\"dayWeekId\":4,\"dayWeek\":\"QUINTA-FEIRA\"},{\"day\":21,\"year\":2024,\"month\":6,\"dayWeekId\":5,\"dayWeek\":\"SEXTA-FEIRA\"},{\"day\":22,\"year\":2024,\"month\":6,\"dayWeekId\":6,\"dayWeek\":\"SABADO\"}]},{\"id\":5,\"days\":[{\"day\":23,\"year\":2024,\"month\":6,\"dayWeekId\":0,\"dayWeek\":\"DOMINGO\"},{\"day\":24,\"year\":2024,\"month\":6,\"dayWeekId\":1,\"dayWeek\":\"SEGUNDA-FEIRA\"},{\"day\":25,\"year\":2024,\"month\":6,\"dayWeekId\":2,\"dayWeek\":\"TERCA-FEIRA\"},{\"day\":26,\"year\":2024,\"month\":6,\"dayWeekId\":3,\"dayWeek\":\"QUARTA-FEIRA\"},{\"day\":27,\"year\":2024,\"month\":6,\"dayWeekId\":4,\"dayWeek\":\"QUINTA-FEIRA\"},{\"day\":28,\"year\":2024,\"month\":6,\"dayWeekId\":5,\"dayWeek\":\"SEXTA-FEIRA\"},{\"day\":29,\"year\":2024,\"month\":6,\"dayWeekId\":6,\"dayWeek\":\"SABADO\"}]},{\"id\":6,\"days\":[{\"day\":30,\"year\":2024,\"month\":6,\"dayWeekId\":0,\"dayWeek\":\"DOMINGO\"}]}]"
        );
    })
})

describe("Factory jule month", () => {
    beforeEach(() => {
        month = MonthFactory.create(NameMonths.JULHO, 2024) as Month;
    })

    test("O mês de julho tem id 7", () => {
        expect(month.number).toEqual(7);
    })

    test("O mês de julho tem 31 dias no total", () => {
        expect(month.totalDays).toEqual(31);
    })

    test("O mês de julho tem o nome JULHO", () => {
        expect(month.getName()).toEqual(NameMonths.JULHO);
    })

    test("O mês de julho de 2024 tem 5 semanas", () => {
        expect(month.totalWeeks).toEqual(5);
    })

    test("Todos os dias do mês de julho de 2024", () => {
        expect(JSON.stringify(month.allWeeks)).toEqual(
            "[{\"id\":1,\"days\":[{\"day\":1,\"year\":2024,\"month\":7,\"dayWeekId\":1,\"dayWeek\":\"SEGUNDA-FEIRA\"},{\"day\":2,\"year\":2024,\"month\":7,\"dayWeekId\":2,\"dayWeek\":\"TERCA-FEIRA\"},{\"day\":3,\"year\":2024,\"month\":7,\"dayWeekId\":3,\"dayWeek\":\"QUARTA-FEIRA\"},{\"day\":4,\"year\":2024,\"month\":7,\"dayWeekId\":4,\"dayWeek\":\"QUINTA-FEIRA\"},{\"day\":5,\"year\":2024,\"month\":7,\"dayWeekId\":5,\"dayWeek\":\"SEXTA-FEIRA\"},{\"day\":6,\"year\":2024,\"month\":7,\"dayWeekId\":6,\"dayWeek\":\"SABADO\"}]},{\"id\":2,\"days\":[{\"day\":7,\"year\":2024,\"month\":7,\"dayWeekId\":0,\"dayWeek\":\"DOMINGO\"},{\"day\":8,\"year\":2024,\"month\":7,\"dayWeekId\":1,\"dayWeek\":\"SEGUNDA-FEIRA\"},{\"day\":9,\"year\":2024,\"month\":7,\"dayWeekId\":2,\"dayWeek\":\"TERCA-FEIRA\"},{\"day\":10,\"year\":2024,\"month\":7,\"dayWeekId\":3,\"dayWeek\":\"QUARTA-FEIRA\"},{\"day\":11,\"year\":2024,\"month\":7,\"dayWeekId\":4,\"dayWeek\":\"QUINTA-FEIRA\"},{\"day\":12,\"year\":2024,\"month\":7,\"dayWeekId\":5,\"dayWeek\":\"SEXTA-FEIRA\"},{\"day\":13,\"year\":2024,\"month\":7,\"dayWeekId\":6,\"dayWeek\":\"SABADO\"}]},{\"id\":3,\"days\":[{\"day\":14,\"year\":2024,\"month\":7,\"dayWeekId\":0,\"dayWeek\":\"DOMINGO\"},{\"day\":15,\"year\":2024,\"month\":7,\"dayWeekId\":1,\"dayWeek\":\"SEGUNDA-FEIRA\"},{\"day\":16,\"year\":2024,\"month\":7,\"dayWeekId\":2,\"dayWeek\":\"TERCA-FEIRA\"},{\"day\":17,\"year\":2024,\"month\":7,\"dayWeekId\":3,\"dayWeek\":\"QUARTA-FEIRA\"},{\"day\":18,\"year\":2024,\"month\":7,\"dayWeekId\":4,\"dayWeek\":\"QUINTA-FEIRA\"},{\"day\":19,\"year\":2024,\"month\":7,\"dayWeekId\":5,\"dayWeek\":\"SEXTA-FEIRA\"},{\"day\":20,\"year\":2024,\"month\":7,\"dayWeekId\":6,\"dayWeek\":\"SABADO\"}]},{\"id\":4,\"days\":[{\"day\":21,\"year\":2024,\"month\":7,\"dayWeekId\":0,\"dayWeek\":\"DOMINGO\"},{\"day\":22,\"year\":2024,\"month\":7,\"dayWeekId\":1,\"dayWeek\":\"SEGUNDA-FEIRA\"},{\"day\":23,\"year\":2024,\"month\":7,\"dayWeekId\":2,\"dayWeek\":\"TERCA-FEIRA\"},{\"day\":24,\"year\":2024,\"month\":7,\"dayWeekId\":3,\"dayWeek\":\"QUARTA-FEIRA\"},{\"day\":25,\"year\":2024,\"month\":7,\"dayWeekId\":4,\"dayWeek\":\"QUINTA-FEIRA\"},{\"day\":26,\"year\":2024,\"month\":7,\"dayWeekId\":5,\"dayWeek\":\"SEXTA-FEIRA\"},{\"day\":27,\"year\":2024,\"month\":7,\"dayWeekId\":6,\"dayWeek\":\"SABADO\"}]},{\"id\":5,\"days\":[{\"day\":28,\"year\":2024,\"month\":7,\"dayWeekId\":0,\"dayWeek\":\"DOMINGO\"},{\"day\":29,\"year\":2024,\"month\":7,\"dayWeekId\":1,\"dayWeek\":\"SEGUNDA-FEIRA\"},{\"day\":30,\"year\":2024,\"month\":7,\"dayWeekId\":2,\"dayWeek\":\"TERCA-FEIRA\"},{\"day\":31,\"year\":2024,\"month\":7,\"dayWeekId\":3,\"dayWeek\":\"QUARTA-FEIRA\"}]}]"
        );
    })
})

describe("Factory august month", () => {
    beforeEach(() => {
        month = MonthFactory.create(NameMonths.AGOSTO, 2024) as Month;
    })

    test("O mês de agosto tem id 8", () => {
        expect(month.number).toEqual(8);
    })

    test("O mês de agosto tem 31 dias no total", () => {
        expect(month.totalDays).toEqual(31);
    })

    test("O mês de agosto tem o nome AGOSTO", () => {
        expect(month.getName()).toEqual(NameMonths.AGOSTO);
    })

    test("O mês de agosto de 2024 tem 6 semanas", () => {
        expect(month.totalWeeks).toEqual(5);
    })

    test("Todos os dias do mês de agosto de 2024", () => {
        expect(JSON.stringify(month.allWeeks)).toEqual(
            "[{\"id\":1,\"days\":[{\"day\":1,\"year\":2024,\"month\":8,\"dayWeekId\":4,\"dayWeek\":\"QUINTA-FEIRA\"},{\"day\":2,\"year\":2024,\"month\":8,\"dayWeekId\":5,\"dayWeek\":\"SEXTA-FEIRA\"},{\"day\":3,\"year\":2024,\"month\":8,\"dayWeekId\":6,\"dayWeek\":\"SABADO\"}]},{\"id\":2,\"days\":[{\"day\":4,\"year\":2024,\"month\":8,\"dayWeekId\":0,\"dayWeek\":\"DOMINGO\"},{\"day\":5,\"year\":2024,\"month\":8,\"dayWeekId\":1,\"dayWeek\":\"SEGUNDA-FEIRA\"},{\"day\":6,\"year\":2024,\"month\":8,\"dayWeekId\":2,\"dayWeek\":\"TERCA-FEIRA\"},{\"day\":7,\"year\":2024,\"month\":8,\"dayWeekId\":3,\"dayWeek\":\"QUARTA-FEIRA\"},{\"day\":8,\"year\":2024,\"month\":8,\"dayWeekId\":4,\"dayWeek\":\"QUINTA-FEIRA\"},{\"day\":9,\"year\":2024,\"month\":8,\"dayWeekId\":5,\"dayWeek\":\"SEXTA-FEIRA\"},{\"day\":10,\"year\":2024,\"month\":8,\"dayWeekId\":6,\"dayWeek\":\"SABADO\"}]},{\"id\":3,\"days\":[{\"day\":11,\"year\":2024,\"month\":8,\"dayWeekId\":0,\"dayWeek\":\"DOMINGO\"},{\"day\":12,\"year\":2024,\"month\":8,\"dayWeekId\":1,\"dayWeek\":\"SEGUNDA-FEIRA\"},{\"day\":13,\"year\":2024,\"month\":8,\"dayWeekId\":2,\"dayWeek\":\"TERCA-FEIRA\"},{\"day\":14,\"year\":2024,\"month\":8,\"dayWeekId\":3,\"dayWeek\":\"QUARTA-FEIRA\"},{\"day\":15,\"year\":2024,\"month\":8,\"dayWeekId\":4,\"dayWeek\":\"QUINTA-FEIRA\"},{\"day\":16,\"year\":2024,\"month\":8,\"dayWeekId\":5,\"dayWeek\":\"SEXTA-FEIRA\"},{\"day\":17,\"year\":2024,\"month\":8,\"dayWeekId\":6,\"dayWeek\":\"SABADO\"}]},{\"id\":4,\"days\":[{\"day\":18,\"year\":2024,\"month\":8,\"dayWeekId\":0,\"dayWeek\":\"DOMINGO\"},{\"day\":19,\"year\":2024,\"month\":8,\"dayWeekId\":1,\"dayWeek\":\"SEGUNDA-FEIRA\"},{\"day\":20,\"year\":2024,\"month\":8,\"dayWeekId\":2,\"dayWeek\":\"TERCA-FEIRA\"},{\"day\":21,\"year\":2024,\"month\":8,\"dayWeekId\":3,\"dayWeek\":\"QUARTA-FEIRA\"},{\"day\":22,\"year\":2024,\"month\":8,\"dayWeekId\":4,\"dayWeek\":\"QUINTA-FEIRA\"},{\"day\":23,\"year\":2024,\"month\":8,\"dayWeekId\":5,\"dayWeek\":\"SEXTA-FEIRA\"},{\"day\":24,\"year\":2024,\"month\":8,\"dayWeekId\":6,\"dayWeek\":\"SABADO\"}]},{\"id\":5,\"days\":[{\"day\":25,\"year\":2024,\"month\":8,\"dayWeekId\":0,\"dayWeek\":\"DOMINGO\"},{\"day\":26,\"year\":2024,\"month\":8,\"dayWeekId\":1,\"dayWeek\":\"SEGUNDA-FEIRA\"},{\"day\":27,\"year\":2024,\"month\":8,\"dayWeekId\":2,\"dayWeek\":\"TERCA-FEIRA\"},{\"day\":28,\"year\":2024,\"month\":8,\"dayWeekId\":3,\"dayWeek\":\"QUARTA-FEIRA\"},{\"day\":29,\"year\":2024,\"month\":8,\"dayWeekId\":4,\"dayWeek\":\"QUINTA-FEIRA\"},{\"day\":30,\"year\":2024,\"month\":8,\"dayWeekId\":5,\"dayWeek\":\"SEXTA-FEIRA\"},{\"day\":31,\"year\":2024,\"month\":8,\"dayWeekId\":6,\"dayWeek\":\"SABADO\"}]}]"
        );
    })
})

describe("Factory september month", () => {
    beforeEach(() => {
        month = MonthFactory.create(NameMonths.SETEMBRO, 2024) as Month;
    })

    test("O mês de setembro tem id 9", () => {
        expect(month.number).toEqual(9);
    })

    test("O mês de setembro tem 30 dias no total", () => {
        expect(month.totalDays).toEqual(30);
    })

    test("O mês de setembro tem o nome SETEMBRO", () => {
        expect(month.getName()).toEqual(NameMonths.SETEMBRO);
    })

    test("O mês de setembro de 2024 tem 5 semanas", () => {
        expect(month.totalWeeks).toEqual(5);
    })

    test("Todos os dias do mês de setembro de 2024", () => {
        expect(JSON.stringify(month.allWeeks)).toEqual(
            "[{\"id\":1,\"days\":[{\"day\":1,\"year\":2024,\"month\":9,\"dayWeekId\":0,\"dayWeek\":\"DOMINGO\"},{\"day\":2,\"year\":2024,\"month\":9,\"dayWeekId\":1,\"dayWeek\":\"SEGUNDA-FEIRA\"},{\"day\":3,\"year\":2024,\"month\":9,\"dayWeekId\":2,\"dayWeek\":\"TERCA-FEIRA\"},{\"day\":4,\"year\":2024,\"month\":9,\"dayWeekId\":3,\"dayWeek\":\"QUARTA-FEIRA\"},{\"day\":5,\"year\":2024,\"month\":9,\"dayWeekId\":4,\"dayWeek\":\"QUINTA-FEIRA\"},{\"day\":6,\"year\":2024,\"month\":9,\"dayWeekId\":5,\"dayWeek\":\"SEXTA-FEIRA\"},{\"day\":7,\"year\":2024,\"month\":9,\"dayWeekId\":6,\"dayWeek\":\"SABADO\"}]},{\"id\":2,\"days\":[{\"day\":8,\"year\":2024,\"month\":9,\"dayWeekId\":0,\"dayWeek\":\"DOMINGO\"},{\"day\":9,\"year\":2024,\"month\":9,\"dayWeekId\":1,\"dayWeek\":\"SEGUNDA-FEIRA\"},{\"day\":10,\"year\":2024,\"month\":9,\"dayWeekId\":2,\"dayWeek\":\"TERCA-FEIRA\"},{\"day\":11,\"year\":2024,\"month\":9,\"dayWeekId\":3,\"dayWeek\":\"QUARTA-FEIRA\"},{\"day\":12,\"year\":2024,\"month\":9,\"dayWeekId\":4,\"dayWeek\":\"QUINTA-FEIRA\"},{\"day\":13,\"year\":2024,\"month\":9,\"dayWeekId\":5,\"dayWeek\":\"SEXTA-FEIRA\"},{\"day\":14,\"year\":2024,\"month\":9,\"dayWeekId\":6,\"dayWeek\":\"SABADO\"}]},{\"id\":3,\"days\":[{\"day\":15,\"year\":2024,\"month\":9,\"dayWeekId\":0,\"dayWeek\":\"DOMINGO\"},{\"day\":16,\"year\":2024,\"month\":9,\"dayWeekId\":1,\"dayWeek\":\"SEGUNDA-FEIRA\"},{\"day\":17,\"year\":2024,\"month\":9,\"dayWeekId\":2,\"dayWeek\":\"TERCA-FEIRA\"},{\"day\":18,\"year\":2024,\"month\":9,\"dayWeekId\":3,\"dayWeek\":\"QUARTA-FEIRA\"},{\"day\":19,\"year\":2024,\"month\":9,\"dayWeekId\":4,\"dayWeek\":\"QUINTA-FEIRA\"},{\"day\":20,\"year\":2024,\"month\":9,\"dayWeekId\":5,\"dayWeek\":\"SEXTA-FEIRA\"},{\"day\":21,\"year\":2024,\"month\":9,\"dayWeekId\":6,\"dayWeek\":\"SABADO\"}]},{\"id\":4,\"days\":[{\"day\":22,\"year\":2024,\"month\":9,\"dayWeekId\":0,\"dayWeek\":\"DOMINGO\"},{\"day\":23,\"year\":2024,\"month\":9,\"dayWeekId\":1,\"dayWeek\":\"SEGUNDA-FEIRA\"},{\"day\":24,\"year\":2024,\"month\":9,\"dayWeekId\":2,\"dayWeek\":\"TERCA-FEIRA\"},{\"day\":25,\"year\":2024,\"month\":9,\"dayWeekId\":3,\"dayWeek\":\"QUARTA-FEIRA\"},{\"day\":26,\"year\":2024,\"month\":9,\"dayWeekId\":4,\"dayWeek\":\"QUINTA-FEIRA\"},{\"day\":27,\"year\":2024,\"month\":9,\"dayWeekId\":5,\"dayWeek\":\"SEXTA-FEIRA\"},{\"day\":28,\"year\":2024,\"month\":9,\"dayWeekId\":6,\"dayWeek\":\"SABADO\"}]},{\"id\":5,\"days\":[{\"day\":29,\"year\":2024,\"month\":9,\"dayWeekId\":0,\"dayWeek\":\"DOMINGO\"},{\"day\":30,\"year\":2024,\"month\":9,\"dayWeekId\":1,\"dayWeek\":\"SEGUNDA-FEIRA\"}]}]"
        );
    })
})

describe("Factory october month", () => {

    beforeEach(() => {
        month = MonthFactory.create(NameMonths.OUTUBRO, 2024) as Month;
    })

    test("O mês de outubro tem id 10", () => {
        expect(month.number).toEqual(10);
    })

    test("O mês de outubro tem 31 dias no total", () => {
        expect(month.totalDays).toEqual(31);
    })

    test("O mês de outubro tem o nome OUTUBRO", () => {
        expect(month.getName()).toEqual(NameMonths.OUTUBRO);
    })

    test("O mês de outubro de 2024 tem 5 semanas", () => {
        expect(month.totalWeeks).toEqual(5);
    })

    test("Todos os dias do mês de outubro de 2024", () => {
        expect(JSON.stringify(month.allWeeks)).toEqual(
            "[{\"id\":1,\"days\":[{\"day\":1,\"year\":2024,\"month\":10,\"dayWeekId\":2,\"dayWeek\":\"TERCA-FEIRA\"},{\"day\":2,\"year\":2024,\"month\":10,\"dayWeekId\":3,\"dayWeek\":\"QUARTA-FEIRA\"},{\"day\":3,\"year\":2024,\"month\":10,\"dayWeekId\":4,\"dayWeek\":\"QUINTA-FEIRA\"},{\"day\":4,\"year\":2024,\"month\":10,\"dayWeekId\":5,\"dayWeek\":\"SEXTA-FEIRA\"},{\"day\":5,\"year\":2024,\"month\":10,\"dayWeekId\":6,\"dayWeek\":\"SABADO\"}]},{\"id\":2,\"days\":[{\"day\":6,\"year\":2024,\"month\":10,\"dayWeekId\":0,\"dayWeek\":\"DOMINGO\"},{\"day\":7,\"year\":2024,\"month\":10,\"dayWeekId\":1,\"dayWeek\":\"SEGUNDA-FEIRA\"},{\"day\":8,\"year\":2024,\"month\":10,\"dayWeekId\":2,\"dayWeek\":\"TERCA-FEIRA\"},{\"day\":9,\"year\":2024,\"month\":10,\"dayWeekId\":3,\"dayWeek\":\"QUARTA-FEIRA\"},{\"day\":10,\"year\":2024,\"month\":10,\"dayWeekId\":4,\"dayWeek\":\"QUINTA-FEIRA\"},{\"day\":11,\"year\":2024,\"month\":10,\"dayWeekId\":5,\"dayWeek\":\"SEXTA-FEIRA\"},{\"day\":12,\"year\":2024,\"month\":10,\"dayWeekId\":6,\"dayWeek\":\"SABADO\"}]},{\"id\":3,\"days\":[{\"day\":13,\"year\":2024,\"month\":10,\"dayWeekId\":0,\"dayWeek\":\"DOMINGO\"},{\"day\":14,\"year\":2024,\"month\":10,\"dayWeekId\":1,\"dayWeek\":\"SEGUNDA-FEIRA\"},{\"day\":15,\"year\":2024,\"month\":10,\"dayWeekId\":2,\"dayWeek\":\"TERCA-FEIRA\"},{\"day\":16,\"year\":2024,\"month\":10,\"dayWeekId\":3,\"dayWeek\":\"QUARTA-FEIRA\"},{\"day\":17,\"year\":2024,\"month\":10,\"dayWeekId\":4,\"dayWeek\":\"QUINTA-FEIRA\"},{\"day\":18,\"year\":2024,\"month\":10,\"dayWeekId\":5,\"dayWeek\":\"SEXTA-FEIRA\"},{\"day\":19,\"year\":2024,\"month\":10,\"dayWeekId\":6,\"dayWeek\":\"SABADO\"}]},{\"id\":4,\"days\":[{\"day\":20,\"year\":2024,\"month\":10,\"dayWeekId\":0,\"dayWeek\":\"DOMINGO\"},{\"day\":21,\"year\":2024,\"month\":10,\"dayWeekId\":1,\"dayWeek\":\"SEGUNDA-FEIRA\"},{\"day\":22,\"year\":2024,\"month\":10,\"dayWeekId\":2,\"dayWeek\":\"TERCA-FEIRA\"},{\"day\":23,\"year\":2024,\"month\":10,\"dayWeekId\":3,\"dayWeek\":\"QUARTA-FEIRA\"},{\"day\":24,\"year\":2024,\"month\":10,\"dayWeekId\":4,\"dayWeek\":\"QUINTA-FEIRA\"},{\"day\":25,\"year\":2024,\"month\":10,\"dayWeekId\":5,\"dayWeek\":\"SEXTA-FEIRA\"},{\"day\":26,\"year\":2024,\"month\":10,\"dayWeekId\":6,\"dayWeek\":\"SABADO\"}]},{\"id\":5,\"days\":[{\"day\":27,\"year\":2024,\"month\":10,\"dayWeekId\":0,\"dayWeek\":\"DOMINGO\"},{\"day\":28,\"year\":2024,\"month\":10,\"dayWeekId\":1,\"dayWeek\":\"SEGUNDA-FEIRA\"},{\"day\":29,\"year\":2024,\"month\":10,\"dayWeekId\":2,\"dayWeek\":\"TERCA-FEIRA\"},{\"day\":30,\"year\":2024,\"month\":10,\"dayWeekId\":3,\"dayWeek\":\"QUARTA-FEIRA\"},{\"day\":31,\"year\":2024,\"month\":10,\"dayWeekId\":4,\"dayWeek\":\"QUINTA-FEIRA\"}]}]"
        );
    })
})

describe("Factory november month", () => {
    beforeEach(() => {
        month = MonthFactory.create(NameMonths.NOVEMBRO, 2024) as Month;
    })

    test("O mês de novembro tem id 11", () => {
        expect(month.number).toEqual(11);
    })

    test("O mês de novembro tem 30 dias no total", () => {
        expect(month.totalDays).toEqual(30);
    })

    test("O mês de novembro tem o nome NOVEMBRO", () => {
        expect(month.getName()).toEqual(NameMonths.NOVEMBRO);
    })

    test("O mês de novembro de 2024 tem 5 semanas", () => {
        expect(month.totalWeeks).toEqual(5);
    })

    test("Todos os dias do mês de novembro de 2024", () => {
        expect(JSON.stringify(month.allWeeks)).toEqual(
            "[{\"id\":1,\"days\":[{\"day\":1,\"year\":2024,\"month\":11,\"dayWeekId\":5,\"dayWeek\":\"SEXTA-FEIRA\"},{\"day\":2,\"year\":2024,\"month\":11,\"dayWeekId\":6,\"dayWeek\":\"SABADO\"}]},{\"id\":2,\"days\":[{\"day\":3,\"year\":2024,\"month\":11,\"dayWeekId\":0,\"dayWeek\":\"DOMINGO\"},{\"day\":4,\"year\":2024,\"month\":11,\"dayWeekId\":1,\"dayWeek\":\"SEGUNDA-FEIRA\"},{\"day\":5,\"year\":2024,\"month\":11,\"dayWeekId\":2,\"dayWeek\":\"TERCA-FEIRA\"},{\"day\":6,\"year\":2024,\"month\":11,\"dayWeekId\":3,\"dayWeek\":\"QUARTA-FEIRA\"},{\"day\":7,\"year\":2024,\"month\":11,\"dayWeekId\":4,\"dayWeek\":\"QUINTA-FEIRA\"},{\"day\":8,\"year\":2024,\"month\":11,\"dayWeekId\":5,\"dayWeek\":\"SEXTA-FEIRA\"},{\"day\":9,\"year\":2024,\"month\":11,\"dayWeekId\":6,\"dayWeek\":\"SABADO\"}]},{\"id\":3,\"days\":[{\"day\":10,\"year\":2024,\"month\":11,\"dayWeekId\":0,\"dayWeek\":\"DOMINGO\"},{\"day\":11,\"year\":2024,\"month\":11,\"dayWeekId\":1,\"dayWeek\":\"SEGUNDA-FEIRA\"},{\"day\":12,\"year\":2024,\"month\":11,\"dayWeekId\":2,\"dayWeek\":\"TERCA-FEIRA\"},{\"day\":13,\"year\":2024,\"month\":11,\"dayWeekId\":3,\"dayWeek\":\"QUARTA-FEIRA\"},{\"day\":14,\"year\":2024,\"month\":11,\"dayWeekId\":4,\"dayWeek\":\"QUINTA-FEIRA\"},{\"day\":15,\"year\":2024,\"month\":11,\"dayWeekId\":5,\"dayWeek\":\"SEXTA-FEIRA\"},{\"day\":16,\"year\":2024,\"month\":11,\"dayWeekId\":6,\"dayWeek\":\"SABADO\"}]},{\"id\":4,\"days\":[{\"day\":17,\"year\":2024,\"month\":11,\"dayWeekId\":0,\"dayWeek\":\"DOMINGO\"},{\"day\":18,\"year\":2024,\"month\":11,\"dayWeekId\":1,\"dayWeek\":\"SEGUNDA-FEIRA\"},{\"day\":19,\"year\":2024,\"month\":11,\"dayWeekId\":2,\"dayWeek\":\"TERCA-FEIRA\"},{\"day\":20,\"year\":2024,\"month\":11,\"dayWeekId\":3,\"dayWeek\":\"QUARTA-FEIRA\"},{\"day\":21,\"year\":2024,\"month\":11,\"dayWeekId\":4,\"dayWeek\":\"QUINTA-FEIRA\"},{\"day\":22,\"year\":2024,\"month\":11,\"dayWeekId\":5,\"dayWeek\":\"SEXTA-FEIRA\"},{\"day\":23,\"year\":2024,\"month\":11,\"dayWeekId\":6,\"dayWeek\":\"SABADO\"}]},{\"id\":5,\"days\":[{\"day\":24,\"year\":2024,\"month\":11,\"dayWeekId\":0,\"dayWeek\":\"DOMINGO\"},{\"day\":25,\"year\":2024,\"month\":11,\"dayWeekId\":1,\"dayWeek\":\"SEGUNDA-FEIRA\"},{\"day\":26,\"year\":2024,\"month\":11,\"dayWeekId\":2,\"dayWeek\":\"TERCA-FEIRA\"},{\"day\":27,\"year\":2024,\"month\":11,\"dayWeekId\":3,\"dayWeek\":\"QUARTA-FEIRA\"},{\"day\":28,\"year\":2024,\"month\":11,\"dayWeekId\":4,\"dayWeek\":\"QUINTA-FEIRA\"},{\"day\":29,\"year\":2024,\"month\":11,\"dayWeekId\":5,\"dayWeek\":\"SEXTA-FEIRA\"},{\"day\":30,\"year\":2024,\"month\":11,\"dayWeekId\":6,\"dayWeek\":\"SABADO\"}]}]"
        );
    })
})

describe("Factory december month", () => {

    beforeEach(() => {
        month = MonthFactory.create(NameMonths.DEZEMBRO, 2024) as Month;
    })

    test("O mês de dezembro tem id 12", () => {
        expect(month.number).toEqual(12);
    })

    test("O mês de dezembro tem 31 dias no total", () => {
        expect(month.totalDays).toEqual(31);
    })

    test("O mês de dezembro tem o nome DEZEMBRO", () => {
        expect(month.getName()).toEqual(NameMonths.DEZEMBRO);
    })

    test("O mês de dezembro de 2024 tem 5 semanas", () => {
        expect(month.totalWeeks).toEqual(5);
    })

    test("Todos os dias do mês de dezembro de 2024", () => {
        expect(JSON.stringify(month.allWeeks)).toEqual(
            "[{\"id\":1,\"days\":[{\"day\":1,\"year\":2024,\"month\":12,\"dayWeekId\":0,\"dayWeek\":\"DOMINGO\"},{\"day\":2,\"year\":2024,\"month\":12,\"dayWeekId\":1,\"dayWeek\":\"SEGUNDA-FEIRA\"},{\"day\":3,\"year\":2024,\"month\":12,\"dayWeekId\":2,\"dayWeek\":\"TERCA-FEIRA\"},{\"day\":4,\"year\":2024,\"month\":12,\"dayWeekId\":3,\"dayWeek\":\"QUARTA-FEIRA\"},{\"day\":5,\"year\":2024,\"month\":12,\"dayWeekId\":4,\"dayWeek\":\"QUINTA-FEIRA\"},{\"day\":6,\"year\":2024,\"month\":12,\"dayWeekId\":5,\"dayWeek\":\"SEXTA-FEIRA\"},{\"day\":7,\"year\":2024,\"month\":12,\"dayWeekId\":6,\"dayWeek\":\"SABADO\"}]},{\"id\":2,\"days\":[{\"day\":8,\"year\":2024,\"month\":12,\"dayWeekId\":0,\"dayWeek\":\"DOMINGO\"},{\"day\":9,\"year\":2024,\"month\":12,\"dayWeekId\":1,\"dayWeek\":\"SEGUNDA-FEIRA\"},{\"day\":10,\"year\":2024,\"month\":12,\"dayWeekId\":2,\"dayWeek\":\"TERCA-FEIRA\"},{\"day\":11,\"year\":2024,\"month\":12,\"dayWeekId\":3,\"dayWeek\":\"QUARTA-FEIRA\"},{\"day\":12,\"year\":2024,\"month\":12,\"dayWeekId\":4,\"dayWeek\":\"QUINTA-FEIRA\"},{\"day\":13,\"year\":2024,\"month\":12,\"dayWeekId\":5,\"dayWeek\":\"SEXTA-FEIRA\"},{\"day\":14,\"year\":2024,\"month\":12,\"dayWeekId\":6,\"dayWeek\":\"SABADO\"}]},{\"id\":3,\"days\":[{\"day\":15,\"year\":2024,\"month\":12,\"dayWeekId\":0,\"dayWeek\":\"DOMINGO\"},{\"day\":16,\"year\":2024,\"month\":12,\"dayWeekId\":1,\"dayWeek\":\"SEGUNDA-FEIRA\"},{\"day\":17,\"year\":2024,\"month\":12,\"dayWeekId\":2,\"dayWeek\":\"TERCA-FEIRA\"},{\"day\":18,\"year\":2024,\"month\":12,\"dayWeekId\":3,\"dayWeek\":\"QUARTA-FEIRA\"},{\"day\":19,\"year\":2024,\"month\":12,\"dayWeekId\":4,\"dayWeek\":\"QUINTA-FEIRA\"},{\"day\":20,\"year\":2024,\"month\":12,\"dayWeekId\":5,\"dayWeek\":\"SEXTA-FEIRA\"},{\"day\":21,\"year\":2024,\"month\":12,\"dayWeekId\":6,\"dayWeek\":\"SABADO\"}]},{\"id\":4,\"days\":[{\"day\":22,\"year\":2024,\"month\":12,\"dayWeekId\":0,\"dayWeek\":\"DOMINGO\"},{\"day\":23,\"year\":2024,\"month\":12,\"dayWeekId\":1,\"dayWeek\":\"SEGUNDA-FEIRA\"},{\"day\":24,\"year\":2024,\"month\":12,\"dayWeekId\":2,\"dayWeek\":\"TERCA-FEIRA\"},{\"day\":25,\"year\":2024,\"month\":12,\"dayWeekId\":3,\"dayWeek\":\"QUARTA-FEIRA\"},{\"day\":26,\"year\":2024,\"month\":12,\"dayWeekId\":4,\"dayWeek\":\"QUINTA-FEIRA\"},{\"day\":27,\"year\":2024,\"month\":12,\"dayWeekId\":5,\"dayWeek\":\"SEXTA-FEIRA\"},{\"day\":28,\"year\":2024,\"month\":12,\"dayWeekId\":6,\"dayWeek\":\"SABADO\"}]},{\"id\":5,\"days\":[{\"day\":29,\"year\":2024,\"month\":12,\"dayWeekId\":0,\"dayWeek\":\"DOMINGO\"},{\"day\":30,\"year\":2024,\"month\":12,\"dayWeekId\":1,\"dayWeek\":\"SEGUNDA-FEIRA\"},{\"day\":31,\"year\":2024,\"month\":12,\"dayWeekId\":2,\"dayWeek\":\"TERCA-FEIRA\"}]}]"
        );
    })
})