import Mass from "../core/entities/Mass";
import DateCustom from "../core/types/DateCustom";

describe('Mass', () => {

    let mass: Mass;
    beforeEach(() => {
        mass = Mass.create(new DateCustom(1,1,2025), "19:00", "matriz", "", 4);
    })

    test("adiciona altar server no slot 1 que está vazio", () => {
        mass.assignAltarServer({name: "alef", id: 1}, 1);
        expect(mass.getAltarServer(1)).toEqual(
            {"name": "alef", "id": 1}
        );
    });

    test("não pode adicionar o mesmo altar server em slots diferentes", () => {
        mass.assignAltarServer({name: "alef", id: 1}, 1);
        mass.assignAltarServer({name: "alef", id: 1}, 2);
        expect(mass.getAllAltarServers()).toEqual(
            [
                {
                    "id": 1,
                    "name": "alef"
                }
            ]
        );
    });

    test("trocar o altar server no slot 1", () => {
        mass.assignAltarServer({name: "alef", id: 1}, 1);
        mass.assignAltarServer({name: "erds", id: 2}, 1);
        expect(mass.getAllAltarServers()).toEqual(
            [
                {
                    "id": 2,
                    "name": "erds"
                }
            ]
        );
    });

    test("exibe todos os altar server da missa", () => {
        mass.assignAltarServer({name: "alef", id: 1}, 1);
        mass.assignAltarServer({name: "sdlfkdfo", id: 2}, 2);
        mass.assignAltarServer({name: "iuer", id: 3}, 3);
        mass.assignAltarServer({name: "gds", id: 4}, 4);
        expect(mass.getAllAltarServers()).toEqual(
            [
                {
                    "id": 1,
                    "name": "alef"
                },
                {
                    "id": 2,
                    "name": "sdlfkdfo"
                },
                {
                    "id": 3,
                    "name": "iuer"
                },
                {
                    "id": 4,
                    "name": "gds"
                }
            ]
        );
    });

    test("remove altar server da missa", () => {
        mass.assignAltarServer({name: "alef", id: 1}, 1);
        mass.cancelAssignAltarServer(1);
        expect(mass.getAltarServer(1)).toEqual(undefined);
    });

    test("não remove altar server de slot vazio", () => {
        mass.assignAltarServer({name: "alef", id: 1}, 1);
        mass.cancelAssignAltarServer(2);
        expect(mass.getAltarServer(2)).toEqual(undefined);
    });

    test("obtém altar server do slot 1 da missa que está ocupado", () => {
        mass.assignAltarServer({name: "alef", id: 1}, 1);
        expect(mass.getAltarServer(1)).toEqual(
            {id: 1, name: "alef"}
        );
    });

    test("não obtém nenhum altar server quando slot da missa que está desocupado", () => {
        mass.assignAltarServer({name: "alef", id: 1}, 1);
        expect(mass.getAltarServer(2)).toEqual(undefined);
    });


    test("verdadeiro se a data 1/1/2025, 19:00, matriz correspondem ao objeto missa", () => {
        expect(mass.isMatch(new DateCustom(1,1,2025), "19:00", "matriz")).toEqual(true);
    })

    test("falso se a data 2/1/2025, 19:00, matriz não correspondem ao objeto missa", () => {
        expect(mass.isMatch(new DateCustom(2,1,2025), "19:00", "matriz")).toEqual(false);
    })

    test("falso se a data 1/1/2025, 17:00, matriz não correspondem ao objeto missa", () => {
        expect(mass.isMatch(new DateCustom(1,1,2025), "17:00", "matriz")).toEqual(false);
    })

    test("falso se a data 1/1/2025, 19:00, capela não correspondem ao objeto missa", () => {
        expect(mass.isMatch(new DateCustom(1,1,2025), "19:00", "capela")).toEqual(false);
    })

    //more tests



})