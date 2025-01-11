import Calendar from "../helpers/Calendar";


test("lança exceção quando mês inserido é inválido", () => {
    try {
        const month = Calendar.getMonthByName("JANEIROO");
    } catch (e: any) {
        expect(e.message).toBe("Mês inválido.");
    }
})
test("janeiro é o mês 1", () => {
    expect(Calendar.getMonthByName("JANEIRO").id).toBe(1);
})

test("O mês 1 é janeiro", () => {
    expect(Calendar.getMonthById(1).name).toBe("JANEIRO");
})


test("janeiro tem 31 dias", () => {
    expect(Calendar.getMonthByName("JANEIRO").numberDays).toBe(31);
})

test("fevereiro tem 28 dias quando em ano não bissexto", () => {
    expect(Calendar.getMonthByName("FEVEREIRO").numberDays).toBe(28);
})

test("fevereiro tem 29 dias quando em ano bissexto", () => {
    jest.useFakeTimers().setSystemTime(new Date(2024, 2, 3,));
    expect(Calendar.getMonthByName("FEVEREIRO").numberDays).toBe(29);
})

// test("Obtem lista dos meses do ano", () => {
//     expect(Calendar.listMonths).toBe([
//         {"id": 1, "name": "JANEIRO", "numberDays": 31}, 
//         {"id": 2, "name": "FEVEREIRO", "numberDays": 29}, 
//         {"id": 3, "name": "MARÇO", "numberDays": 31}, 
//         {"id": 4, "name": "ABRIL", "numberDays": 30}, 
//         {"id": 5, "name": "MAIO", "numberDays": 31}, 
//         {"id": 6, "name": "JUNHO", "numberDays": 30}, 
//         {"id": 7, "name": "JULHO", "numberDays": 31}, 
//         {"id": 8, "name": "AGOSTO", "numberDays": 31}, 
//         {"id": 9, "name": "SETEMBRO", "numberDays": 30}, 
//         {"id": 10, "name": "OUTUBRO", "numberDays": 31}, 
//         {"id": 11, "name": "NOVEMBRO", "numberDays": 30}, 
//         {"id": 12, "name": "DEZEMBRO", "numberDays": 31}
//     ]);
// })

