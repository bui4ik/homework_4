class Stack extends EventEmitter{
    constructor(id){
        super();
        this._values = [];
        this.id = id;
    }

    push(value) {
        this._values.push(value);
        this.emit('pushStackNode', value)
    }

    pop() {
        const value = this._values.pop();
        this.emit('popStackNode', value);
    }
}
