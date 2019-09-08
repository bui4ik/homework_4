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

const StackNodeUI = (function (docObj) {

    class StackNodeUI {

        static createNodeUI(parentNode, value) {
            this.nodeEl = docObj.createElement('div');
            this.nodeEl.className = 'stack-node-ui';
            this.nodeEl.innerText = value;
            parentNode.append(this.nodeEl);
        }

        static removeStackNodeUI(parentNode) {
            parentNode.lastChild ? parentNode.removeChild(parentNode.lastChild) : console.log('nothing to delete')
        }

        static removeQueueNodeUI(parentNode) {
            parentNode.lastChild ? parentNode.removeChild(parentNode.firstChild) : console.log('nothing to delete')
        }
    }

    return StackNodeUI;
})(document);
