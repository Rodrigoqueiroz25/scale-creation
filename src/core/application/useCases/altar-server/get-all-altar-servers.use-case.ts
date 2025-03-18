
import IAltarServerGateway from "../../../domain/gateways/altar-server.gateway";
import {AltarServer} from "../../../domain/models/altar-server";

export default class GetAllAltarServersUseCase {

    constructor(private altarServerGate: IAltarServerGateway) {
    }

    async exec(): Promise<AltarServer[]> {
        return this.altarServerGate.getAll();
    }
}