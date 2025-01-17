
//year 2024

import { DatesMonthGenerator } from "../helpers/DatesMonthGenerator";
import {NameMonths} from "../enum/NameMonths.enum";

let datesMonth: DatesMonthGenerator;

test("janeiro é o mês 1", () => {
    datesMonth = new DatesMonthGenerator(NameMonths.JANEIRO, 2024);
    expect(datesMonth.number).toBe(1);
})

test("todos os dias de janeiro de 2024", () => {
    datesMonth = new DatesMonthGenerator(NameMonths.JANEIRO, 2024);
    expect(JSON.stringify(datesMonth.allWeeks)).toBe(
         "[{\"id\":1,\"days\":[{\"day\":1,\"year\":2024,\"month\":1,\"dayWeekId\":1,\"dayWeek\":\"SEGUNDA-FEIRA\"},{\"day\":2,\"year\":2024,\"month\":1,\"dayWeekId\":2,\"dayWeek\":\"TERCA-FEIRA\"},{\"day\":3,\"year\":2024,\"month\":1,\"dayWeekId\":3,\"dayWeek\":\"QUARTA-FEIRA\"},{\"day\":4,\"year\":2024,\"month\":1,\"dayWeekId\":4,\"dayWeek\":\"QUINTA-FEIRA\"},{\"day\":5,\"year\":2024,\"month\":1,\"dayWeekId\":5,\"dayWeek\":\"SEXTA-FEIRA\"},{\"day\":6,\"year\":2024,\"month\":1,\"dayWeekId\":6,\"dayWeek\":\"SABADO\"}]},{\"id\":2,\"days\":[{\"day\":7,\"year\":2024,\"month\":1,\"dayWeekId\":0,\"dayWeek\":\"DOMINGO\"},{\"day\":8,\"year\":2024,\"month\":1,\"dayWeekId\":1,\"dayWeek\":\"SEGUNDA-FEIRA\"},{\"day\":9,\"year\":2024,\"month\":1,\"dayWeekId\":2,\"dayWeek\":\"TERCA-FEIRA\"},{\"day\":10,\"year\":2024,\"month\":1,\"dayWeekId\":3,\"dayWeek\":\"QUARTA-FEIRA\"},{\"day\":11,\"year\":2024,\"month\":1,\"dayWeekId\":4,\"dayWeek\":\"QUINTA-FEIRA\"},{\"day\":12,\"year\":2024,\"month\":1,\"dayWeekId\":5,\"dayWeek\":\"SEXTA-FEIRA\"},{\"day\":13,\"year\":2024,\"month\":1,\"dayWeekId\":6,\"dayWeek\":\"SABADO\"}]},{\"id\":3,\"days\":[{\"day\":14,\"year\":2024,\"month\":1,\"dayWeekId\":0,\"dayWeek\":\"DOMINGO\"},{\"day\":15,\"year\":2024,\"month\":1,\"dayWeekId\":1,\"dayWeek\":\"SEGUNDA-FEIRA\"},{\"day\":16,\"year\":2024,\"month\":1,\"dayWeekId\":2,\"dayWeek\":\"TERCA-FEIRA\"},{\"day\":17,\"year\":2024,\"month\":1,\"dayWeekId\":3,\"dayWeek\":\"QUARTA-FEIRA\"},{\"day\":18,\"year\":2024,\"month\":1,\"dayWeekId\":4,\"dayWeek\":\"QUINTA-FEIRA\"},{\"day\":19,\"year\":2024,\"month\":1,\"dayWeekId\":5,\"dayWeek\":\"SEXTA-FEIRA\"},{\"day\":20,\"year\":2024,\"month\":1,\"dayWeekId\":6,\"dayWeek\":\"SABADO\"}]},{\"id\":4,\"days\":[{\"day\":21,\"year\":2024,\"month\":1,\"dayWeekId\":0,\"dayWeek\":\"DOMINGO\"},{\"day\":22,\"year\":2024,\"month\":1,\"dayWeekId\":1,\"dayWeek\":\"SEGUNDA-FEIRA\"},{\"day\":23,\"year\":2024,\"month\":1,\"dayWeekId\":2,\"dayWeek\":\"TERCA-FEIRA\"},{\"day\":24,\"year\":2024,\"month\":1,\"dayWeekId\":3,\"dayWeek\":\"QUARTA-FEIRA\"},{\"day\":25,\"year\":2024,\"month\":1,\"dayWeekId\":4,\"dayWeek\":\"QUINTA-FEIRA\"},{\"day\":26,\"year\":2024,\"month\":1,\"dayWeekId\":5,\"dayWeek\":\"SEXTA-FEIRA\"},{\"day\":27,\"year\":2024,\"month\":1,\"dayWeekId\":6,\"dayWeek\":\"SABADO\"}]},{\"id\":5,\"days\":[{\"day\":28,\"year\":2024,\"month\":1,\"dayWeekId\":0,\"dayWeek\":\"DOMINGO\"},{\"day\":29,\"year\":2024,\"month\":1,\"dayWeekId\":1,\"dayWeek\":\"SEGUNDA-FEIRA\"},{\"day\":30,\"year\":2024,\"month\":1,\"dayWeekId\":2,\"dayWeek\":\"TERCA-FEIRA\"},{\"day\":31,\"year\":2024,\"month\":1,\"dayWeekId\":3,\"dayWeek\":\"QUARTA-FEIRA\"}]}]"
    );
})

