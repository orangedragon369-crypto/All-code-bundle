let playing = document.getElementById("playing").innerHTML;

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    add(value) {
        const newNode = new Node(value);
        if (!this.head){
            this.head = newNode;
            this.tail = newNode;
            this.head.next = this.tail;
            this.head.pre = this.tail;
            this.tail.next = this.head;
            this.tail.pre = this.head;
            return;
        }
        newNode.pre = this.tail;
        newNode.next = this.head;
        this.tail.next = newNode;
        this.tail = newNode;
        this.head.pre = this.tail;
    }

    delete(value){
        if (!this,head) return;
        if (this.head.info === value) {
            this.head =this.head.next;
            this.head.pre = this.tail;
            this.tail.next = this.head;
            return;
        }
        if (this.tail.info === value) {
            this.tail = this.tail.pre;
            this.head.pre = this.tail;
            this.tail.next = this.head;
            return;
        }
        let current = this.tail;
        do {
            current.next;
            if (current.info === this.tail.info) {
                throw new Error ("not found in linked list");
            }
        } while (current.next.info !== value) current = current.next;
    }
    view(which, one){
        if (!which && !one){
            return current.info;
        } else if (which && !one) {
            return current.next.info;
        } else if (!which && one) {
            return current.pre.info;
        } else {
            return this.head.info;
        }
        
    }

    forward() {
        current = current.next;
        reload();
    }

    back() {
        current = current.pre;
        reload();
    }
}

class Node {
    constructor(info){
        this.pre = null;
        this.info = info;
        this.next = null;
    }
}

let playlist = new LinkedList;

node1 = playlist.add("Weak");
node2 = playlist.add("The Saga Begins");
node3 = playlist.add("Fireborn");
node4 = playlist.add("Pride of a Nameless Hunter");

let current = playlist.head;

function playbtn() {
    const sentence = document.getElementById("status")
    sentence.innerHTML = sentence.innerHTML === "Currently Playing:"? "Currently Paused:": "Currently Playing:";
    const play = document.getElementById("play")
    play.innerHTML = play.innerHTML === "Play" ? "Pause" : "Play";
}

function reload(){document.getElementById("playing").innerHTML = ` ${current.info}`;};

reload()