class EventEmitter {
    constructor() {
        this.events = new Map();
    }

    subscribe(eventName, callback) {
        if (!this.events.has(eventName)) {
            this.events.set(eventName, []);
        }

        const listeners = this.events.get(eventName);
        listeners.push(callback);

        return {
            unsubscribe: () => {
                const index = listeners.indexOf(callback);
                if (index !== -1) {
                    listeners.splice(index, 1);
                }
                return undefined;
            }
        };
    }

    emit(eventName, args = []) {
        if (!this.events.has(eventName)) return [];

        const results = [];
        for (const callback of this.events.get(eventName)) {
            results.push(callback(...args));
        }
        return results;
    }
}
