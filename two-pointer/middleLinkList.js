// 876. Middle of the Linked List
// https://leetcode.com/problems/middle-of-the-linked-list/description/

var middleNode = function(head) {

    let slow = head
    let fast = head

    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next

    }
  
  return slow
  
   
    
};

const head = [1,2,3,4,5]
console.log(middleNode(head));
