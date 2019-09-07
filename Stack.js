const Stack = (function(EventEmitterClass) {
    class Stack extends EventEmitterClass {
        constructor(id) {
            super();
            this._values = [];
            this.id = id ? id : '3123';
        }

        push(value) {
            this._values.push(value);
            this.emit('pushStackNode', value)
        }

        pop() {
            const value = this.stack.pop();
            this.emit('popStackNode', value);
        }
    }

    return Stack;
})(EventEmitter);

const StackNodeUI = (function (docObj) {

    class StackNodeUI {
        static createNodeUI(...props) {

            return new StackNodeUI(...props);
        }

        static deleteNodeUI(id){
            const container = document.getElementById(`content-${id}`);
            container.lastChild.remove();
        }

        constructor(parentNode, value) {
            this.nodeEl = docObj.createElement('div');
            this.nodeEl.className = 'stack-node-ui';
            this.nodeEl.innerText = value;
            parentNode.append(this.nodeEl);
        }
    }

    return StackNodeUI;
})(document);
