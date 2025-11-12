class Stack {
    constructor() {
        this.items = [];
    }
    push(item) {
        this.items.push(item);
    }
    pop() {
        if (this.empty()){return this.items.pop();}
    } 
    peek(){
        if (this.empty()){return this.items.at(-1);}
    }
    error(why) {
        throw new Error(why);
    }
    size() {
        return this.items.length;
    }
    empty(){
        if (!this.size() > 0){
            this.error("empty");
            return false;
        }
        return true;
    }
    clear(){
        this.items = [];
    }
}
let stack = new Stack;

for (const ch of str){
    if (ch === "-"){
        stack.pop();
    }else{
        stack.push(ch);
    }
}

console.log(stack);