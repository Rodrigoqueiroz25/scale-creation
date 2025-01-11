import { MonthlyCalendar } from "../helpers/MonthlyCalendar"

test("janeiro é o mês 1", () => {
    const calendar = new MonthlyCalendar("Janeiro", new Date().getFullYear());
    expect(calendar.numMonth).toBe(1);
})


// test("janeiro tem 4 semanas", () => {
//     const calendar = new MonthlyCalendar("Janeiro");
//     expect(calendar.numberWeeks).toBe(5);
// })

// test("os dias da primeira semana de janeiro", () => {
//     const calendar = new MonthlyCalendar("Janeiro");
    
//     calendar.getWeek(1)?.days.forEach(day => {
//         expect(calendar.getWeek(1)).toBe(0);
//     })
// })
