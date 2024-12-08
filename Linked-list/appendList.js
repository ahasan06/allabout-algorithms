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


  getLength() {
    return this.length;
  }

}

const list = new LinkedList()

list.append(10);
list.append(20);;

console.log("List", list);
console.log("Length of the list:", list.getLength()); 