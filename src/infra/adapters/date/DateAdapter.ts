
export default interface DateAdaper{
    getYear(): number;
    isLeapYear(year: number): boolean;
    getDayWeek(): string;
    getDayNumber(): number;
    isSunday(): boolean;
    isMonday(): boolean;
    isBusinessDay(): boolean;
    //getMonthName();
    //getMonthNumber();

}