"use strict"  // treate all js code as newer version

// alert(2+2);  we are using node.js not browser thats why alsert is written in different b=manner


// datatypes 
// string 
//number2^53
//bool true/false
//bigint 
// null its a standalone value khalihai
// symbol  for unique


// object


console.log(typeof (null));
console.log(typeof (undefined));




// primitive  means they are call by value  
// what more it means   copy of data is passsed and any changes i do it is changed into copy not in actual memory location
// 7 types  string , Number , Boolean , null , undefined(not assigned value but var declared)  , Symbol, BigInt


// Reference type  array , objests, functions
// non primitive
// momery address reference provided

// master javascript objects and window events  javascript is mastered
// js is dynamic type.


const id = Symbol('123')
const anotherID = Symbol('123')
console.log(id===anotherID)