test("primeira semana de janeiro de 2024", () => {
    datesMonth = new DatesMonthGenerator(NameMonths.JANEIRO, 2024);
    expect(JSON.stringify(datesMonth.getWeek(1).getAll())).toBe(
        "[{\"day\":1,\"year\":2024,\"month\":1,\"dayWeekId\":1,\"dayWeek\":\"SEGUNDA-FEIRA\"},{\"day\":2,\"year\":2024,\"month\":1,\"dayWeekId\":2,\"dayWeek\":\"TERCA-FEIRA\"},{\"day\":3,\"year\":2024,\"month\":1,\"dayWeekId\":3,\"dayWeek\":\"QUARTA-FEIRA\"},{\"day\":4,\"year\":2024,\"month\":1,\"dayWeekId\":4,\"dayWeek\":\"QUINTA-FEIRA\"},{\"day\":5,\"year\":2024,\"month\":1,\"dayWeekId\":5,\"dayWeek\":\"SEXTA-FEIRA\"},{\"day\":6,\"year\":2024,\"month\":1,\"dayWeekId\":6,\"dayWeek\":\"SABADO\"}]"
    );
    expect(datesMonth.getWeek(1).number).toBe(1);
})


test("primeira semana de dezembro de 2024 começa dia de domingo e termina em SABADO", () => {
    datesMonth = new DatesMonthGenerator(NameMonths.DEZEMBRO, 2024);
    expect(JSON.stringify(datesMonth.getWeek(1).getAll())).toBe(
        "[{\"day\":1,\"year\":2024,\"month\":12,\"dayWeekId\":0,\"dayWeek\":\"DOMINGO\"},{\"day\":2,\"year\":2024,\"month\":12,\"dayWeekId\":1,\"dayWeek\":\"SEGUNDA-FEIRA\"},{\"day\":3,\"year\":2024,\"month\":12,\"dayWeekId\":2,\"dayWeek\":\"TERCA-FEIRA\"},{\"day\":4,\"year\":2024,\"month\":12,\"dayWeekId\":3,\"dayWeek\":\"QUARTA-FEIRA\"},{\"day\":5,\"year\":2024,\"month\":12,\"dayWeekId\":4,\"dayWeek\":\"QUINTA-FEIRA\"},{\"day\":6,\"year\":2024,\"month\":12,\"dayWeekId\":5,\"dayWeek\":\"SEXTA-FEIRA\"},{\"day\":7,\"year\":2024,\"month\":12,\"dayWeekId\":6,\"dayWeek\":\"SABADO\"}]"
    );
    expect(datesMonth.getWeek(1).number).toBe(1);
})


test("dezembro de 2024 tem 5 semanas", () => {
    datesMonth = new DatesMonthGenerator(NameMonths.DEZEMBRO, 2024);
    expect(datesMonth.totalWeeks).toBe(5);
})

test("junho de 2024 tem 6 semanas", () => {
    datesMonth = new DatesMonthGenerator(NameMonths.JUNHO, 2024);
    expect(datesMonth.totalWeeks).toBe(6);
})

test("ultima semana de junho de 2024 é composta apenas por um dia que é domingo", () => {
    datesMonth = new DatesMonthGenerator(NameMonths.JUNHO, 2024);
    expect(JSON.stringify(datesMonth.getWeek(datesMonth.totalWeeks).getAll())).toBe(
        "[{\"day\":30,\"year\":2024,\"month\":6,\"dayWeekId\":0,\"dayWeek\":\"DOMINGO\"}]"
    );
    expect(datesMonth.getWeek(datesMonth.totalWeeks).number).toBe(6);
})


test("novembro de 2024 tem 5 semanas", () => {
    datesMonth = new DatesMonthGenerator(NameMonths.NOVEMBRO, 2024);
    expect(datesMonth.totalWeeks).toBe(5);
})

test("ultima semana de novembro de 2024 vai até o ultimo dia do mês.", () => {
    datesMonth = new DatesMonthGenerator(NameMonths.NOVEMBRO, 2024);
    expect(JSON.stringify(datesMonth.getWeek(datesMonth.totalWeeks).getAll())).toBe(
        "[{\"day\":24,\"year\":2024,\"month\":11,\"dayWeekId\":0,\"dayWeek\":\"DOMINGO\"},{\"day\":25,\"year\":2024,\"month\":11,\"dayWeekId\":1,\"dayWeek\":\"SEGUNDA-FEIRA\"},{\"day\":26,\"year\":2024,\"month\":11,\"dayWeekId\":2,\"dayWeek\":\"TERCA-FEIRA\"},{\"day\":27,\"year\":2024,\"month\":11,\"dayWeekId\":3,\"dayWeek\":\"QUARTA-FEIRA\"},{\"day\":28,\"year\":2024,\"month\":11,\"dayWeekId\":4,\"dayWeek\":\"QUINTA-FEIRA\"},{\"day\":29,\"year\":2024,\"month\":11,\"dayWeekId\":5,\"dayWeek\":\"SEXTA-FEIRA\"},{\"day\":30,\"year\":2024,\"month\":11,\"dayWeekId\":6,\"dayWeek\":\"SABADO\"}]"
    );
    expect(datesMonth.getWeek(datesMonth.totalWeeks).number).toBe(5);
})

