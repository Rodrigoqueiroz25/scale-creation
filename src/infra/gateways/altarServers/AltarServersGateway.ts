import { Option } from "../../../@types/option";

export default interface AltarServersGateway {
    getAll(): Promise<Option[]>;
    // getByName(name: string): Promise<any>;
}