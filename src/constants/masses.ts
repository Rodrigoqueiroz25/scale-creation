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

export const daysMasses: { [index: number]: Mass[] } = {
    0: [
        mass(morning, matriz, 8, 'Missa do x domingo'),
        mass(afternung, matriz, 8, 'Missa do x domingo'),
    ],
    2: [mass(night, matriz, 4, 'Missa semanal')],
    3: [mass(night, matriz, 4, 'Missa semanal')],
    4: [mass(night, matriz, 4, 'Missa semanal')],
    5: [mass(night, matriz, 4, 'Missa semanal')],
    6: [
        mass(afternung, matriz, 4, 'Missa semanal'), 
        mass(night, capel, 4, 'Missa semanal')
    ]
};

// export const daysMasses: Mass[][] = [
//     [
//         mass('08:00', matriz, 8, 'Missa do x domingo'),
//         mass('17:00', matriz, 8, 'Missa do x domingo'),
//         mass('19:00', matriz, 8, 'Missa do x domingo')
//     ],
//     [mass('19:00', matriz, 4, 'Missa semanal')],
//     [mass('19:00', matriz, 4, 'Missa semanal')],
//     [mass('19:00', matriz, 4, 'Missa semanal')],
//     [mass('19:00', matriz, 4, 'Missa semanal')],
//     [
//         mass('17:00', matriz, 4, 'Missa semanal'), 
//         mass('19:00', capel, 4, 'Missa semanal')
//     ]
// ];