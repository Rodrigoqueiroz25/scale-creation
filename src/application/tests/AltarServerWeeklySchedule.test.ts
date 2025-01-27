import WeeklyMassSchedule from "../core/entities/WeeklyMassSchedule";
import AltarServerWeeklySchedule from "../core/entities/AltarServerWeeklySchedule";
import Month from "../core/types/Month";
import PlannedMassGateway from "../infra/gateways/plannedMass/PlannedMassGateway";
import MonthFactory from "../utils/MonthFactory";
import {NameMonths} from "../shared/enums/NameMonths.enum";
import {PlannedMassGatewayMemory} from "../infra/gateways/plannedMass/PlannedMassGatewayMemory";
import {plannedMasses} from "../shared/data/plannedMassesParish";
import DateCustom from "../core/types/DateCustom";

describe('Missas agendadas para primeira semana de janeiro de 2025', () => {

    let massWeeklySchedule: WeeklyMassSchedule;
    let altarServerWeeklySchedule: AltarServerWeeklySchedule;
    let datesMonth: Month;
    let plannedMassGateway: PlannedMassGateway;
    beforeEach(() => {
        datesMonth = MonthFactory.create(NameMonths.JANEIRO, new Date().getFullYear());
        plannedMassGateway = new PlannedMassGatewayMemory(plannedMasses);
        plannedMassGateway.getAll().then(plannedMasses => {
            massWeeklySchedule = WeeklyMassSchedule.create(datesMonth.getWeek(2), plannedMasses);
            altarServerWeeklySchedule = new AltarServerWeeklySchedule(massWeeklySchedule);
        })
    })


    test("adiciona um altar server na missa agendada para o dia 7 ás 19:00 na matriz quando ele não está já escalado na mesma", () => {
        altarServerWeeklySchedule.assignToMass({name: "alef", id: 1 }, 1, new DateCustom(7,1,2025), "19:00", "matriz");
        expect(massWeeklySchedule.getScheduledMass(new DateCustom(7,1,2025), "19:00", "matriz")?.getAllAltarServers()).toEqual([
            {
                "name": "alef",
                "id": 1
            }
        ]);
    });

    test("não escala o altar server em uma missa entre terça e sábado quando ele já está escalado em uma missa entre terça e sábado", () => {
        altarServerWeeklySchedule.assignToMass({name: "alef", id: 1 }, 1, new DateCustom(7,1,2025), "19:00", "matriz");
        altarServerWeeklySchedule.assignToMass({name: "alef", id: 1 }, 1, new DateCustom(9,1,2025), "19:00", "matriz");
        expect(massWeeklySchedule.getScheduledMass(new DateCustom(9,1,2025), "19:00", "matriz")?.getAllAltarServers()).toEqual([]);
    });

    test("escala o altar server em uma missa entre terça e sábado quando ele já está escalado em uma missa dominical", () => {
        altarServerWeeklySchedule.assignToMass({name: "alef", id: 1 }, 1, new DateCustom(5,1,2025), "17:00", "matriz");
        altarServerWeeklySchedule.assignToMass({name: "alef", id: 1 }, 1, new DateCustom(7,1,2025), "19:00", "matriz");
        expect(massWeeklySchedule.getScheduledMass(new DateCustom(7,1,2025), "19:00", "matriz")?.getAllAltarServers()).toEqual(
            [{"name": "alef", "id": 1}]
        );
    });

    test("não escala o altar server em mais de uma missa no mesmo dia quando são mesmo horário e locais diferentes", () => {
        altarServerWeeklySchedule.assignToMass({name: "alef", id: 1 },1, new DateCustom(9,1,2025), "19:00", "capela");
        altarServerWeeklySchedule.assignToMass({name: "alef", id: 1 },1, new DateCustom(9,1,2025), "19:00", "matriz");
        expect(massWeeklySchedule.getScheduledMass(new DateCustom(9,1,2025), "19:00", "capela")?.getAllAltarServers()).toEqual(
            [{"name": "alef", "id": 1}]
        );
        expect(massWeeklySchedule.getScheduledMass(new DateCustom(9,1,2025), "19:00", "matriz")?.getAllAltarServers()).toEqual(
            []
        );
    });

    test("não escala o altar server em mais de uma missa no mesmo dia quando são diferentes horários e locais diferentes", () => {
        altarServerWeeklySchedule.assignToMass({name: "alef", id: 1 }, 1, new DateCustom(11,1,2025), "17:00", "capela");
        altarServerWeeklySchedule.assignToMass({name: "alef", id: 1 }, 1, new DateCustom(11,1,2025), "19:00", "matriz");
        expect(massWeeklySchedule.getScheduledMass(new DateCustom(11,1,2025), "17:00", "capela")?.getAllAltarServers()).toEqual(
            [{"name": "alef", "id": 1}]
        );
        expect(massWeeklySchedule.getScheduledMass(new DateCustom(11,1,2025), "19:00", "matriz")?.getAllAltarServers()).toEqual(
            []
        );
    });

    test("adiciona um altar server na missa agendada para o dia 5 ás 08:00 na matriz quando ele não está já escalado na mesma", () => {
        altarServerWeeklySchedule.assignToMass({name: "alef", id: 1 }, 1, new DateCustom(5,1,2025), "08:00", "matriz");
        expect(massWeeklySchedule.getScheduledMass(new DateCustom(5,1,2025), "08:00", "matriz")?.getAllAltarServers()).toEqual([
            {
                "name": "alef",
                "id": 1
            }
        ]);
    });

    test("não escala o altar server em mais de uma missa no domingo", () => {
        altarServerWeeklySchedule.assignToMass({name: "alef", id: 1 }, 1, new DateCustom(5,1,2025), "08:00", "matriz");
        altarServerWeeklySchedule.assignToMass({name: "alef", id: 1 }, 1, new DateCustom(5,1,2025), "17:00", "matriz");
        expect(massWeeklySchedule.getScheduledMass(new DateCustom(5,1,2025), "08:00", "matriz")?.getAllAltarServers()).toEqual(
            [{"name": "alef", "id": 1}]
        );
        expect(massWeeklySchedule.getScheduledMass(new DateCustom(5,1,2025), "17:00", "matriz")?.getAllAltarServers()).toEqual(
            []
        );
    });

    test("remove um altar server de uma missa agendada para o dia 5 ás 08:00 na matriz", () => {
        altarServerWeeklySchedule.assignToMass({name: "alef", id: 1 }, 1, new DateCustom(5,1,2025), "08:00", "matriz");
        altarServerWeeklySchedule.assignToMass({name: "bet", id: 2 }, 2, new DateCustom(5,1,2025), "08:00", "matriz");
        expect(massWeeklySchedule.getScheduledMass(new DateCustom(5,1,2025), "08:00", "matriz")?.getAllAltarServers()).toEqual([
            {
                "name": "alef",
                "id": 1
            },
            {
                "name": "bet",
                "id": 2
            }
        ]);
        altarServerWeeklySchedule.cancelAssignAltarServer(1, new DateCustom(5,1,2025), "08:00", "matriz");
        expect(massWeeklySchedule.getScheduledMass(new DateCustom(5,1,2025), "08:00", "matriz")?.getAllAltarServers()).toEqual(
            [
                {
                    "name": "bet",
                    "id": 2
                }
            ]
        );
    });

    test("troca o altar server escalado em uma missa.", () => {
        altarServerWeeklySchedule.assignToMass({name: "alef", id: 1 }, 1, new DateCustom(7,1,2025), "19:00", "matriz");
        altarServerWeeklySchedule.assignToMass({name: "fghrty", id: 2 }, 1, new DateCustom(7,1,2025), "19:00", "matriz");

        expect(massWeeklySchedule.getScheduledMass(new DateCustom(7,1,2025), "19:00", "matriz")?.getAllAltarServers()).toEqual(
            [{"name": "fghrty", "id": 2}]
        );

    });


})