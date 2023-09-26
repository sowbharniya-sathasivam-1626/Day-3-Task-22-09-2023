var obj1 = {name: "Person 1", age: 5};
var obj2 = {age: 5, name: "Person 1"};
var Obj1 = JSON.stringify(obj1);
var Obj2 = JSON.stringify(obj2);

if (Obj1 == Obj2){
    console.log("Obj1 and Obj2 are the Same Objects");
} else {
    console.log("Obj1 and Obj2 are not the Same Objects");
}
