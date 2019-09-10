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
        drawForm(parentNode, queueId, 'queue');
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

    createTreeForm(parentNode){
        this.forms = this.forms + 1;
        const treeId = this.forms;
        drawForm(parentNode, treeId, 'tree');
        const tree = new BinarySearchTree(treeId);
        this.trees.push(tree);
        console.log(this.trees);
        console.log(this.trees[0].root);

        const treeView = document.getElementById(`content-${treeId}`);

        function onNewTreeNode(value) {
            StackNodeUI.addTreeNodeUI(treeView, value);
        }
        tree.on('newTreeNode', onNewTreeNode);

        function onRemoveTreeNode(value) {
            StackNodeUI.removeStackNodeUI(treeView, value);
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
            console.log(el);
            const breadthFirst = function (node) {
                function bf(queue) {
                    let newQueue = [];
                    queue.forEach(function (node) {
                        console.log(node.data);
                        node.left && newQueue.push(node.left);
                        node.right && newQueue.push(node.right);
                    });
                    newQueue.length && bf(newQueue);
                }
                bf([node]);
            };

            breadthFirst(el.root)
        })
    }

    removeFromTree(id, value){
        this.trees.map(el => {
            el.id === id && el.remove(value)
        })
    }
}



