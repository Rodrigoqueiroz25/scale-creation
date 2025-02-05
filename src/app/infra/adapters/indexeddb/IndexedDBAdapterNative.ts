import IndexedDBAdapter from "./IndexedDBAdapter";


export default class IndexedDBAdapterNative<T> implements IndexedDBAdapter<T> {

    private db: IDBDatabase | null = null;

    constructor(private dbName: string, private version: number, private tableName: string) {
    }

    private openConnection(): Promise<IDBDatabase> {
        return new Promise((resolve, reject) => {
            let openRequest = indexedDB.open(this.dbName, this.version);

            openRequest.onerror = (event: Event) => {
                reject(`Failed to open database ${this.dbName}`);
            };

            openRequest.onsuccess = (event: any) => {
                let db: IDBDatabase = event.target.result;
                resolve(db);
            };

            // If the database doesn't exist or its version is less than current, this event will be triggered
            openRequest.onupgradeneeded = (event: any) => {
                let db: IDBDatabase = event.target.result;
                if (!db.objectStoreNames.contains(this.tableName)) {
                    db.createObjectStore(this.tableName, {keyPath: 'id'});
                }
            };
        });
    }

    public async get(id: number): Promise<T> {
        let store = await this.getObjectStore('readonly');
        return this.storeOperation<T>(store, (store) => store.get(id));
    }

    public async put(data: T): Promise<void> {
        let store = await this.getObjectStore('readwrite');
        return this.storeOperation<void>(store, (store) => store.put(data));
    }


    private storeOperation<R>(store: IDBObjectStore, operation: (store: IDBObjectStore) => IDBRequest): Promise<R>{
        return new Promise<R>((resolve, reject) => {
            const request = operation(store);
            request.onsuccess = (event: any) => {
                this.closeConnection();
                resolve(event.target.result);
            }
            request.onerror = (event: any) => {
                this.closeConnection();
                reject(`Failed to fetch data from ${this.tableName}`);
            }
        })
    }

    private closeConnection(): void {
        if (this.db) {
            this.db.close();
            this.db = null;
        }
    }

    private async getObjectStore(mode: IDBTransactionMode): Promise<IDBObjectStore> {
        try {
            this.db = await this.openConnection();
            const transaction = this.db.transaction(this.tableName, mode);
            return transaction.objectStore(this.tableName);
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Erro desconhecido';
            console.error('Falha ao obter object store:', errorMessage);
            throw new Error(`Falha ao acessar o banco de dados: ${errorMessage}`);
        }
    }

}