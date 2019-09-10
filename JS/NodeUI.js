// отрисовка нод в формах
const NodeUI = (function (docObj) {

	class NodeUI {

		static createStackNodeUI(parentNode, value) {
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

		static addTreeNodeUI(parentNode, tree, id){
			while (parentNode.firstChild) {
				parentNode.removeChild(parentNode.firstChild);
			}
			tree.map(el => el.id === id && renderTree(el.root, parentNode))
		}

		static removeTreeNodeUI(parentNode, tree, id){
			console.log('www');
			while (parentNode.firstChild) {
				parentNode.removeChild(parentNode.firstChild);
			}
			tree.map(el => el.id === id && renderTree(el.root, parentNode))
		}
	}

	return NodeUI;
})(document);
