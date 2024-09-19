import { Node } from "./node.mjs";

export class LL {
    constructor() {
        this.tailItem = null;
        this.headItem = null;
        this.nodeSize = 0;
    }

    isEmpty = () => this.nodeSize == 0;
    size = () => this.nodeSize;
    head = () => this.headItem;
    tail = () => this.tailItem;

    append = (val) => {
        const node = new Node(val);
        if (this.isEmpty()) {
            this.headItem = node;
        }else{
            this.tailItem.next = node;
        }
        this.tailItem = node;
        this.nodeSize++;
    }

    prepend = (val) => {
        const node = new Node(val);
        if (this.isEmpty()){
            this.tailItem = node;
        }else{
            node.next = this.headItem;
        }
        this.headItem = node;
        this.nodeSize++;
    }

    at = (idx) => {
        if (idx < 0 || idx >= this.nodeSize) return 'invalid index';

        let temp = this.headItem;
        for (let i = 0; i < idx; i++){
            temp = temp.next;
        }
        return temp;
    }

    pop = () => {
        if (this.isEmpty()) return "can't pop from empty list";

        if (this.headItem == this.tailItem) {
            this.headItem = null;
            this.tailItem = null;
        }

        let temp = this.headItem;
        for (let i = 0; i < this.nodeSize - 1;i++){
            temp = temp.next;
        }

        this.tailItem = temp;
        this.nodeSize--;
    }

    contains = (value) => {
        let temp = this.headItem;
        for (let i = 0; i < this.nodeSize;i++){
            if (temp.data == value) {
                return true;
            }else{
                temp = temp.next;
            }
        }
        return false;
    }

    find = (value) => {
        let temp = this.headItem;
        for (let i = 0; i < this.nodeSize;i++){
            if (temp.data == value) {
                return i;
            }else{
                temp = temp.next;
            }
        }
        return null;
    }

    toString = () => {
        let temp = this.headItem;
        const items = []
        for (let i = 0; i < this.nodeSize;i++){
           items.push(`(${temp.data})`);
           temp = temp.next;
        }
        items.push('(null)');
        return items.join(' --> ');
    }

    insertAt  = (idx,value) =>  {
        if (idx < 0) return;

        if (idx == 0) this.prepend(value);
        else if(idx >= this.nodeSize) {
            this.append(value);
        }
        else{
            const newNode = new Node(value);
            let node = this.at(idx - 1);
            newNode.next = node.next;
            node.next = newNode;
            this.nodeSize++;
        }
    }

    popLeft = () => {
        if (this.isEmpty()) return "can't pop from empty list";

        if (this.headItem == this.tailItem) {
            this.headItem = null;
            this.tailItem = null;
        }else{
            this.headItem = this.headItem.next;
        }
        this.nodeSize--;
    }

    removeAt = (idx) => {
        if (idx < 0 || idx >= this.nodeSize) return;
        if (idx == 0) this.popLeft();
        else if (idx == this.nodeSize - 1) this.pop();
        else{
            const node = this.at(idx - 1);
            node.next = node.next.next;
            this.nodeSize--;
        }
    }
}