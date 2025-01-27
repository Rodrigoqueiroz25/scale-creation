import { Option } from "../../../../@types/option";

export default interface AltarServersGateway {
    getAll(): Promise<Option[]>;
}