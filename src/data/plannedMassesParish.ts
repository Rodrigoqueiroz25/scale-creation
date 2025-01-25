import {plannedMass, PlannedMassRecord} from "../infra/gateways/plannedMass/PlannedMassGateway";
import {DaysWeek} from "../enum/DaysWeek.enum";

export const plannedMassesParish: plannedMass[] = [
    {dayWeek: DaysWeek.DOMINGO, time: "08:00", local: "matriz", vacancies: 8, description: ""},
    {dayWeek: DaysWeek.DOMINGO, time: "17:00", local: "matriz", vacancies: 8, description: ""},
    {dayWeek: DaysWeek.TERCA, time: "19:00", local: "matriz", vacancies: 4, description: ""},
    {dayWeek: DaysWeek.QUARTA, time: "19:00", local: "matriz", vacancies: 4, description: ""},
    {dayWeek: DaysWeek.QUINTA, time: "19:00", local: "matriz", vacancies: 4, description: ""},
    {dayWeek: DaysWeek.QUINTA, time: "19:00", local: "capela", vacancies: 4, description: ""},
    {dayWeek: DaysWeek.SEXTA, time: "19:00", local: "matriz", vacancies: 4, description: ""},
    {dayWeek: DaysWeek.SABADO, time: "17:00", local: "capela", vacancies: 4, description: ""},
    {dayWeek: DaysWeek.SABADO, time: "19:00", local: "matriz", vacancies: 4, description: ""}
]


export const plannedMasses: PlannedMassRecord = {
    [DaysWeek.DOMINGO]: [
        {time: "08:00", local: "matriz", vacancies: 8, description: ""},
        {time: "17:00", local: "matriz", vacancies: 8, description: ""}
    ],
    [DaysWeek.SEGUNDA]: [],
    [DaysWeek.TERCA]: [
        {time: "19:00", local: "matriz", vacancies: 4, description: ""}
    ],
    [DaysWeek.QUARTA]:
        [{time: "19:00", local: "matriz", vacancies: 4, description: ""}
        ],
    [DaysWeek.QUINTA]: [
        {time: "19:00", local: "matriz", vacancies: 4, description: ""},
        {time: "19:00", local: "capela", vacancies: 4, description: ""}
    ],
    [DaysWeek.SEXTA]: [
        {time: "19:00", local: "matriz", vacancies: 4, description: ""}
    ],
    [DaysWeek.SABADO]: [
        {time: "17:00", local: "capela", vacancies: 4, description: ""},
        {time: "19:00", local: "matriz", vacancies: 4, description: ""}
    ]
}