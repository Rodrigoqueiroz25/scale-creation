import { DaysWeek } from "../enum/DaysWeek.enum";
import PlannedMassGateway from "../infra/gateways/plannedMass/PlannedMassGateway";
import {PlannedMassGatewayMemory} from "../infra/gateways/plannedMass/PlannedMassGatewayMemory";
import {plannedMasses} from "../data/plannedMassesParish";

let calendar: PlannedMassGateway;

describe("Tests with object scheduledMassesParoch", () => {

    beforeAll(() => {
        calendar = new PlannedMassGatewayMemory(plannedMasses);
    })

    test("Domingo tem duas missas, uma as 8h e outra as 17h na matriz.", async () => {
        const masses = await calendar.get(DaysWeek.DOMINGO);
        expect(masses).toEqual(
            [{
                "description": "",
                "local": "matriz",
                "time": "08:00",
                "vacancies": 8
            }, {"description": "", "local": "matriz", "time": "17:00", "vacancies": 8}]
        );
    })

    test("Segunda-feira não tem missa.", async () => {
        const mass = await calendar.get(DaysWeek.SEGUNDA);
        expect(mass).toEqual([]);
    })

    test("Terça-feira tem uma missa às 19h na matriz.", async () => {
        const masses = await calendar.get(DaysWeek.TERCA);
        expect(masses).toEqual(
            [{"description": "", "local": "matriz", "time": "19:00", "vacancies": 4}]
        );
    })

    test("Quarta-feira tem uma missa às 19h na matriz.", async () => {
        const masses = await calendar.get(DaysWeek.QUARTA);
        expect(masses).toEqual(
            [{"description": "", "local": "matriz", "time": "19:00", "vacancies": 4}]
        );
    })

    test("Quinta-feira tem duas missas, uma as 19h na capela e outra as 19h na matriz.", async () => {
        const masses = await calendar.get(DaysWeek.QUINTA);
        expect(masses).toEqual(
            [{
                "description": "",
                "local": "matriz",
                "time": "19:00",
                "vacancies": 4
            }, {"description": "", "local": "capela", "time": "19:00", "vacancies": 4}]
        );
    })

    test("Sexta-feira tem uma missa às 19h na matriz.", async () => {
        const masses = await calendar.get(DaysWeek.SEXTA);
        expect(masses).toEqual(
            [{"description": "", "local": "matriz", "time": "19:00", "vacancies": 4}]
        );
    })

    test("Sábado tem duas missas, uma as 17h na capela e outra as 19h na matriz.", async () => {
        const masses = await calendar.get(DaysWeek.SABADO);
        expect(masses).toEqual(
            [{
                "description": "",
                "local": "capela",
                "time": "17:00",
                "vacancies": 4
            }, {"description": "", "local": "matriz", "time": "19:00", "vacancies": 4}]
        );
    })

    test("Obtém todas as missas agendadas", async () => {
        const masses = await calendar.getAll();
        expect(masses).toEqual(
            {
                "DOMINGO": [
                    {
                        "description": "",
                        "local": "matriz",
                        "time": "08:00",
                        "vacancies": 8
                    },
                    {
                        "description": "",
                        "local": "matriz",
                        "time": "17:00",
                        "vacancies": 8
                    }
                ],
                "QUARTA-FEIRA": [
                    {
                        "description": "",
                        "local": "matriz",
                        "time": "19:00",
                        "vacancies": 4
                    }
                ],
                "QUINTA-FEIRA": [
                    {
                        "description": "",
                        "local": "matriz",
                        "time": "19:00",
                        "vacancies": 4
                    },
                    {
                        "description": "",
                        "local": "capela",
                        "time": "19:00",
                        "vacancies": 4
                    }
                ],
                "SABADO": [
                    {
                        "description": "",
                        "local": "capela",
                        "time": "17:00",
                        "vacancies": 4
                    },
                    {
                        "description": "",
                        "local": "matriz",
                        "time": "19:00",
                        "vacancies": 4
                    }
                ],
                "SEGUNDA-FEIRA": [],
                "SEXTA-FEIRA": [
                    {
                        "description": "",
                        "local": "matriz",
                        "time": "19:00",
                        "vacancies": 4
                    }
                ],
                "TERCA-FEIRA": [
                    {
                        "description": "",
                        "local": "matriz",
                        "time": "19:00",
                        "vacancies": 4
                    }
                ]
            }
        );
    })

})