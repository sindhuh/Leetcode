function SingleLinkedList() {
    this.head = null;
}
function Node(data) {
    this.data = data;
    this.next = null;
}

SingleLinkedList.prototype.addNode = function (value) {
    var newNode = new Node(value);
    console.log("node  :" +newNode.data +" "+ newNode.next);
    var currentNode = this.head;
    if(currentNode == null) {
        this.head = newNode;
        return;
    }
    while (currentNode.next) {
        currentNode = currentNode.next;
    }
    currentNode.next = newNode;
    console.log(">>>>" ,currentNode.next);
};
var list = new SingleLinkedList();
for(var i = 0 ; i < 6; i++) {
    list.addNode(i);
  //  console.log(list);
}
console.log(list);

function swapNodes() {
    
}
