
import { Option } from "../../../@types/option";
import CoroinhaGateway from "./CoroinhaGateway";

/*- nome
- disponibilidade
- status(coroinha ou cerimoniario)
- id
*/

export default class CoroinhaGatewayMemory implements CoroinhaGateway {

    private coroinhas: any[];

    constructor() {
        this.coroinhas = [
            {  name: 'Arthur', id: 0 },
            {  name: 'Barbara', id: 1 },
            {  name: 'Beatriz', id: 2 },
            {  name: 'João Paulo', id: 3 },
            {  name: 'João Vitor', id: 4 },
            {  name: 'Júlia', id: 5 },
            {  name: 'Laura', id: 6 },
            {  name: 'Luan', id: 7 },
            {  name: 'Luiz Miguel', id: 8 },
            {  name: 'Maria Alice', id: 9 },
            {  name: 'Maria Clara', id: 10 },
            {  name: 'Milena', id: 11 },
            {  name: 'Miguel Santos', id: 12 },
            {  name: 'Nicolas', id: 13 },
            {  name: 'Pedro', id: 14 },
            {  name: 'Rebeca', id: 15 },
            {  name: 'Richard', id: 16 },
            {  name: 'Rodrigo', id: 17 },
            {  name: 'Raphael', id: 18 },
            {  name: 'Samuel', id: 19 },
            {  name: 'Sofia', id: 20 },
        ];
    }

    getAll(): Promise<Option[]> {
        return Promise.resolve(this.coroinhas).then();
    }

    getByName(name: string): Promise<any> {
        throw new Error("Method not implemented.");
    }

}