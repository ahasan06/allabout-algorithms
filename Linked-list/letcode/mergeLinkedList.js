class ListNode {
    constructor(val,next=null) {
        this.val = val;
        this.next = next;
    }
}

function createLinkedList(arr) {
    if (arr.length===0) {
        return null
    }
    let head = new ListNode(arr[0])
    let current = head

    for (let i = 0; i < arr.length; i++) {
        
        current.next = new ListNode(arr[i])
        current = current.next
    }
    return head
}


function mergeTwoLists(list1,list2) {
    
    let dummy = new ListNode(-1)
    let current = dummy
    console.log(dummy);
    
    while (list1!==null && list2!==null) {
        if (list1.val<=list2.val) {
            current.next = list1
            list1 = list1.next
        }else{
            current.next = list2
            list2 = list2.next
        }
        current = current.next
      
    }
    if (list1!==null) {
        current.next = list1
    }else if (list2!==null) {
        current.next = list2
    }
  return dummy.next
}




let list1 = createLinkedList([1, 2, 4]);
let list2 = createLinkedList([1, 3, 4]);

let mergedList = mergeTwoLists(list1, list2);

console.log(JSON.stringify(mergedList));



