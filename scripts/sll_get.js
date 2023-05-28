class Node{
    constructor(val){
        this.val = val
        this.next = null;      
    }
}

class SinglyLinkedList{
    constructor(val){
        this.val = val;
        this.next = null;  
        this.head = null;
        this.tail = null;
    }
    push(val){
        var newNode = new Node(val);
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
    get(index){
        
        var pos = 0;
        var foundNode = this.head;
        
        if(index < 0 || index>this.legnth){
            
            return undefined;
        }
        
        else{
            while (pos !== index){
                foundNode = foundNode.next
                pos++;
            }
        }
        return foundNode;
    }
}

var list = new SinglyLinkedList();

