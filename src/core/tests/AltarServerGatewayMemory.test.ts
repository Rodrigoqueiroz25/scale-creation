
import AltarServerMemoryGateway from "../infra/gateways/altar-server/altar-server-memory.gateway";
import IAltarServerGateway from "../domain/gateways/altar-server.gateway";
import {altarServersParoch} from "../../shared/data/altarServers";

let altarServers: IAltarServerGateway;

describe("Tests with object altarServersParoch", () => {

    beforeAll(() => {
        altarServers = new AltarServerMemoryGateway(altarServersParoch);
    })

    test("Obtém os servidores do altar do objeto altarServersParoch", () => {
        // eslint-disable-next-line jest/valid-expect-in-promise
        altarServers.getAll().then(altarServers => {
            expect(altarServers).toEqual([
                { name: 'Arthur', id: 0 },
                { name: 'Barbara', id: 1 },
                { name: 'Beatriz', id: 2 },
                { name: 'João Paulo', id: 3 },
                { name: 'João Vitor', id: 4 },
                { name: 'Júlia', id: 5 },
                { name: 'Laura', id: 6 },
                { name: 'Luan', id: 7 },
                { name: 'Luiz Miguel', id: 8 },
                { name: 'Maria Alice', id: 9 },
                { name: 'Maria Clara', id: 10 },
                { name: 'Milena', id: 11 },
                { name: 'Miguel Santos', id: 12 },
                { name: 'Nicolas', id: 13 },
                { name: 'Pedro', id: 14 },
                { name: 'Rebeca', id: 15 },
                { name: 'Richard', id: 16 },
                { name: 'Rodrigo', id: 17 },
                { name: 'Raphael', id: 18 },
                { name: 'Samuel', id: 19 },
                { name: 'Sofia', id: 20 },
                { name: 'Vinicius', id: 21 },
                { name: 'Isadora', id: 22 }
            ]);
        })
    })


})