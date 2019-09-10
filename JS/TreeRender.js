const createListItem = (treeNode) => {
	if (!treeNode) {
		return;
	}

	let item, subTree;

	item = document.createElement('li');
	item.textContent = treeNode.data;

	subTree = createSubTreeForNode(treeNode);
	if (subTree) {
		item.appendChild(subTree);
	}

	return item;
};

const createSubTreeForNode = (treeNode) => {
	if (!treeNode.left && !treeNode.right) {
		return;
	}

	let list, item;

	list = document.createElement('ul');

	item = createListItem(treeNode.left);
	if (item) {
		list.appendChild(item);
	}

	item = createListItem(treeNode.right);
	if (item) {
		list.appendChild(item);
	}

	return list;
};

const renderTree = (treeNode, parentElement) => {
	parentElement = parentElement || document.getElementById("app");

	let rootList, item;

	rootList = document.createElement('ul');
	item     = createListItem(treeNode);
	if (item) {
		rootList.appendChild(item);
	}

	parentElement.appendChild(rootList);
};