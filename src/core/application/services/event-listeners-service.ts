
export default class EventListenersService {

    private eventListeners: Map<string, Function[]> = new Map();


    private unsubscribe(event: string, callback: Function) {
        const listeners = this.eventListeners.get(event);
        if (listeners) {
            const index = listeners.indexOf(callback);
            listeners.splice(index, 1);
        }
    }

    public subscribe(event: string, callback: Function)  {
        if (!this.eventListeners.has(event)) {
            this.eventListeners.set(event, []);
        }

        this.eventListeners.get(event)?.push(callback);

        return () => {
            const listeners = this.eventListeners.get(event);
            if (listeners) {
                const index = listeners.indexOf(callback);
                listeners.splice(index, 1);
            }
        };
    }


    public publish(event: string, data?: any) {
        const listeners = this.eventListeners.get(event);
        if (listeners) {
            listeners.forEach(listener => listener(data));
        }
    }

}