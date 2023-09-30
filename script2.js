var obj1= {name: "Sowbharniya", age: 24};
var obj2 = {age: 24, name: "Sowbharniya"};
var result=true;
if(Object.keys(obj1).length==Object.keys(obj2).length){
    for(key in obj1) { 
        if(obj1[key] == obj2[key]) {
            continue;
        }
        else {
            result=false;
            break;
        }
    }
}
else {
    result=false;
}
console.log(result);
