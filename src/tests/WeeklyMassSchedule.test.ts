import WeeklyMassSchedule from "../entities/WeeklyMassSchedule";
import {NameMonths} from "../enum/NameMonths.enum";
import Month from "../entities/Month";
import PlannedMassGateway from "../infra/gateways/plannedMass/PlannedMassGateway";
import MonthFactory from "../helpers/MonthFactory";
import {PlannedMassGatewayMemory} from "../infra/gateways/plannedMass/PlannedMassGatewayMemory";
import {plannedMasses} from "../data/plannedMassesParish";
import DateCustom from "../entities/DateCustom";

describe('Missas agendadas para primeira semana de janeiro de 2025', () => {

    let weeklySchedule: WeeklyMassSchedule;
    let datesMonth: Month;
    let plannedMassGateway: PlannedMassGateway;
    beforeEach(() => {
        datesMonth = MonthFactory.create(NameMonths.JANEIRO, new Date().getFullYear());
        plannedMassGateway = new PlannedMassGatewayMemory(plannedMasses);
        plannedMassGateway.getAll().then(plannedMasses => {
            weeklySchedule = WeeklyMassSchedule.create(datesMonth.getWeek(2), plannedMasses);
        })
    })

    test("Agendamentos estão sendo criados conforme o esperado", () => {
        expect(weeklySchedule.massesScheduledForWeek).toEqual(
            [
                {
                    "date": {
                        "day": 5,
                        "dayWeek": "DOMINGO",
                        "dayWeekId": 0,
                        "month": 1,
                        "year": 2025
                    },
                    "description": "",
                    "local": "matriz",
                    "numVacancies": 8,
                    "slots": {
                        "data": {}
                    },
                    "time": "08:00"
                },
                {
                    "date": {
                        "day": 5,
                        "dayWeek": "DOMINGO",
                        "dayWeekId": 0,
                        "month": 1,
                        "year": 2025
                    },
                    "description": "",
                    "local": "matriz",
                    "numVacancies": 8,
                    "slots": {
                        "data": {}
                    },
                    "time": "17:00"
                },
                {
                    "date": {
                        "day": 7,
                        "dayWeek": "TERCA-FEIRA",
                        "dayWeekId": 2,
                        "month": 1,
                        "year": 2025
                    },
                    "description": "",
                    "local": "matriz",
                    "numVacancies": 4,
                    "slots": {
                        "data": {}
                    },
                    "time": "19:00"
                },
                {
                    "date": {
                        "day": 8,
                        "dayWeek": "QUARTA-FEIRA",
                        "dayWeekId": 3,
                        "month": 1,
                        "year": 2025
                    },
                    "description": "",
                    "local": "matriz",
                    "numVacancies": 4,
                    "slots": {
                        "data": {}
                    },
                    "time": "19:00"
                },
                {
                    "date": {
                        "day": 9,
                        "dayWeek": "QUINTA-FEIRA",
                        "dayWeekId": 4,
                        "month": 1,
                        "year": 2025
                    },
                    "description": "",
                    "local": "matriz",
                    "numVacancies": 4,
                    "slots": {
                        "data": {}
                    },
                    "time": "19:00"
                },
                {
                    "date": {
                        "day": 9,
                        "dayWeek": "QUINTA-FEIRA",
                        "dayWeekId": 4,
                        "month": 1,
                        "year": 2025
                    },
                    "description": "",
                    "local": "capela",
                    "numVacancies": 4,
                    "slots": {
                        "data": {}
                    },
                    "time": "19:00"
                },
                {
                    "date": {
                        "day": 10,
                        "dayWeek": "SEXTA-FEIRA",
                        "dayWeekId": 5,
                        "month": 1,
                        "year": 2025
                    },
                    "description": "",
                    "local": "matriz",
                    "numVacancies": 4,
                    "slots": {
                        "data": {}
                    },
                    "time": "19:00"
                },
                {
                    "date": {
                        "day": 11,
                        "dayWeek": "SABADO",
                        "dayWeekId": 6,
                        "month": 1,
                        "year": 2025
                    },
                    "description": "",
                    "local": "capela",
                    "numVacancies": 4,
                    "slots": {
                        "data": {}
                    },
                    "time": "17:00"
                },
                {
                    "date": {
                        "day": 11,
                        "dayWeek": "SABADO",
                        "dayWeekId": 6,
                        "month": 1,
                        "year": 2025
                    },
                    "description": "",
                    "local": "matriz",
                    "numVacancies": 4,
                    "slots": {
                        "data": {}
                    },
                    "time": "19:00"
                }
            ]
        );
    });

    test("adiciona um altar server na missa agendada para o dia 7 ás 19:00 na matriz quando ele não está já escalado na mesma", () => {
        weeklySchedule.assignToMass({name: "alef", id: 1 }, 1, new DateCustom(7,1,2025), "19:00", "matriz");
        expect(weeklySchedule.getAssignedAltarServersInMass(new DateCustom(7,1,2025), "19:00", "matriz")).toEqual([
            {
                "name": "alef",
                "id": 1
            }
        ]);
    });

    test("não escala o altar server em uma missa entre terça e sábado quando ele já está escalado em uma missa entre terça e sábado", () => {
        weeklySchedule.assignToMass({name: "alef", id: 1 }, 1, new DateCustom(7,1,2025), "19:00", "matriz");
        weeklySchedule.assignToMass({name: "alef", id: 1 }, 1, new DateCustom(9,1,2025), "19:00", "matriz");
        expect(weeklySchedule.getAssignedAltarServersInMass(new DateCustom(9,1,2025), "19:00", "matriz")).toEqual([]);
    });

    test("escala o altar server em uma missa entre terça e sábado quando ele já está escalado em uma missa dominical", () => {
        weeklySchedule.assignToMass({name: "alef", id: 1 }, 1, new DateCustom(5,1,2025), "17:00", "matriz");
        weeklySchedule.assignToMass({name: "alef", id: 1 }, 1, new DateCustom(7,1,2025), "19:00", "matriz");
        expect(weeklySchedule.getAssignedAltarServersInMass(new DateCustom(7,1,2025), "19:00", "matriz")).toEqual(
            [{"name": "alef", "id": 1}]
        );
    });

    test("não escala o altar server em mais de uma missa no mesmo dia quando são mesmo horário e locais diferentes", () => {
        weeklySchedule.assignToMass({name: "alef", id: 1 },1, new DateCustom(9,1,2025), "19:00", "capela");
        weeklySchedule.assignToMass({name: "alef", id: 1 },1, new DateCustom(9,1,2025), "19:00", "matriz");
        expect(weeklySchedule.getAssignedAltarServersInMass(new DateCustom(9,1,2025), "19:00", "capela")).toEqual(
            [{"name": "alef", "id": 1}]
        );
        expect(weeklySchedule.getAssignedAltarServersInMass(new DateCustom(9,1,2025), "19:00", "matriz")).toEqual(
            []
        );
    });

    test("não escala o altar server em mais de uma missa no mesmo dia quando são diferentes horários e locais diferentes", () => {
        weeklySchedule.assignToMass({name: "alef", id: 1 }, 1, new DateCustom(11,1,2025), "17:00", "capela");
        weeklySchedule.assignToMass({name: "alef", id: 1 }, 1, new DateCustom(11,1,2025), "19:00", "matriz");
        expect(weeklySchedule.getAssignedAltarServersInMass(new DateCustom(11,1,2025), "17:00", "capela")).toEqual(
            [{"name": "alef", "id": 1}]
        );
        expect(weeklySchedule.getAssignedAltarServersInMass(new DateCustom(11,1,2025), "19:00", "matriz")).toEqual(
            []
        );
    });

    test("adiciona um altar server na missa agendada para o dia 5 ás 08:00 na matriz quando ele não está já escalado na mesma", () => {
        weeklySchedule.assignToMass({name: "alef", id: 1 }, 1, new DateCustom(5,1,2025), "08:00", "matriz");
        expect(weeklySchedule.getAssignedAltarServersInMass(new DateCustom(5,1,2025), "08:00", "matriz")).toEqual([
            {
                "name": "alef",
                "id": 1
            }
        ]);
    });

    test("não escala o altar server em mais de uma missa no domingo", () => {
        weeklySchedule.assignToMass({name: "alef", id: 1 }, 1, new DateCustom(5,1,2025), "08:00", "matriz");
        weeklySchedule.assignToMass({name: "alef", id: 1 }, 1, new DateCustom(5,1,2025), "17:00", "matriz");
        expect(weeklySchedule.getAssignedAltarServersInMass(new DateCustom(5,1,2025), "08:00", "matriz")).toEqual(
            [{"name": "alef", "id": 1}]
        );
        expect(weeklySchedule.getAssignedAltarServersInMass(new DateCustom(5,1,2025), "17:00", "matriz")).toEqual(
            []
        );
    });

    test("remove um altar server de uma missa agendada para o dia 5 ás 08:00 na matriz", () => {
        weeklySchedule.assignToMass({name: "alef", id: 1 }, 1, new DateCustom(5,1,2025), "08:00", "matriz");
        weeklySchedule.assignToMass({name: "bet", id: 2 }, 2, new DateCustom(5,1,2025), "08:00", "matriz");
        expect(weeklySchedule.getAssignedAltarServersInMass(new DateCustom(5,1,2025), "08:00", "matriz")).toEqual([
            {
                "name": "alef",
                "id": 1
            },
            {
                "name": "bet",
                "id": 2
            }
        ]);
        weeklySchedule.cancelAssignAltarServer(1, new DateCustom(5,1,2025), "08:00", "matriz");
        expect(weeklySchedule.getAssignedAltarServersInMass(new DateCustom(5,1,2025), "08:00", "matriz")).toEqual(
            [
                {
                    "name": "bet",
                    "id": 2
                }
            ]
        );
    });

    test("troca o altar server escalado em uma missa.", () => {
        weeklySchedule.assignToMass({name: "alef", id: 1 }, 1, new DateCustom(7,1,2025), "19:00", "matriz");
        weeklySchedule.assignToMass({name: "fghrty", id: 2 }, 1, new DateCustom(7,1,2025), "19:00", "matriz");

        expect(weeklySchedule.getAssignedAltarServersInMass(new DateCustom(7,1,2025), "19:00", "matriz")).toEqual(
            [{"name": "fghrty", "id": 2}]
        );

    });


})