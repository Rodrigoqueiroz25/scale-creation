
import PlannedMassGateway from "../infra/gateways/plannedMass/PlannedMassGateway";
import WeeklyMassSchedule from "../core/entities/WeeklyMassSchedule";
import Month from "../core/types/Month";
import MonthFactory from "../utils/MonthFactory";
import {NameMonths} from "../shared/enums/NameMonths.enum";
import {PlannedMassGatewayMemory} from "../infra/gateways/plannedMass/PlannedMassGatewayMemory";
import {plannedMasses} from "../shared/data/plannedMassesParish";

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
        expect(weeklySchedule.getSchedule()).toEqual(
            [
                {
                    "altarServers": {
                        "data": {}
                    },
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
                    "time": "08:00"
                },
                {
                    "altarServers": {
                        "data": {}
                    },
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
                    "time": "17:00"
                },
                {
                    "altarServers": {
                        "data": {}
                    },
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
                    "time": "19:00"
                },
                {
                    "altarServers": {
                        "data": {}
                    },
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
                    "time": "19:00"
                },
                {
                    "altarServers": {
                        "data": {}
                    },
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
                    "time": "19:00"
                },
                {
                    "altarServers": {
                        "data": {}
                    },
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
                    "time": "19:00"
                },
                {
                    "altarServers": {
                        "data": {}
                    },
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
                    "time": "19:00"
                },
                {
                    "altarServers": {
                        "data": {}
                    },
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
                    "time": "17:00"
                },
                {
                    "altarServers": {
                        "data": {}
                    },
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
                    "time": "19:00"
                }
            ]
        );
    });


})