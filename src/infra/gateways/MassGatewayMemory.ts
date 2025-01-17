import { DaysWeek } from "../../enum/DaysWeek.enum";
import MassGateway, {Mass, MassesByDay} from "./MassGateway";

export class MassGatewayMemory implements MassGateway {

    readonly massesByDay: MassesByDay[];

    constructor() {
        this.massesByDay = [
            {
                day: DaysWeek.DOMINGO, masses: [
                    { time: "8:00", local: "matriz", vacancies: 8, description: "" },
                    { time: "17:00", local: "matriz", vacancies: 8, description: "" }
                ]
            },
            {
                day: DaysWeek.SEGUNDA, masses: []
            },
            {
                day: DaysWeek.TERCA, masses: [
                    { time: "19:00", local: "matriz", vacancies: 4, description: "" }
                ]
            },
            {
                day: DaysWeek.QUARTA, masses: [
                    { time: "19:00", local: "matriz", vacancies: 4, description: "" }
                ]
            },
            {
                day: DaysWeek.QUINTA, masses: [
                    { time: "19:00", local: "matriz", vacancies: 4, description: "" },
                    { time: "19:00", local: "capela", vacancies: 4, description: "" }
                ]
            },
            {
                day: DaysWeek.SEXTA, masses: [
                    { time: "19:00", local: "matriz", vacancies: 4, description: "" }
                ]
            },
            {
                day: DaysWeek.SABADO, masses: [
                    { time: "17:00", local: "capela", vacancies: 4, description: "" },
                    { time: "19:00", local: "matriz", vacancies: 4, description: "" }
                ]
            },
        ];
    }

    public getByDay(dayWeek: DaysWeek): Promise<Mass[]> {
        if (dayWeek.toUpperCase() !== DaysWeek.DOMINGO && dayWeek.toUpperCase() !== DaysWeek.QUINTA && dayWeek.toUpperCase() !== DaysWeek.SEXTA && dayWeek.toUpperCase() !== DaysWeek.SEGUNDA
            && dayWeek.toUpperCase() !== DaysWeek.SABADO && dayWeek.toUpperCase() !== DaysWeek.TERCA && dayWeek.toUpperCase() !== DaysWeek.QUARTA) {
            throw new Error("dia inválido");
        }

        let masses: Mass[] = [];
        this.massesByDay.forEach(massByDay => {
            if (massByDay.day === dayWeek.toUpperCase()) {
                masses = massByDay.masses;
            }
        })
        return Promise.resolve(masses);
    }

    public getAll(): Promise<MassesByDay[]> {
        return Promise.resolve(this.massesByDay);
    }

}