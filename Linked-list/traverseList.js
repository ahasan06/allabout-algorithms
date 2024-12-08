class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    append(data){
        const newNode = new Node(data)

        if (this.length===0) {
            this.head = newNode
            this.tail = newNode
          
        }
        else{
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
    }

    traverse (){
        let str = ''
        let currentNode = this.head
        
        while (currentNode) {
            console.log(currentNode.data);
            str+=currentNode.data
            currentNode = currentNode.next
        }
        console.log(str);
        
    }
    recursivetraverse(node) {
        if (!node) {
            return;
        }
        console.log(node.data);
        this.recursivetraverse(node.next); 
    }
}

const list = new LinkedList()

list.append(10);
list.append(20);
list.append(130);
list.traverse()
list.recursivetraverse(list.head)
console.log(list);


