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

    append(data) {
        const newNode = new Node(data)
        if (this.length === 0) {
            this.head = newNode
            this.tail = newNode
        }
        else {
            this.tail.next = newNode
            this.tail = newNode;
        }

        this.length++;
    }

    deleteNode(index) {
        if (index < 0 || index >= this.length) {
            console.log("Index out of range! Please enter a valid index.");
            return;
        }



        if (index === 0) {
            this.head = this.head.next
            if (this.length === 1) {
                this.tail = null
            }
            this.length--
            return
        }

        let currentNode = this.head
 
        for (let i = 0; i < index-1; i++) {
            currentNode = currentNode.next
        }
        if (index==this.length-1) { // tail delete
            currentNode.next = null
            this.tail = currentNode
        }
        else{ // any index delete 
            currentNode.next = currentNode.next.next
        }
    
        this.length--;


    }


    traverse() {
        let str = "";
        let currentNode = this.head;
        while (currentNode) {
            str += currentNode.data + " --> ";
            currentNode = currentNode.next;
        }
        str += "x";
        console.log(str);
    }


    getLength() {
        return this.length;
    }

}

// Example Usage
const list = new LinkedList();

list.append(10);
list.append(30);
list.append(20);
list.append(40);
list.append(50);
list.append(60);


console.log("Before Deletion:");
list.traverse();


list.deleteNode(0); // Deleting the head node (10)
console.log("After Deleting Head:");
list.traverse();

console.log(list);


list.deleteNode(1); // Deleting the last remaining node (60)
console.log("After Deleting Last Node:");
list.traverse();



list.deleteNode(2); // Deleting the node at index 2 (50)
console.log("After Deletion 2nd index:");
list.traverse();
