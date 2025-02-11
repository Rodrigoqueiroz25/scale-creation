import WeeklyMassScheduleDTO from "../dto/WeeklyMassScheduleDTO";
import WeeklyMassSchedule from "../../domain/entities/WeeklyMassSchedule";
import MassMapper from "./MassMapper";

export default class WeeklyMassScheduleMapper {

    public static toDTO(weekSchedule: WeeklyMassSchedule): WeeklyMassScheduleDTO {
        return {
            id: weekSchedule.getId(),
            masses: weekSchedule.getScheduledMasses().map(mass  => MassMapper.toDTO(mass)),
        }
    }

    public static toEntity(weekSchedule: WeeklyMassScheduleDTO): WeeklyMassSchedule {
        return WeeklyMassSchedule.restore(weekSchedule.id, weekSchedule.masses.map(mass => MassMapper.toEntity(mass)));
    }

}