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
        const newNode = new Node(data);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }

    updateList(n, value) {
        if (n < 0) {
            console.log("Negative index is not allowed");
            return;
        }

        if (n >= this.length) {
            console.log("Index not found! Please enter a valid index");
            return;
        }

        let currentNode = this.head;
        let counter = 0;

        while (currentNode) {
            if (counter === n) {
                currentNode.data = value; // Update the `data` property
                return;
            }
            currentNode = currentNode.next;
            counter++;
        }
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
}

const list = new LinkedList();

list.append(10);
list.append(20);
list.append(130);

console.log("Before Update:");
list.traverse();

list.updateList(2, 140); 

console.log("After Update:");
list.traverse();
