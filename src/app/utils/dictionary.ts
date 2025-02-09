
export class Dictionary<K extends string | number | symbol, V> {

    private readonly data: Record<K, V>;

    constructor(obj: unknown) {
        this.data = obj as Record<K, V>;
    }

    public getKeys(): K[] {
        return Object.keys(this.data) as K[];
    }

    public getValues(): V[] {
        return Object.values(this.data);
    }

    public getAll(): V[] {
        const array: V[] = [];
        for (const value of Object.keys(this.data)) {
            array.push(this.data[value as K]);
        }
        return array;
    }

    public get(key: K): V | undefined {
        return this.data[key];
    }

    public set(key: K, value: V): void {
        this.data[key] = value;
    }

    public delete(key: K): void {
        delete this.data[key];
    }
}



