class ListNode {
    constructor(val, next = null) {
        this.val = val
        this.next = null
    }
}

function createLinkedList(arr) {
    if (arr.length === 0) {
        return null
    }

    let head = new ListNode(arr[0]) // create first Node
    let current = head
    console.log("create first Node", current);

    for (let i = 1; i < arr.length; i++) {

        current.next = new ListNode(arr[i])
        current = current.next
    }

    console.log("convert array to linked list", head);
    return head

}


function deleteDuplicates(head) {
    if (!head) {
        return head
    }

    let current = head;

    while (current && current.next) {

        if (current.val === current.next.val) {
            current.next = current.next.next
        }
        else {
            current = current.next
        }
    }

    return head
}


function PrintList(head) {    
    let result = []
    let current = head

    while (current) {
        result.push(current.val)
        current = current.next
    }
    return result
}

let head1 = createLinkedList([1, 1, 2, 3, 3]);
console.log("Head 1", head1);
head1 = deleteDuplicates(head1)
console.log("After Deleting Head 1 : ",head1);
head1 = PrintList(head1)
console.log("Print head 1: ",head1);