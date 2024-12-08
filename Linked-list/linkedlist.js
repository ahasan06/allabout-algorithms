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
        console.log("new Node", newNode);

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

  printList(){
    let current  = this.head
    let listValues = []
    while (current) {
        listValues.push(current.data)
        current = current.next
    }
    console.log(listValues.join(" -> ")); 
  }

  getLength() {
    return this.length;
  }

}

const list = new LinkedList()

list.append(10);
list.append(20);
list.append(30);
list.append(40);
list.printList(); 

console.log("List", list);
console.log("Length of the list:", list.getLength()); 