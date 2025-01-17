import { DaysWeek } from "../enum/DaysWeek.enum";
import MassGateway from "../infra/gateways/MassGateway";
import {MassGatewayMemory} from "../infra/gateways/MassGatewayMemory";

let calendar: MassGateway;

beforeAll(() => {
    calendar = new MassGatewayMemory();
})

test("lança erro com mensagem 'dia inválido' se for passada string in válida.", () => {
    expect(() => calendar.getByDay("sds")).toThrow("dia inválido");
})


test("Domingo tem duas missas, uma as 8h e outra as 17h na matriz.", async () => {
    // eslint-disable-next-line testing-library/no-await-sync-query
    const masses = await calendar.getByDay(DaysWeek.DOMINGO);
    expect(JSON.stringify(masses)).toBe(
        "[{\"time\":\"8:00\",\"local\":\"matriz\",\"vacancies\":8,\"description\":\"\"},{\"time\":\"17:00\",\"local\":\"matriz\",\"vacancies\":8,\"description\":\"\"}]"
    );
})

test("Segunda-feira não tem missa.", async () => {
    // eslint-disable-next-line testing-library/no-await-sync-query
    const masses = await calendar.getByDay(DaysWeek.SEGUNDA);
    expect(JSON.stringify(masses)).toBe(
        "[]"
    );
})

test("Terça-feira tem uma missa às 19h na matriz.", async () => {
    // eslint-disable-next-line testing-library/no-await-sync-query
    const masses = await calendar.getByDay(DaysWeek.TERCA);
    expect(JSON.stringify(masses)).toBe(
        "[{\"time\":\"19:00\",\"local\":\"matriz\",\"vacancies\":4,\"description\":\"\"}]"
    );
})

test("Quarta-feira tem uma missa às 19h na matriz.", async () => {
    // eslint-disable-next-line testing-library/no-await-sync-query
    const masses = await calendar.getByDay(DaysWeek.QUARTA);
    expect(JSON.stringify(masses)).toBe(
        "[{\"time\":\"19:00\",\"local\":\"matriz\",\"vacancies\":4,\"description\":\"\"}]"
    );
})

test("Quinta-feira tem duas missas, uma as 19h na capela e outra as 19h na matriz.", async () => {
    // eslint-disable-next-line testing-library/no-await-sync-query
    const masses = await calendar.getByDay(DaysWeek.QUINTA);
    expect(JSON.stringify(masses)).toBe(
        "[{\"time\":\"19:00\",\"local\":\"matriz\",\"vacancies\":4,\"description\":\"\"},{\"time\":\"19:00\",\"local\":\"capela\",\"vacancies\":4,\"description\":\"\"}]"
    );
})


test("Sexta-feira tem uma missa às 19h na matriz.", async () => {
    // eslint-disable-next-line testing-library/no-await-sync-query
    const masses = await calendar.getByDay(DaysWeek.SEXTA);
    expect(JSON.stringify(masses)).toBe(
        "[{\"time\":\"19:00\",\"local\":\"matriz\",\"vacancies\":4,\"description\":\"\"}]"
    );
})

test("Sábado tem duas missas, uma as 17h na capela e outra as 19h na matriz.", async () => {
    // eslint-disable-next-line testing-library/no-await-sync-query
    const masses = await calendar.getByDay(DaysWeek.SABADO);
    expect(JSON.stringify(masses)).toBe(
        "[{\"time\":\"17:00\",\"local\":\"capela\",\"vacancies\":4,\"description\":\"\"},{\"time\":\"19:00\",\"local\":\"matriz\",\"vacancies\":4,\"description\":\"\"}]"
    );
})
