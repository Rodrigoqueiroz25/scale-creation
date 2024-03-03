import { DaysWeek } from "./calendar";

type Mass = {
    time: string;
    local: string;
    numVacancies: number;
}

type DayMass = {
    masses: Mass[];
}

const morning = '08:00';
const afternung = '17:00';
const night = '19:00';
const matriz = 'Matriz';
const capel = "Capela Nossa Senhora Aparecida";


function mass(time: string, local: string, numVacancies: number): Mass {
    return {
        time: time,
        local: local,
        numVacancies: numVacancies
    }
}

export const daysMasses: {[ index: string]: DayMass} = { 
    domingo: {
        masses: [
            mass('08:00', matriz, 8),
            mass('17:00', matriz, 8),
            mass('19:00', matriz, 8)
        ]
    },
    terca: {
        masses: [mass('19:00', matriz, 4)]
    },
    quarta: {
        masses: [mass('19:00', matriz, 4)]
    },
    quinta: {
        masses: [mass('19:00', matriz, 4)]
    },
    sexta: {
        masses: [mass('19:00', matriz, 4)]
    },
    sabado: {
        masses: [mass('19:00', matriz, 4), mass('17:00', capel, 4)]
    },
};
