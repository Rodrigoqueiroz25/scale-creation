
import {AltarServer} from "../models/altar-server";

export default interface IAltarServerGateway {
    getAll(): Promise<AltarServer[]>;
}
