var data = {
    name: "person1",
    age: 22
}

var data1 = {
    age: 22,
    name: "person1"
}
//comparing two objects whether its identical or not
var compareName = data.name === data1.name;
console.log(compareName);                         //true

var compareAge = data.age === data1.age;
console.log(compareAge);                          //true    


