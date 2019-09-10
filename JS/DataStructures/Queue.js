class Queue extends EventEmitter{
	constructor(id){
		super();
		this._values = [];
		this.id = id;
	}

	push(value) {
		this._values.push(value);
		this.emit('pushQueueNode', value)
	}

	shift() {
		const value = this._values.shift();
		this.emit('shiftQueueNode', value);
	}
}