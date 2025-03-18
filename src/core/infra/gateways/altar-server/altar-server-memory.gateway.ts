
import IAltarServerGateway from "../../../domain/gateways/altar-server.gateway";
import {AltarServer} from "../../../domain/models/altar-server";

export default class AltarServerMemoryGateway implements IAltarServerGateway {

    constructor(private readonly altarServers: AltarServer[]) {
    }

    public getAll(): Promise<AltarServer[]> {
        return Promise.resolve(this.altarServers);
    }

}