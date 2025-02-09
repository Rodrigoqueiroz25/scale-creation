import Mass from "../../domain/entities/Mass";
import MassDTO from "../dto/MassDTO";
import DateMapper from "./DateMapper";
import AltarServerMapper from "./AltarServerMapper";

export default class MassMapper {

    public static toDTO(mass: Mass): MassDTO {
        return {
            date: DateMapper.toDTO(mass.getDate()),
            time: mass.getTime(),
            local: mass.getLocal(),
            description: mass.getDescription(),
            numVacancies: mass.getNumVacancies(),
            altarServers: AltarServerMapper.toDTO(mass.getAltarServers())
        }
    }

    public static toEntity(mass: MassDTO): Mass {
        return Mass.restore(
            DateMapper.toEntity(mass.date),
            mass.time,
            mass.local,
            mass.description,
            mass.numVacancies,
            AltarServerMapper.toEntity(mass.altarServers)
        );
    }

}