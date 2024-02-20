class Dispatcher {
    constructor() {
        this.callbacks = {};
    }

    register(callback) {
        const id = Date.now() + Math.random();
        this.callbacks[id] = callback;
        return id;
    }

    dispatch(action) {
        Object.keys(this.callbacks).forEach((id) => {
            this.callbacks[id](action);
        });
    }
    unregister(id) {
        delete this.callbacks[id];
    }
}

const dispatcher = new Dispatcher();
export default dispatcher;
