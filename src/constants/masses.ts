import { DaysWeek } from "./calendar";

type Mass = {
    time: string;
    local: string;
    numVacancies: number;
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

export const daysMasses: { [index: string]: Mass[] } = {
    'Domingo': [
        mass('08:00', matriz, 8),
        mass('17:00', matriz, 8),
        mass('19:00', matriz, 8)
    ],
    'Terça-feira':[mass('19:00', matriz, 4)],
    'Quarta-feira': [mass('19:00', matriz, 4)],
    'Quinta-feira': [mass('19:00', matriz, 4)],
    'Sexta-feira': [mass('19:00', matriz, 4)],
    'Sabado': [mass('17:00', matriz, 4), mass('19:00', capel, 4)]
};
