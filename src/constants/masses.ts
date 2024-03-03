import { DaysWeek } from "./calendar";

type Mass = {
    time: string;
    local: string;
    numVacancies: number;
    description: string;
}

const morning = '08:00';
const afternung = '17:00';
const night = '19:00';
const matriz = 'Matriz';
const capel = "Capela Nossa Senhora Aparecida";


function mass(time: string, local: string, numVacancies: number, description: string): Mass {
    return {
        time: time,
        local: local,
        numVacancies: numVacancies,
        description: description
    }
}

export const daysMasses: { [index: string]: Mass[] } = {
    'Domingo': [
        mass('08:00', matriz, 8, 'Missa do x domingo'),
        mass('17:00', matriz, 8, 'Missa do x domingo'),
        mass('19:00', matriz, 8, 'Missa do x domingo')
    ],
    'Terça-feira':[mass('19:00', matriz, 4, 'Missa semanal')],
    'Quarta-feira': [mass('19:00', matriz, 4, 'Missa semanal')],
    'Quinta-feira': [mass('19:00', matriz, 4, 'Missa semanal')],
    'Sexta-feira': [mass('19:00', matriz, 4, 'Missa semanal')],
    'Sabado': [
        mass('17:00', matriz, 4, 'Missa semanal'), 
        mass('19:00', capel, 4, 'Missa semanal')
    ]
};
