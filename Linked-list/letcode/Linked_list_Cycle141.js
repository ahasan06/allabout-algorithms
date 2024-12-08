class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = null;
    }
}

function createLinkedList(arr) {
    if (arr.length === 0) {
        return null
    }
    let head = new ListNode(arr[0]) // create the first node
    let current = head

    for (let i = 1; i < arr.length; i++) {

        current.next = new ListNode(arr[i])
        current = current.next

    }

    return head
}

function createCycle(head, pos) {
    if (pos == -1 || !head) {
        return
    }

    let tail = head
    let index = 0
    let cycleNode = null

    while (tail.next) {
        if (index === pos) {
            cycleNode = tail; 
            console.log(cycleNode);
            
        }
        tail = tail.next;
        index++;
    }

    tail.next = cycleNode;

}

function hasCycle(head) {   
    if (!head||!head.next) {
        return false
    }
    let slow = head
    let fast = head
    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next

        if (slow === fast) {
            return true
        }
    }

    return false
}

const arr = [3];
const pos = -1

let head = createLinkedList(arr)
console.log(head);
let cycleNode = createCycle(head,pos)
console.log(cycleNode);

console.log(hasCycle(head));   











