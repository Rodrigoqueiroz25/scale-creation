import DateDTO from "./date-dto";
import AltarServerRecordDTO from "./altar-server-record-DTO";

export default interface MassDTO {
    date: DateDTO;
    time: string;
    local: string;
    description: string;
    numVacancies: number;
    altarServers: AltarServerRecordDTO;
}