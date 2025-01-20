import { DaysWeek } from "../enum/DaysWeek.enum";
import WeeklyScheduleGateway from "../infra/gateways/WeeklyScheduleGateway";
import {WeeklyScheduleGatewayMemory} from "../infra/gateways/WeeklyScheduleGatewayMemory";
import {scheduledMassesParoch} from "../data/scheduledMasses";

let calendar: WeeklyScheduleGateway;

describe("Tests with object scheduledMassesParoch", () => {

    beforeAll(() => {
        calendar = new WeeklyScheduleGatewayMemory(scheduledMassesParoch);
    })

    test("Domingo tem duas missas, uma as 8h e outra as 17h na matriz.", async () => {
        const masses = await calendar.get(DaysWeek.DOMINGO);
        expect(masses).toEqual(
            [{
                "dayWeek": "DOMINGO",
                "description": "",
                "local": "matriz",
                "time": "08:00",
                "vacancies": 8
            }, {"dayWeek": "DOMINGO", "description": "", "local": "matriz", "time": "17:00", "vacancies": 8}]
        );
    })

    test("Segunda-feira não tem missa.", async () => {
        const mass = await calendar.get(DaysWeek.SEGUNDA);
        expect(mass).toEqual([]);
    })

    test("Terça-feira tem uma missa às 19h na matriz.", async () => {
        const masses = await calendar.get(DaysWeek.TERCA);
        expect(masses).toEqual(
            [{"dayWeek": "TERCA-FEIRA", "description": "", "local": "matriz", "time": "19:00", "vacancies": 4}]
        );
    })

    test("Quarta-feira tem uma missa às 19h na matriz.", async () => {
        const masses = await calendar.get(DaysWeek.QUARTA);
        expect(masses).toEqual(
            [{"dayWeek": "QUARTA-FEIRA", "description": "", "local": "matriz", "time": "19:00", "vacancies": 4}]
        );
    })

    test("Quinta-feira tem duas missas, uma as 19h na capela e outra as 19h na matriz.", async () => {
        const masses = await calendar.get(DaysWeek.QUINTA);
        expect(masses).toEqual(
            [{
                "dayWeek": "QUINTA-FEIRA",
                "description": "",
                "local": "matriz",
                "time": "19:00",
                "vacancies": 4
            }, {"dayWeek": "QUINTA-FEIRA", "description": "", "local": "capela", "time": "19:00", "vacancies": 4}]
        );
    })

    test("Sexta-feira tem uma missa às 19h na matriz.", async () => {
        const masses = await calendar.get(DaysWeek.SEXTA);
        expect(masses).toEqual(
            [{"dayWeek": "SEXTA-FEIRA", "description": "", "local": "matriz", "time": "19:00", "vacancies": 4}]
        );
    })

    test("Sábado tem duas missas, uma as 17h na capela e outra as 19h na matriz.", async () => {
        const masses = await calendar.get(DaysWeek.SABADO);
        expect(masses).toEqual(
            [{
                "dayWeek": "SABADO",
                "description": "",
                "local": "capela",
                "time": "17:00",
                "vacancies": 4
            }, {"dayWeek": "SABADO", "description": "", "local": "matriz", "time": "19:00", "vacancies": 4}]
        );
    })

    test("Obtém todas as missas agendadas", async () => {
        const masses = await calendar.getAll();
        expect(masses).toEqual(
            [
                {
                    "dayWeek": "DOMINGO",
                    "description": "",
                    "local": "matriz",
                    "time": "08:00",
                    "vacancies": 8
                },
                {
                    "dayWeek": "DOMINGO",
                    "description": "",
                    "local": "matriz",
                    "time": "17:00",
                    "vacancies": 8
                },
                {
                    "dayWeek": "TERCA-FEIRA",
                    "description": "",
                    "local": "matriz",
                    "time": "19:00",
                    "vacancies": 4
                },
                {
                    "dayWeek": "QUARTA-FEIRA",
                    "description": "",
                    "local": "matriz",
                    "time": "19:00",
                    "vacancies": 4
                },
                {
                    "dayWeek": "QUINTA-FEIRA",
                    "description": "",
                    "local": "matriz",
                    "time": "19:00",
                    "vacancies": 4
                },
                {
                    "dayWeek": "QUINTA-FEIRA",
                    "description": "",
                    "local": "capela",
                    "time": "19:00",
                    "vacancies": 4
                },
                {
                    "dayWeek": "SEXTA-FEIRA",
                    "description": "",
                    "local": "matriz",
                    "time": "19:00",
                    "vacancies": 4
                },
                {
                    "dayWeek": "SABADO",
                    "description": "",
                    "local": "capela",
                    "time": "17:00",
                    "vacancies": 4
                },
                {
                    "dayWeek": "SABADO",
                    "description": "",
                    "local": "matriz",
                    "time": "19:00",
                    "vacancies": 4
                }
            ]
        );
    })

})