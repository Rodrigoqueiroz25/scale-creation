import WeeklyMassSchedule from "../domain/entities/WeeklyMassSchedule";
import WeeklyAltarServerMassAssignmentManager from "../application/usecases/WeeklyAltarServerMassAssignmentManager";
import {plannedMasses} from "../shared/data/plannedMassesParish";
import MonthFactory from "../domain/factories/MonthFactory";
import {NameMonths} from "../shared/enums/NameMonths.enum";
import Month from "../domain/entities/Month";
import DateCustom from "../domain/entities/DateCustom";
import AltarServerList from "../application/services/AltarServerList";
import {altarServersParoch} from "../shared/data/altarServers";
import Mass, {DateTimeLocal} from "../domain/entities/Mass";

describe("AltarServerList", () => {

    let altarServerList: AltarServerList;
    let weeklyMassSchedule: WeeklyMassSchedule;
    let altarServerMassAssigmnet: WeeklyAltarServerMassAssignmentManager;
    let datesMonth: Month;

    beforeEach(() => {
        datesMonth = MonthFactory.create(NameMonths.JANEIRO, new Date().getFullYear());
        weeklyMassSchedule = WeeklyMassSchedule.create(datesMonth.getWeek(2), plannedMasses);
        altarServerMassAssigmnet = new WeeklyAltarServerMassAssignmentManager(weeklyMassSchedule);
        altarServerList = new AltarServerList(altarServersParoch, weeklyMassSchedule);
    })

    test("retorna a lista completa de altar servers quando não tem ninguem alocado.", () => {
        const mass = Mass.create(new DateCustom(5,1,2025), "17:00", "matriz", "", 8);
        expect(altarServerList.getList(mass)).toEqual(
            [
                {
                    "id": 0,
                    "name": "Arthur"
                },
                {
                    "id": 1,
                    "name": "Barbara"
                },
                {
                    "id": 2,
                    "name": "Beatriz"
                },
                {
                    "id": 3,
                    "name": "João Paulo"
                },
                {
                    "id": 4,
                    "name": "João Vitor"
                },
                {
                    "id": 5,
                    "name": "Júlia"
                },
                {
                    "id": 6,
                    "name": "Laura"
                },
                {
                    "id": 7,
                    "name": "Luan"
                },
                {
                    "id": 8,
                    "name": "Luiz Miguel"
                },
                {
                    "id": 9,
                    "name": "Maria Alice"
                },
                {
                    "id": 10,
                    "name": "Maria Clara"
                },
                {
                    "id": 11,
                    "name": "Milena"
                },
                {
                    "id": 12,
                    "name": "Miguel Santos"
                },
                {
                    "id": 13,
                    "name": "Nicolas"
                },
                {
                    "id": 14,
                    "name": "Pedro"
                },
                {
                    "id": 15,
                    "name": "Rebeca"
                },
                {
                    "id": 16,
                    "name": "Richard"
                },
                {
                    "id": 17,
                    "name": "Rodrigo"
                },
                {
                    "id": 18,
                    "name": "Raphael"
                },
                {
                    "id": 19,
                    "name": "Samuel"
                },
                {
                    "id": 20,
                    "name": "Sofia"
                },
                {
                    "id": 21,
                    "name": "Vinicius"
                },
                {
                    "id": 22,
                    "name": "Isadora"
                }
            ]
        );
    })

    test("retorna a lista de altar servers sem arthur quando ele está alocado na terça e quero a lista para quarta.", () => {
        let massId: DateTimeLocal = {
            date: new DateCustom(7,1,2025),
            local: "19:00",
            time: "matriz"
        }
        let massId2: DateTimeLocal = {
            date: new DateCustom(8,1,2025),
            local: "19:00",
            time: "matriz"
        }
        altarServerMassAssigmnet.assignToMass({name: "Arthur", id: 0}, 1, massId);
        let mass = weeklyMassSchedule.getScheduledMass(massId2);
        if(mass)
            expect(altarServerList.getList(mass)).toEqual(true);
    })




})