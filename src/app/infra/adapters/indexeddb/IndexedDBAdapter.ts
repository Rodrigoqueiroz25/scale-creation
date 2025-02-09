
export default interface IndexedDBAdapter {
    put(data: any): Promise<void>;
    get(id: number): Promise<any|undefined>;
}