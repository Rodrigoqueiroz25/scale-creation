import { MonthlyCalendar } from "../helpers/MonthlyCalendar"

//year 2024

let calendar: MonthlyCalendar;

test("janeiro é o mês 1", () => {
    calendar = new MonthlyCalendar("Janeiro", 2024);
    expect(calendar.numMonth).toBe(1);
})

test("todos os dias de janeiro de 2024", () => {
    calendar = new MonthlyCalendar("Janeiro", 2024);
    expect(JSON.stringify(calendar.getWeeks())).toBe(
         "[{\"id\":1,\"days\":[{\"day\":1,\"year\":2024,\"month\":1,\"dayWeekId\":1,\"dayWeek\":\"SEGUNDA-FEIRA\"},{\"day\":2,\"year\":2024,\"month\":1,\"dayWeekId\":2,\"dayWeek\":\"TERÇA-FEIRA\"},{\"day\":3,\"year\":2024,\"month\":1,\"dayWeekId\":3,\"dayWeek\":\"QUARTA-FEIRA\"},{\"day\":4,\"year\":2024,\"month\":1,\"dayWeekId\":4,\"dayWeek\":\"QUINTA-FEIRA\"},{\"day\":5,\"year\":2024,\"month\":1,\"dayWeekId\":5,\"dayWeek\":\"SEXTA-FEIRA\"},{\"day\":6,\"year\":2024,\"month\":1,\"dayWeekId\":6,\"dayWeek\":\"SÁBADO\"}]},{\"id\":2,\"days\":[{\"day\":7,\"year\":2024,\"month\":1,\"dayWeekId\":0,\"dayWeek\":\"DOMINGO\"},{\"day\":8,\"year\":2024,\"month\":1,\"dayWeekId\":1,\"dayWeek\":\"SEGUNDA-FEIRA\"},{\"day\":9,\"year\":2024,\"month\":1,\"dayWeekId\":2,\"dayWeek\":\"TERÇA-FEIRA\"},{\"day\":10,\"year\":2024,\"month\":1,\"dayWeekId\":3,\"dayWeek\":\"QUARTA-FEIRA\"},{\"day\":11,\"year\":2024,\"month\":1,\"dayWeekId\":4,\"dayWeek\":\"QUINTA-FEIRA\"},{\"day\":12,\"year\":2024,\"month\":1,\"dayWeekId\":5,\"dayWeek\":\"SEXTA-FEIRA\"},{\"day\":13,\"year\":2024,\"month\":1,\"dayWeekId\":6,\"dayWeek\":\"SÁBADO\"}]},{\"id\":3,\"days\":[{\"day\":14,\"year\":2024,\"month\":1,\"dayWeekId\":0,\"dayWeek\":\"DOMINGO\"},{\"day\":15,\"year\":2024,\"month\":1,\"dayWeekId\":1,\"dayWeek\":\"SEGUNDA-FEIRA\"},{\"day\":16,\"year\":2024,\"month\":1,\"dayWeekId\":2,\"dayWeek\":\"TERÇA-FEIRA\"},{\"day\":17,\"year\":2024,\"month\":1,\"dayWeekId\":3,\"dayWeek\":\"QUARTA-FEIRA\"},{\"day\":18,\"year\":2024,\"month\":1,\"dayWeekId\":4,\"dayWeek\":\"QUINTA-FEIRA\"},{\"day\":19,\"year\":2024,\"month\":1,\"dayWeekId\":5,\"dayWeek\":\"SEXTA-FEIRA\"},{\"day\":20,\"year\":2024,\"month\":1,\"dayWeekId\":6,\"dayWeek\":\"SÁBADO\"}]},{\"id\":4,\"days\":[{\"day\":21,\"year\":2024,\"month\":1,\"dayWeekId\":0,\"dayWeek\":\"DOMINGO\"},{\"day\":22,\"year\":2024,\"month\":1,\"dayWeekId\":1,\"dayWeek\":\"SEGUNDA-FEIRA\"},{\"day\":23,\"year\":2024,\"month\":1,\"dayWeekId\":2,\"dayWeek\":\"TERÇA-FEIRA\"},{\"day\":24,\"year\":2024,\"month\":1,\"dayWeekId\":3,\"dayWeek\":\"QUARTA-FEIRA\"},{\"day\":25,\"year\":2024,\"month\":1,\"dayWeekId\":4,\"dayWeek\":\"QUINTA-FEIRA\"},{\"day\":26,\"year\":2024,\"month\":1,\"dayWeekId\":5,\"dayWeek\":\"SEXTA-FEIRA\"},{\"day\":27,\"year\":2024,\"month\":1,\"dayWeekId\":6,\"dayWeek\":\"SÁBADO\"}]},{\"id\":5,\"days\":[{\"day\":28,\"year\":2024,\"month\":1,\"dayWeekId\":0,\"dayWeek\":\"DOMINGO\"},{\"day\":29,\"year\":2024,\"month\":1,\"dayWeekId\":1,\"dayWeek\":\"SEGUNDA-FEIRA\"},{\"day\":30,\"year\":2024,\"month\":1,\"dayWeekId\":2,\"dayWeek\":\"TERÇA-FEIRA\"},{\"day\":31,\"year\":2024,\"month\":1,\"dayWeekId\":3,\"dayWeek\":\"QUARTA-FEIRA\"}]}]"
    );
})

