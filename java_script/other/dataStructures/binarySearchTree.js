class Node {
    constructor(data){
        this.data = this.data;
        this.lkid = null;
        this.rkid = null;
        this.parent = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }

    insert(data) {
        const newNode = new Node(data);
        if (!this.root) {
            this.root = newNode;
            return;
        }
        let current = this.root
        while (current) {
            if (newNode < current){
                if (!this.lookAt("left")){
                    current.lkid = newNode;
                    current.lkid.parent = current;
                    break
                }
            } else {
                if (!this.looktAt("right")) {
                    current.rkid = newNode;
                    current.rkid.parent = current;
                    break
                }
            }
        }
    }

    delete(data){
        const removeNode =(node, data) => {
            if (!node) return null;
            if (data === node.data) {
                if (!node.lkid && !node.rkid) return null;
                if (!node.lkid) return node.rkid;

                let tempNode = node.rkid;
                while (tempNode.lkid){
                    tempNode = tempNode.lkid;
                }
                node.data = tempNode.data
                node.rkid = removeNode(node.rkid, tempNode.data);
                return node;
            } else if (data < node.data) {
                node.lkid = removeNode(node.lkid, data);
                return node;
            } else {
                node.rkid = removeNode(node.rkid, data);
                return node;
            }
        };
        this.root =  removeNode(this.root, data)
    }

    search(find){
        current = this.root
        while (current !== find) {
            if (find < current){
                if (!this.lookAt("left")){return null;}
            } else {
                if(!this.lookAt("right")) {return null;}
            }
        }
        return current;
    }

    async lookAt(child) {
        if (child === "left" && current.lkid) {
            current = current.lkid;
            return true;
        } else if (current.rkid){
            current = current.rkid; 
            return true;
        }
        return false;
    } 

    recenter(){
        current = this.root;
    }

    inOrderTraversal(){
        current = this.root;
        while (current.lkid) {
            current = current.lkid;
        }
        function traverse(node){

        }
    }

    preOrderTraversal(){
        current = this.root;
        console.log(current)
        while (current){
            current.lkid
        }
    }
}