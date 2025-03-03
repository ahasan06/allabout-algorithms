class Stack {
    constructor() {
        this.items = []
    }

    push(element) {
        this.items.push(element)
    }

    pop() {
        if (this.isEmpty()) {
            return "Stack is Empty"
        }
        return this.items.pop()
    }

    isEmpty() {
        return this.items.length === 0
    }

    size() {
        return this.items.length
    }


}


function isValid(s) {
    const stack = new Stack();
    const map = {
        '(':')',
        '{':'}',
        '[':']',
    }
    
    for (const char of s) {
       
       if (map[char]) {
          stack.push(char)
       }
       else{

        
        if (stack.isEmpty()|| map[stack.pop()]!==char) {
        
            return false
        }
       }
    }
    return stack.isEmpty();
}



// Test cases
// console.log(isValid("()")); // true
// console.log(isValid("()[]{}")); // true
// console.log(isValid("(]")); // false
console.log(isValid("([])")); // true
// console.log(isValid("([)]")); // false