import { LL } from "./ll.mjs";

// example uses class syntax - adjust as necessary
const list = new LL();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());
console.log('head',list.head());
console.log('tail',list.tail());
console.log('size',list.size());
list.pop();
console.log(list.toString());
console.log('size',list.size());
list.append('turtle');
console.log(list.toString());
console.log('size',list.size());
list.prepend('lion');
console.log(list.toString());
console.log(list.contains('lion'));
console.log(list.contains('tiger'));
console.log(list.find('lion'));
console.log(list.find('tiger'))
console.log(list.at(3));
console.log(list.at(9));
console.log(list.at(-1));
console.log('size ', list.size());
list.removeAt(2);
list.removeAt(0);
list.removeAt(list.nodeSize - 1);
console.log(list.toString());
list.insertAt(2,'tiger');
list.insertAt(0,'newAnimal');
list.insertAt(list.nodeSize,'different breed');
console.log(list.toString());