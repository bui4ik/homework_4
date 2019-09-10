
let depthFirth = function (node) {
	if (node) {
		console.log(`${i} - ${node.data}`);
		depthFirth(node.left);
		depthFirth(node.right);
	}
};

depthFirth(el.root);

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

breadthFirst(el.root);
