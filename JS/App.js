class App {
    constructor(){
        this.forms = 0;
        this.stacks = [];
        this.queues = [];
        this.trees = [];
    }

    static createLayout(names, parentNode, app){
        drawWrapper();
        drawContainers(names, parentNode);
        drawButtons(names, app);
    };
//создание форм стэка
    createStackForm(parentNode){
        this.forms = this.forms + 1;
        const stackId = this.forms;
        drawForm(parentNode, stackId, 'stack');
        const stack = new Stack(stackId);
        this.stacks.push(stack);

        const stackView = document.getElementById(`content-${stackId}`);

        function onPushNode(value) {
            NodeUI.createStackNodeUI(stackView, value);
        }
        stack.on('pushStackNode', onPushNode);

        function onPopNode() {
            NodeUI.removeStackNodeUI(stackView);
        }
        stack.on('popStackNode', onPopNode)
    }
// создание форм очереди
    createQueueForm(parentNode){
        this.forms = this.forms + 1;
        const queueId = this.forms;
        drawForm(parentNode, queueId, 'queue');
        const queue = new Queue(queueId);
        this.queues.push(queue);

        const queueView = document.getElementById(`content-${queueId}`);

        function onPushQueueNode(value) {
            NodeUI.createStackNodeUI(queueView, value);
        }
        queue.on('pushQueueNode', onPushQueueNode);

        function onPopNode() {
            NodeUI.removeQueueNodeUI(queueView);
        }
        queue.on('shiftQueueNode', onPopNode)
    }

    createTreeForm(parentNode){
        this.forms = this.forms + 1;
        const treeId = this.forms;
        drawForm(parentNode, treeId, 'tree');
        const tree = new BinarySearchTree(treeId);
        this.trees.push(tree);
        const trees = this.trees;

        const treeView = document.getElementById(`content-${treeId}`);

        function onNewTreeNode() {
            NodeUI.addTreeNodeUI(treeView, trees, treeId);
        }
        tree.on('newTreeNode', onNewTreeNode);

        function onRemoveTreeNode() {
            NodeUI.removeTreeNodeUI(treeView, trees, treeId);
        }
        tree.on('removeTreeNode', onRemoveTreeNode)


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

    addToTree(id, value){
        this.trees.map(el => {
            el.id === id && el.insert(value);
        })
    }

    removeFromTree(id, value){
        this.trees.map(el => {
            el.id === id && el.remove(value)
        })
    }
}



