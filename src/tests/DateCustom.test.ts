import { notEqual } from "assert";
import DateCustom from "../infra/adapters/date/DateCustom";


let date: DateCustom;

beforeEach(() => {
    date = new DateCustom(2, 3, 2025);
})

test("obtem o ano 2025 da data 02/03/2025", () => {
    expect(date.getYear()).toEqual(2025)
})

test("o numero do dia é 2 da data 02/03/2025", () => {
    expect(date.getDayNumber()).toEqual(2)
})

test("o numero do mês é 3 da data 02/03/2025", () => {
    expect(date.getMonth()).toEqual(3)
})

test("o dia da semana do dia 02/03/2025 é DOMINGO", () => {
    expect(date.getDayWeek()).toEqual("DOMINGO")
})

test("o dia da semana do dia 02/03/2025 não é SEGUNDA-FEIRA", () => {
    notEqual(date.getDayWeek(), "SEGUNDA-FEIRA")
})

test("o dia da semana do dia 03/03/2025 é SEGUNDA-FEIRA", () => {
    const date = new DateCustom(3, 3, 2025);
    expect(date.getDayWeek()).toEqual("SEGUNDA-FEIRA")
})

test("o dia da semana do dia 04/03/2025 é TERÇA-FEIRA", () => {
    const date = new DateCustom(4, 3, 2025);
    expect(date.getDayWeek()).toEqual("TERÇA-FEIRA")
})

test("o dia da semana do dia 05/03/2025 é QUARTA-FEIRA", () => {
    const date = new DateCustom(5, 3, 2025);
    expect(date.getDayWeek()).toEqual("QUARTA-FEIRA")
})

test("o dia da semana do dia 06/03/2025 é QUINTA-FEIRA", () => {
    const date = new DateCustom(6, 3, 2025);
    expect(date.getDayWeek()).toEqual("QUINTA-FEIRA")
})

test("o dia da semana do dia 07/03/2025 é SEXTA-FEIRA", () => {
    const date = new DateCustom(7, 3, 2025);
    expect(date.getDayWeek()).toEqual("SEXTA-FEIRA")
})

test("o dia da semana do dia 08/03/2025 é SÁBADO", () => {
    const date = new DateCustom(8, 3, 2025);
    expect(date.getDayWeek()).toEqual("SÁBADO")
})


test("o dia da semana do dia 01/03/2025 é sábado", () => {
    const date = new DateCustom(1, 3, 2025);
    expect(date.isSaturday()).toEqual(true)
})

test("o dia da semana do dia 05/01/2025 não é sábado", () => {
    const date = new DateCustom(5, 1, 2025);
    expect(date.isSaturday()).toEqual(false)
})

test("Dia não poder ser menor que 1", () => {
    expect(() => new DateCustom(0, 1, 2024)).toThrow();
});

test("mês não poder ser menor que 1", () => {
    expect(() => new DateCustom(1, 0, 2024)).toThrow();
});

test("Mês não poder ser maior que 12", () => {
    expect(() => new DateCustom(1, 13, 2024)).toThrow();
});


