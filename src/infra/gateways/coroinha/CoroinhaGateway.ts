import { Option } from "../../../@types/option";

export default interface CoroinhaGateway{
    getAll(): Promise<Option[]>;
    getByName(name: string): Promise<any>;
}