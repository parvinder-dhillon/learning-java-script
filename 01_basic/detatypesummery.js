//there are two types of detatypes 
//permitive detatypes and non permitive detatypes refrence

//permitive detatypes
// there are 7 types of premetive detatypes
// string, number, symbol, bigint, null, boolean, undefined
const score = 123 //number
const loggenin = true //boolean
let useraddres; //undefined

// const userid = Symbol('123')
// const user2id = Symbol('123')
//BOTH ARE DEFRENT because of symbol

const bignumber = 7218947913658932043740n // this is bigint couse of n in the last

//refrence(non permitive detatype)
// there are 3 types of non premetive detatypes

// Array , Object , Functions

// array

const heros = ["shaktiman", "captain", "ironman", "thor"]

// object

let obj = {
    name: "inder",
    age: 22,
}

// functions

const myfunction = function(){
    console.log("Hello world");
}
//stack (permitive), Heap (non permitive)
// in permitive detatypes if you make two variables and give 2nd variable the first one so the value is same in both variable but when you change value of 2nd it doesnt change the orignal one because it gave you a copy of variable value for example

let first = "parvinder"
let second = first
console.log(second)

//now change the value
second = "inder"
console.log(first)
console.log(second)
//the value doesnt change 

// in non permitive detatypes if you make two variables and give 2nd variable the first one so the value is same in both variable and when you change value of 2nd it change the orignal one because it gave you a orignal refrence of variable value for example


let user = {
    name: "parvinder",
    lastName: "singh",
}

let user2 = user

user2.name = "inder"

console.log(user2)
console.log(user)

//the value is changed 

//this is the difrence between permitive and non permitiv detatypes