test("primeira semana de janeiro de 2024 ", () => {
    calendar = new MonthlyCalendar("Janeiro", 2024);
    expect(JSON.stringify(calendar.getWeek(1)?.days)).toBe(
        "[{\"day\":1,\"year\":2024,\"month\":1,\"dayWeekId\":1,\"dayWeek\":\"SEGUNDA-FEIRA\"},{\"day\":2,\"year\":2024,\"month\":1,\"dayWeekId\":2,\"dayWeek\":\"TERÇA-FEIRA\"},{\"day\":3,\"year\":2024,\"month\":1,\"dayWeekId\":3,\"dayWeek\":\"QUARTA-FEIRA\"},{\"day\":4,\"year\":2024,\"month\":1,\"dayWeekId\":4,\"dayWeek\":\"QUINTA-FEIRA\"},{\"day\":5,\"year\":2024,\"month\":1,\"dayWeekId\":5,\"dayWeek\":\"SEXTA-FEIRA\"},{\"day\":6,\"year\":2024,\"month\":1,\"dayWeekId\":6,\"dayWeek\":\"SÁBADO\"}]"
    );
    expect(calendar.getWeek(1)?.id).toBe(1);
})


test("primeira semana de dezembro de 2024 começa dia de domingo e termina em sábado", () => {
    calendar = new MonthlyCalendar("dezembro", 2024);
    expect(JSON.stringify(calendar.getWeek(1)?.days)).toBe(
        "[{\"day\":1,\"year\":2024,\"month\":12,\"dayWeekId\":0,\"dayWeek\":\"DOMINGO\"},{\"day\":2,\"year\":2024,\"month\":12,\"dayWeekId\":1,\"dayWeek\":\"SEGUNDA-FEIRA\"},{\"day\":3,\"year\":2024,\"month\":12,\"dayWeekId\":2,\"dayWeek\":\"TERÇA-FEIRA\"},{\"day\":4,\"year\":2024,\"month\":12,\"dayWeekId\":3,\"dayWeek\":\"QUARTA-FEIRA\"},{\"day\":5,\"year\":2024,\"month\":12,\"dayWeekId\":4,\"dayWeek\":\"QUINTA-FEIRA\"},{\"day\":6,\"year\":2024,\"month\":12,\"dayWeekId\":5,\"dayWeek\":\"SEXTA-FEIRA\"},{\"day\":7,\"year\":2024,\"month\":12,\"dayWeekId\":6,\"dayWeek\":\"SÁBADO\"}]"
    );
    expect(calendar.getWeek(1)?.id).toBe(1);
})

