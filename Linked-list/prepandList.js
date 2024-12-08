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

    prepend(data) {
        const newNode = new Node(data);
        if (this.length === 0) {
            // If the list is empty, set head and tail to the new node
            this.head = newNode;
            this.tail = newNode;
        } else {
            // Point the new node's next to the current head
            newNode.next = this.head;
            // Update the head to be the new node
            this.head = newNode;
        }
        this.length++;
    }

    getLength() {
        return this.length;
    }

    traverse() {
        let currentNode = this.head;
        let str = '';
        while (currentNode) {
            str += currentNode.data + ' --> ';
            currentNode = currentNode.next;
        }
        str += 'x';
        console.log(str);
    }
}

const list = new LinkedList();

list.append(10);
list.append(20);
console.log(list);

console.log("Before prepend:");
list.traverse();
console.log("Length of the list:", list.getLength());

list.prepend(5);

console.log("After prepend:");
list.traverse();
console.log("Length of the list:", list.getLength());
