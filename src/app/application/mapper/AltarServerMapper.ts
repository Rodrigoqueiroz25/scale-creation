import AltarServerDTO from "../dto/AltarServerDTO";
import {AltarServerRecord} from "../../domain/entities/AltarServerRecord";

export default class AltarServerMapper {

    public static toDTO(altarServer: AltarServerRecord): AltarServerDTO {
        return altarServer["data"];
    }

    public static toEntity(altarServer: AltarServerDTO): AltarServerRecord {
        return AltarServerRecord.restore(altarServer);
    }

}