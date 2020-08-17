class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class singlyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if (!this.head) return undefined;
        let current = this.head;
        let newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.head = null;
        }
        return current;
    }

    shift() {
        if (!this.head) return undefined;
        let current = this.head;
        this.head = current.next;
        this.length--;
        return current;
    }

    unshift(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    getNode(val) {
        if (val < 0 || val >= this.length) return null;
        let count = 0;
        let current = this.head;
        while (count !== val) {
            current = current.next;
            count++;
        }
        return current;
    }

    setNode(index, value) {
        let findNode = this.getNode(index);
        if (findNode) {
            findNode.val = value;
            return true;
        }
        return false;
    }

    insert(index, value) {
        if (index < 0 || index > this.length) return false;
        if (index === this.length) return !!this.push(value);
        if (index === 0) return !!this.unshift(value);

        let newNode = new Node(value);
        let prev = this.getNode(index - 1);
        let temp = prev.next;
        newNode.next = temp;
        this.length++;
        return true;
    }

    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === 0) return this.shift();
        if (index === this.length) return this.pop();

        let prev = this.getNode(index - 1);
        let removed = prev.next;
        prev.next = removed.next;
        this.length--;
        return temp;
    }

    reverse() {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let prev = null;
        let next;
        for (let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }
}

let list = new singlyLinkedList();
list.push("HELLO");
list.push("Goodbye");
list.push("how are you");
list.push("Am bACK");

console.log(list.unshift("ITZ Uche"));
list.pop();
list.shift();
list.unshift("Praises");
list.push(34);
list.setNode(1, 70.456);
list.reverse();
console.log(list);

// Write a
// function that counts how many different ways you can make change
// for an amount of money given an array of coin denominations.For example, there are 3 ways to giv e change
// for 4
// if you have coins with denomination 1 and 2:

function countChange(money, coins) {
    //create an empty array with zeros up to the amount
    var result = [];
    for (var i = 0; i <= money; i++) {
        result[i] = 0;
    }
    result[0] = 1;
    for (let i = 0; i < coins.length; i++) {
        let indivduals = coins[i];
        for (let j = indivduals; j <= money; j++) {
            let x = j - indivduals;
            result[j] += result[x];
        }
    }
    console.log(result);
    return result[money];
}

console.log(countChange(10, [5, 2, 3]));