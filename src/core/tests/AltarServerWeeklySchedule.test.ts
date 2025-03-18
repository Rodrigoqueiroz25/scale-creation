import WeeklyMassSchedule from "../domain/entities/WeeklyMassSchedule";
import WeeklyAltarServerMassAssignmentManager from "../application/usecases/WeeklyAltarServerMassAssignmentManager";
import Month from "../../modules/calendar/Month";
import IPlannedMassGateway from "../domain/gateways/planned-mass.gateway";
import MonthFactory from "../../modules/calendar/month.factory";
import {NameMonths} from "../../shared/enums/NameMonths.enum";
import {PlannedMassMemoryGateway} from "../infra/gateways/planned-mass/planned-mass-memory.gateway";
import {plannedMasses} from "../../shared/data/plannedMassesParish";
import DateCustom from "../../modules/calendar/DateCustom";
import {DateTimeLocal} from "../domain/entities/Mass";

describe('Missas agendadas para primeira semana de janeiro de 2025', () => {

    let massWeeklySchedule: WeeklyMassSchedule;
    let altarServerWeeklySchedule: WeeklyAltarServerMassAssignmentManager;
    let datesMonth: Month;
    let plannedMassGateway: IPlannedMassGateway;
    beforeEach(() => {
        datesMonth = MonthFactory.create(NameMonths.JANEIRO, new Date().getFullYear());
        plannedMassGateway = new PlannedMassMemoryGateway(plannedMasses);
        plannedMassGateway.getAll().then(plannedMasses => {
            massWeeklySchedule = WeeklyMassSchedule.create(datesMonth.getWeek(2), plannedMasses);
            altarServerWeeklySchedule = new WeeklyAltarServerMassAssignmentManager(massWeeklySchedule);
        })
    })


    test("adiciona um altar server na missa agendada para o dia 7 ás 19:00 na matriz quando ele não está já escalado na mesma", () => {
        let massId: DateTimeLocal = {
            date: new DateCustom(7,1,2025),
            time: "19:00",
            local: "matriz"
        }
        altarServerWeeklySchedule.assignToMass({name: "alef", id: 1 }, 1, massId);
        expect(massWeeklySchedule.getScheduledMass(massId)?.getAllAltarServers()).toEqual([
            {
                "name": "alef",
                "id": 1
            }
        ]);
    });

    test("não escala o altar server em uma missa entre terça e sábado quando ele já está escalado em uma missa entre terça e sábado", () => {
        let massId: DateTimeLocal = {
            date: new DateCustom(7,1,2025),
            time: "19:00",
            local: "matriz"
        }
        let massId2: DateTimeLocal = {
            date: new DateCustom(9,1,2025),
            time: "19:00",
            local: "matriz"
        }
        altarServerWeeklySchedule.assignToMass({name: "alef", id: 1 }, 1, massId);
        altarServerWeeklySchedule.assignToMass({name: "alef", id: 1 }, 1, massId2);
        expect(massWeeklySchedule.getScheduledMass(massId2)?.getAllAltarServers()).toEqual([]);
    });

    test("escala o altar server em uma missa entre terça e sábado quando ele já está escalado em uma missa dominical", () => {
        let massId: DateTimeLocal = {
            date: new DateCustom(5,1,2025),
            time: "17:00",
            local: "matriz"
        }
        let massId2: DateTimeLocal = {
            date: new DateCustom(7,1,2025),
            time: "19:00",
            local: "matriz"
        }
        altarServerWeeklySchedule.assignToMass({name: "alef", id: 1 }, 1, massId);
        altarServerWeeklySchedule.assignToMass({name: "alef", id: 1 }, 1, massId2);
        expect(massWeeklySchedule.getScheduledMass(massId2)?.getAllAltarServers()).toEqual(
            [{"name": "alef", "id": 1}]
        );
    });

    test("não escala o altar server em mais de uma missa no mesmo dia quando são mesmo horário e locais diferentes", () => {
        let massId: DateTimeLocal = {
            date: new DateCustom(9,1,2025),
            time: "19:00",
            local: "matriz"
        }
        let massId2: DateTimeLocal = {
            date: new DateCustom(9,1,2025),
            time: "19:00",
            local: "capela"
        }
        altarServerWeeklySchedule.assignToMass({name: "alef", id: 1 },1, massId);
        altarServerWeeklySchedule.assignToMass({name: "alef", id: 1 },1, massId2);
        expect(massWeeklySchedule.getScheduledMass(massId)?.getAllAltarServers()).toEqual(
            [{"name": "alef", "id": 1}]
        );
        expect(massWeeklySchedule.getScheduledMass(massId2)?.getAllAltarServers()).toEqual(
            []
        );
    });

    test("não escala o altar server em mais de uma missa no mesmo dia quando são diferentes horários e locais diferentes", () => {
        let massId: DateTimeLocal = {
            date: new DateCustom(11,1,2025),
            time: "17:00",
            local: "capela"
        }
        let massId2: DateTimeLocal = {
            date: new DateCustom(11,1,2025),
            time: "19:00",
            local: "matriz"
        }
        altarServerWeeklySchedule.assignToMass({name: "alef", id: 1 }, 1, massId);
        altarServerWeeklySchedule.assignToMass({name: "alef", id: 1 }, 1, massId2);
        expect(massWeeklySchedule.getScheduledMass(massId)?.getAllAltarServers()).toEqual(
            [{"name": "alef", "id": 1}]
        );
        expect(massWeeklySchedule.getScheduledMass(massId2)?.getAllAltarServers()).toEqual(
            []
        );
    });

    test("adiciona um altar server na missa agendada para o dia 5 ás 08:00 na matriz quando ele não está já escalado na mesma", () => {
        let massId: DateTimeLocal = {
            date: new DateCustom(5,1,2025),
            time: "08:00",
            local: "matriz"
        }
        altarServerWeeklySchedule.assignToMass({name: "alef", id: 1 }, 1, massId);
        expect(massWeeklySchedule.getScheduledMass(massId)?.getAllAltarServers()).toEqual([
            {
                "name": "alef",
                "id": 1
            }
        ]);
    });

    test("não escala o altar server em mais de uma missa no domingo", () => {
        let massId: DateTimeLocal = {
            date: new DateCustom(5,1,2025),
            time: "08:00",
            local: "matriz"
        }
        let massId2: DateTimeLocal = {
            date: new DateCustom(5,1,2025),
            time: "17:00",
            local: "matriz"
        }
        altarServerWeeklySchedule.assignToMass({name: "alef", id: 1 }, 1, massId);
        altarServerWeeklySchedule.assignToMass({name: "alef", id: 1 }, 1, massId2);
        expect(massWeeklySchedule.getScheduledMass(massId)?.getAllAltarServers()).toEqual(
            [{"name": "alef", "id": 1}]
        );
        expect(massWeeklySchedule.getScheduledMass(massId2)?.getAllAltarServers()).toEqual(
            []
        );
    });

    test("remove um altar server de uma missa agendada para o dia 5 ás 08:00 na matriz", () => {
        let massId: DateTimeLocal = {
            date: new DateCustom(5,1,2025),
            time: "08:00",
            local: "matriz"
        }
        altarServerWeeklySchedule.assignToMass({name: "alef", id: 1 }, 1, massId);
        altarServerWeeklySchedule.assignToMass({name: "bet", id: 2 }, 2, massId);
        expect(massWeeklySchedule.getScheduledMass(massId)?.getAllAltarServers()).toEqual([
            {
                "name": "alef",
                "id": 1
            },
            {
                "name": "bet",
                "id": 2
            }
        ]);
        altarServerWeeklySchedule.unassignFromMass(1, massId);
        expect(massWeeklySchedule.getScheduledMass(massId)?.getAllAltarServers()).toEqual(
            [
                {
                    "name": "bet",
                    "id": 2
                }
            ]
        );
    });

    test("troca o altar server escalado em uma missa.", () => {
        let massId: DateTimeLocal = {
            date: new DateCustom(7,1,2025),
            time: "19:00",
            local: "matriz"
        }
        altarServerWeeklySchedule.assignToMass({name: "alef", id: 1 }, 1, massId);
        altarServerWeeklySchedule.assignToMass({name: "fghrty", id: 2 }, 1, massId);

        expect(massWeeklySchedule.getScheduledMass(massId)?.getAllAltarServers()).toEqual(
            [{"name": "fghrty", "id": 2}]
        );

    });


})