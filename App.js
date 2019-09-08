class App {
    constructor(){
        this.forms = 0;
        this.stacks = [];
        this.queues = [];
        this.trees = [];
    }

    static createLayout(names, parentNode, app){
        drawWrapper();
        drawContainer(names, parentNode);
        drawButton(names, app);
    };

    static createFormFooter(id, type){
        drawCloseButton(id);
        drawContentArea(id);
        drawInput(id);
        drawPlusButton(id, type);
        drawMinusButton(id, type)
    };

    createStackForm(parentNode){
        this.forms = this.forms + 1;
        const stackId = this.forms;
        drawForm(parentNode, stackId);
        App.createFormFooter(stackId, 'stack');
        const stack = new Stack(stackId);
        this.stacks.push(stack);
        console.log(this.stacks);

        const stackView = document.getElementById(`content-${stackId}`);

        function onPushNode(value) {
            StackNodeUI.createNodeUI(stackView, value);
        }
        stack.on('pushStackNode', onPushNode);

        function onPopNode() {
            StackNodeUI.removeStackNodeUI(stackView);
        }
        stack.on('popStackNode', onPopNode)
    }
// создание форм очереди
    createQueueForm(parentNode){
        this.forms = this.forms + 1;
        const queueId = this.forms;
        drawForm(parentNode, queueId);
        App.createFormFooter(queueId, 'queue');
        const queue = new Queue(queueId);
        this.queues.push(queue);
        console.log(this.queues);

        const queueView = document.getElementById(`content-${queueId}`);

        function onPushQueueNode(value) {
            StackNodeUI.createNodeUI(queueView, value);
        }
        queue.on('pushQueueNode', onPushQueueNode);

        function onPopNode() {
            StackNodeUI.removeQueueNodeUI(queueView);
        }
        queue.on('shiftQueueNode', onPopNode)
    }

    pushToStack(id, value){
        this.stacks.map((el ) => {
            el.id === id ? el.push(value) : null
        });
    };

    popFromStack(id){
        this.stacks.map((el) => {
            el.id === id &&  el.pop();
        });
    }

    pushToQueue(id, value){
        this.queues.map((el ) => {
            el.id === id ? el.push(value) : null
        });
    };

    shiftFromStack(id){
        this.queues.map((el) => {
            el.id === id && el.shift();
        });
    }
}



