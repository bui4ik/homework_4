class App {
    constructor(){
        this.forms = 0;
        this.stacks = [];
    }

    static createWrapper(){
        drawWrapper()
    };

    static createContainers(names, parentNode){
        drawContainer(names, parentNode)
    };

    static createButtons(names, app){
        drawButton(names, app)
    };

    static createFormFooter(id){
        drawCloseButton(id);
        drawContentArea(id);
        drawInput(id);
        drawPlusButton(id);
        drawMinusButton(id)
    };

    createForm(parentNode){
        this.forms = this.forms + 1;
        const stackId = this.forms;
        drawForm(parentNode, stackId);
        App.createFormFooter(stackId);
        const stack = new MyStack(stackId);
        this.stacks.push(stack);
        console.log(this.stacks);
        const stackView = document.getElementById(`content-${stackId}`);
        function onPushNode(value) {
            StackNodeUI.createNodeUI(stackView, value);
        }
        stack.on('pushStackNode', onPushNode);
        function onPopNode(stackId) {
            StackNodeUI.createNodeUI(stackView, stackId);
        }
        stack.on('popStackNode', onPopNode)
    }

    pushToStack(id, value){
        this.stacks.map((el ) => {
            el.id === id ? el.push(value) : null
        });
    };

    popFromStack(id){
        console.log('yes');
        this.stacks.map((el, index) => {
            el.id === id ? el.pop() : null
        });
    }
}

class MyStack extends EventEmitter{
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



