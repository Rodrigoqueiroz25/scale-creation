import DaysWeek from "../helpers/DaysWeek";

test("lança exceção quando dia inserido é inválido", () => {
    try {
        const month = DaysWeek.getDay(8);
    } catch (e: any) {
        expect(e.message).toBe("Dia inválido.");
    }
})


test("domingo é o dia 1", () => {
    expect(DaysWeek.getDay(1)).toBe("DOMINGO");
})

test("segunda-feira é o dia 2", () => {
    expect(DaysWeek.getDay(2)).toBe("SEGUNDA-FEIRA");
})

test("terça-feira é o dia 3", () => {
    expect(DaysWeek.getDay(3)).toBe("TERÇA-FEIRA");
})
test("quarta-feira é o dia 4", () => {
    expect(DaysWeek.getDay(4)).toBe("QUARTA-FEIRA");
})
test("quinta-feira é o dia 5", () => {
    expect(DaysWeek.getDay(5)).toBe("QUINTA-FEIRA");
})
test("sexta-feira é o dia 6", () => {
    expect(DaysWeek.getDay(6)).toBe("SEXTA-FEIRA");
})
test("sábado-feira é o dia 7", () => {
    expect(DaysWeek.getDay(7)).toBe("SÁBADO");
})


