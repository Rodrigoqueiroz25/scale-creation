
import { Option } from "../../../../@types/option";
import AltarServersGateway from "./AltarServersGateway";

export default class AltarServersGatewayMemory implements AltarServersGateway {

    constructor(private readonly altarServers: Option[]) {
    }

    public getAll(): Promise<Option[]> {
        return Promise.resolve(this.altarServers);
    }

}