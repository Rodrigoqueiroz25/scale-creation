import DateDTO from "../dto/DateDTO";
import DateCustom from "../../domain/entities/DateCustom";

export default class DateMapper{

    public static toDTO(input: DateCustom): DateDTO {
        return {
            day: input.getDayNumber(),
            month: input.getMonth(),
            year: input.getYear()
        }
    }

    public static toEntity(input: DateDTO): DateCustom {
        return DateCustom.create(input.day, input.month, input.year);
    }
}