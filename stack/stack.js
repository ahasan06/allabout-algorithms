class Stack {
    constructor() {
        this.items = []
    }

    push(element){
        this.items.push(element)
    }
    pop(element){
        if (this.isEmpty()) {
            return "Stack is Empty"
        }
        return this.items.pop()
    }
    peek(element){
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.items[this.items.length-1]
    }
    isEmpty(){
        this.items.length === 0
    }
    size(){
        return this.items.length
    }
    clear(){
        return this.items = []
    }
}

const stack = new Stack()
stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.size()); // 3
console.log(stack.peek()); // 30
console.log(stack.pop());  // 30
console.log(stack.peek()); // 20
console.log(stack.size()); // 2
