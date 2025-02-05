
export default interface IndexedDBAdapter<T> {
    put(data: T): Promise<void>;
    get(id: number): Promise<T|undefined>;
}