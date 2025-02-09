import DateDTO from "./DateDTO";
import AltarServerDTO from "./AltarServerDTO";

export default interface MassDTO {
    date: DateDTO;
    time: string;
    local: string;
    description: string;
    numVacancies: number;
    altarServers: AltarServerDTO;
}