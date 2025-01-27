
export default interface DateAdapter{
    getYear(): number;
    getDayWeek(): string;
    getDayNumber(): number;
    isSaturday(): boolean;
    getMonth(): number;
    getDayWeekId(): number;
}