import WeeklyMassSchedule from "../domain/entities/WeeklyMassSchedule";
import Mass from "../domain/entities/Mass";
import DateCustom from "../domain/entities/DateCustom";
import WeeklyMassScheduleRepositoryIDB from "../infra/repositories/WeeklyMassScheduleRepositoryIDB";
import * as inspector from "node:inspector";

describe("test", () => {

    let repository: WeeklyMassScheduleRepositoryIDB;
    let weekSchedule: WeeklyMassSchedule;
    let mass = Mass.create(new DateCustom(1, 1, 2025), "19:00", "Igreja", "Missa", 8);

    weekSchedule = new WeeklyMassSchedule([mass], 1);

    let idbAdapterMock = {
        get: jest.fn(),
        put: jest.fn()
    }

    beforeEach(() => {
        jest.clearAllMocks();
        repository = new WeeklyMassScheduleRepositoryIDB(idbAdapterMock);
    })

    describe("save", () => {

        it("save with success", async () => {
            idbAdapterMock.put.mockResolvedValue(undefined);
            const result = await repository.save(weekSchedule);
            expect(idbAdapterMock.put).toHaveBeenCalledWith(weekSchedule);
            expect(result).toEqual(undefined);
        })

        it("save with error", async () => {
            let consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation();
            idbAdapterMock.put.mockImplementation(() => {
                return Promise.reject(new Error("failed to update"));
            })
            await repository.save(weekSchedule);
            expect(consoleErrorSpy).toHaveBeenNthCalledWith(1, 'failed to update');
            expect(consoleErrorSpy).toHaveBeenNthCalledWith(2, 'Failed to save data');
            expect(consoleErrorSpy).toHaveBeenCalledTimes(2);
        })
    })

    describe("get", () => {

        it("get with success", async () => {
            let weekSchedulee: WeeklyMassSchedule;
            let mass = Mass.create(new DateCustom(1, 1, 2025), "19:00", "Igreja", "Missa", 8);
            mass.assignAltarServer({id: 1, name: "jose"}, 1);

            weekSchedulee = new WeeklyMassSchedule([mass], 1);

            idbAdapterMock.get.mockResolvedValue(weekSchedulee);
            const result = await repository.get(1);
            expect(idbAdapterMock.get).toHaveBeenCalledWith(1);
            expect(result).toEqual(weekSchedule);
        })

        it("save with error", async () => {
            let consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation();
            idbAdapterMock.get.mockImplementation(() => {
                return Promise.reject(new Error("failed to get data"));
            })
            await repository.get(1);
            expect(consoleErrorSpy).toHaveBeenNthCalledWith(1, 'failed to get data');
            expect(consoleErrorSpy).toHaveBeenNthCalledWith(2, 'Failed to get data');
            expect(consoleErrorSpy).toHaveBeenCalledTimes(2);
        })
    })

})