test("primeiro dia de dezembro de 2024 é um domingo", () => {
    calendar = new MonthlyCalendar("dezembro", 2024);
    calendar.getWeek(1).days.map((day) => {
        expect(day).toBe(1);
    })
    // expect(JSON.stringify(calendar.getWeek(1)?.days)).toBe(
    //     "[{\"day\":1,\"year\":2024,\"month\":12,\"dayWeekId\":0,\"dayWeek\":\"DOMINGO\"},{\"day\":2,\"year\":2024,\"month\":12,\"dayWeekId\":1,\"dayWeek\":\"SEGUNDA-FEIRA\"},{\"day\":3,\"year\":2024,\"month\":12,\"dayWeekId\":2,\"dayWeek\":\"TERÇA-FEIRA\"},{\"day\":4,\"year\":2024,\"month\":12,\"dayWeekId\":3,\"dayWeek\":\"QUARTA-FEIRA\"},{\"day\":5,\"year\":2024,\"month\":12,\"dayWeekId\":4,\"dayWeek\":\"QUINTA-FEIRA\"},{\"day\":6,\"year\":2024,\"month\":12,\"dayWeekId\":5,\"dayWeek\":\"SEXTA-FEIRA\"},{\"day\":7,\"year\":2024,\"month\":12,\"dayWeekId\":6,\"dayWeek\":\"SÁBADO\"}]"
    // );
    // expect(calendar.getWeek(1)?.id).toBe(1);
})



test("dezembro de 2024 tem 5 semanas", () => {
    calendar = new MonthlyCalendar("dezembro", 2024);
    expect(calendar.numberWeeks).toBe(5);
})

test("junho de 2024 tem 6 semanas", () => {
    calendar = new MonthlyCalendar("junho", 2024);
    expect(calendar.numberWeeks).toBe(6);
})

test("ultima semana de junho de 2024 é composta apenas por um dia que é domingo", () => {
    calendar = new MonthlyCalendar("junho", 2024);
    expect(JSON.stringify(calendar.getWeek(calendar.numberWeeks)?.days)).toBe(
        "[{\"day\":30,\"year\":2024,\"month\":6,\"dayWeekId\":0,\"dayWeek\":\"DOMINGO\"}]"
    );
    expect(calendar.getWeek(calendar.numberWeeks)?.id).toBe(6);
})


test("novembro de 2024 tem 5 semanas", () => {
    calendar = new MonthlyCalendar("novembro", 2024);
    expect(calendar.numberWeeks).toBe(5);
})

test("ultima semana de novembro de 2024 vai até o ultimo dia do mês.", () => {
    calendar = new MonthlyCalendar("novembro", 2024);
    expect(JSON.stringify(calendar.getWeek(calendar.numberWeeks)?.days)).toBe(
        "[{\"day\":24,\"year\":2024,\"month\":11,\"dayWeekId\":0,\"dayWeek\":\"DOMINGO\"},{\"day\":25,\"year\":2024,\"month\":11,\"dayWeekId\":1,\"dayWeek\":\"SEGUNDA-FEIRA\"},{\"day\":26,\"year\":2024,\"month\":11,\"dayWeekId\":2,\"dayWeek\":\"TERÇA-FEIRA\"},{\"day\":27,\"year\":2024,\"month\":11,\"dayWeekId\":3,\"dayWeek\":\"QUARTA-FEIRA\"},{\"day\":28,\"year\":2024,\"month\":11,\"dayWeekId\":4,\"dayWeek\":\"QUINTA-FEIRA\"},{\"day\":29,\"year\":2024,\"month\":11,\"dayWeekId\":5,\"dayWeek\":\"SEXTA-FEIRA\"},{\"day\":30,\"year\":2024,\"month\":11,\"dayWeekId\":6,\"dayWeek\":\"SÁBADO\"}]"
    );
    expect(calendar.getWeek(calendar.numberWeeks)?.id).toBe(5);
})

