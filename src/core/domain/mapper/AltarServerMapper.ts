import AltarServerRecordDTO from "../models/dto/altar-server-record-DTO";
import {AltarServerRecord} from "../entities/AltarServerRecord";

export default class AltarServerMapper {

    public static toDTO(altarServer: AltarServerRecord): AltarServerRecordDTO {
        return altarServer["data"];
    }

    public static toEntity(altarServer: AltarServerRecordDTO): AltarServerRecord {
        return AltarServerRecord.restore(altarServer);
    }

}