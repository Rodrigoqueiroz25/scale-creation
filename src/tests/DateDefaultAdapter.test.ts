import DaysWeek from "../helpers/DaysWeek";
import DateDefaultAdapter from "../infra/adapters/date/DateDefaultAdapter";

let date: DateDefaultAdapter;

beforeEach(() => {
    date = new DateDefaultAdapter(2, 3, 2025);
})

test("obtem o ano 2025", () => {
    expect(date.getYear()).toEqual(2025)
})

test("o numero do dia é 2", () => {
    expect(date.getDayNumber()).toEqual(2)
})

test("o dia da semana do dia 02/03/2025 é domingo", () => {
    expect(date.getDayWeek()).toEqual(DaysWeek.sunday)
})

test("o dia da semana do dia 02/03/2025 é domingo", () => {
    const date = new DateDefaultAdapter(2, 3, 2025);
    expect(date.isSunday()).toEqual(true)
    expect(date.isBusinessDay()).toEqual(true)
    expect(date.isMonday()).toEqual(false)
})

test("o dia da semana do dia 03/03/2025 é segunda-feira", () => {
    const date = new DateDefaultAdapter(3, 3, 2025);
    expect(date.isMonday()).toEqual(true)
    expect(date.isBusinessDay()).toEqual(false)
    expect(date.isSunday()).toEqual(false)
})

test("o dia da semana do dia 04/03/2025 é dia util", () => {
    const date = new DateDefaultAdapter(4, 3, 2025);
    expect(date.isBusinessDay()).toEqual(true)
    expect(date.isMonday()).toEqual(false)
    expect(date.isSunday()).toEqual(false)
})








test("o ano 2024 é bissexto", () => {
    expect(date.isLeapYear(2024)).toEqual(true)
})

test("o ano 2025 não é bissexto", () => {
    expect(date.isLeapYear(2025)).toEqual(false)
})
