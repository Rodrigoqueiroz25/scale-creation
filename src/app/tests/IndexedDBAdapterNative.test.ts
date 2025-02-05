
import IndexedDBAdapterNative from "../infra/adapters/indexeddb/IndexedDBAdapterNative";

describe('IndexedDBAdapterNative', () => {

    type T = {
        id: number;
        name: string;
    }

    let adapter: IndexedDBAdapterNative<T>;
    
   // Mock do IDBDatabase
    const mockDB = {
        objectStoreNames: {
            contains: jest.fn(),
        },
        createObjectStore: jest.fn(),
        transaction: jest.fn(),
        close: jest.fn()
    };

    beforeEach(() => {
        // Limpa todos os mocks antes de cada teste
        jest.clearAllMocks();
        adapter = new IndexedDBAdapterNative('testDB', 1, 'testTable');
    });

    describe('openConnection', () => {
        const mock = jest.fn();
        Object.defineProperty(global, 'indexedDB', {
            value: {
                open: mock
            },
        })

        it('deve abrir conexão com sucesso', async () => {
            mock.mockImplementation(() => {
                return {
                    set onsuccess(callback: any) {
                        callback({
                            target: {
                                result: mockDB
                            }
                        });
                    }
                };
            });
            await expect(adapter["openConnection"]()).resolves.toEqual(mockDB);
        });

        it('deve criar objectStore quando não existe', async () => {
            // 1. Configuração
            mockDB.objectStoreNames.contains.mockReturnValue(false);

            mock.mockImplementation(() => {
                return {
                    set onsuccess(callback: any) {
                        callback({
                            target: {
                                result: mockDB
                            }
                        });
                    },
                    set onupgradeneeded(callback: any) {
                        callback({
                            target: {
                                result: mockDB
                            }
                        })
                    }
                };
            });

            await adapter["openConnection"]();

            // 3. Verificação
            expect(mockDB.createObjectStore).toHaveBeenCalledWith('testTable', { keyPath: 'id' });
        });

        it('deve rejeitar quando ocorrer erro', async () => {
            mock.mockImplementation(() => {
                return {
                    set onerror(callback: any) {
                        callback(new Event('error'));
                    }
                };
            });

            // 3. Verificação
            await expect(adapter["openConnection"]()).rejects.toMatch('Failed to open database testDB');
        });
    });

    describe('save', () => {
        const mock = jest.fn();

        beforeEach(() => {
            jest.spyOn(adapter as any, 'openConnection').mockResolvedValue(mockDB);
            mockDB.transaction.mockReturnValue({
                objectStore: jest.fn().mockReturnValue({
                    put: mock,
                }),
            });
        });

        it('deve salvar dados com sucesso', async () => {
            mock.mockImplementation(() => {
                return {
                    set onsuccess(callback: any) {
                        callback({
                            target: {
                                result: undefined
                            }
                        })
                    }
                }
            })

            // 3. Execução
            const testData: T = { id: 1, name: 'test' };
            const result = adapter.put(testData);

            await result;

            // 4. Verificação
            expect(mock).toHaveBeenCalledWith(testData);
            expect(mockDB.close).toHaveBeenCalled();
        });

        it('retorna erro quando não consegue salvar dados com sucesso', async () => {
            mock.mockImplementation(() => {
                return {
                    set onerror(callback: any) {
                        callback(new Event('error'));
                    }
                }
            })

            // 3. Execução
            const testData: T = { id: 1, name: 'test' };

            await expect(adapter.put(testData)).rejects.toMatch('Failed to fetch data from testTable');
        });

    });

    describe('get', () => {
        const mock = jest.fn();

        beforeEach(() => {
            jest.spyOn(adapter as any, 'openConnection').mockResolvedValue(mockDB);
            mockDB.transaction.mockReturnValue({
                objectStore: jest.fn().mockReturnValue({
                    get: mock,
                }),
            });

            jest.mock('../domain/entities/WeeklyMassSchedule.ts');
        });

        it('deve retornar dados quando a busca for bem sucedida', async () => {
            // // Simula sucesso na operação get
            mock.mockImplementation(() => {
                return {
                    set onsuccess(callback: any) {
                        callback({
                            target: {
                                result: mockData
                            }
                        });
                    }
                };
            });
            const mockData = { id: 1, name: 'Test Data' };
            // Cria uma Promise para simular a operação assíncrona
            const promise = adapter.get(1);

            const result = await promise;
            
            expect(result).toEqual(mockData);
            expect(mock).toHaveBeenCalledWith(1);
            expect(mockDB.close).toHaveBeenCalled();
        });

        it('deve retornar erro quando a busca não for bem sucedida', async () => {
            // // Simula sucesso na operação get
            mock.mockImplementation(() => {
                return {
                    set onerror(callback: any) {
                        callback(new Event('error'));
                    }
                };
            });
            await expect(adapter.get(1)).rejects.toMatch('Failed to fetch data from testTable');
        });
    })
}); 