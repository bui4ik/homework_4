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
App.createLayout(['stack', 'queue','tree'], 'wrapper', app);



