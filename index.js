// const stackView = document.getElementById('stack-view');
// const stack = new Stack();
//
// function onPushNode(value) {
//     StackNodeUI.createNodeUI(stackView, value);
// }
//
// stack.on('pushStackNode', onPushNode);
// stack.push(1);
// stack.push(2);

const app = new App();

App.createWrapper();
App.createContainers(['stack', 'queue','tree'], 'wrapper');
App.createButtons(['stack','queue', 'tree'], app);

