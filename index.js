"use strict";
// **********************************ANY****************************************
Object.defineProperty(exports, "__esModule", { value: true });
// let age:any; step 05f
// let num1:any
// let num2:number =18
// num1 =num2
// console.log(num1);
// *************************UNKNOWN******************************************
// let num1:unknown
// num1 = 18
// num1 = "18"
// num1 = []
// let num1:unknown
// let num2:number = 18
// num1 = num2 // no error
// num2 = num1 // error : because unknown wali mai data type nahi store karwa saktai.
// let num1:unknown
// let num2:unknown = 18
// num2 =num1
// console.log(num2); // undefined
// ******************************EXPLICIT typeCasting***************************
// let num1:unknown;
// num1 = 18
// console.log((num1 as number).toFixed(2));
//(<number>num1).tofixed(2)
// let num1:string
// num1 = "18"
// let val = num1 as unknown as number
// console.log(val);
// ************************************REST PARAMETER***********************************
// let invite =(...friends:string[])=>{
// console.log(`welcome ${friends}`);
// }
// invite("zainab","neha","sakina")
// **********************************join *************************************
// let invite =(...friends:string[])=>{
//     console.log(`welcome ${friends.join(" | ")}`);  // to split the name
//     }
//     invite("zainab","neha","sakina")
//*****************************function overloading******************************************** */
// function add(a:number,b:number):number
// function add(a:string,b:string):string
// function add(a:any,b:any):any{
//     return a+b
// }
// add("zainab","khimji")
// add(18,20)
// practice task :
// function login(email:string):void
// function login(email:string,password:string):void
// function login(email:any,password?:any):void{
// if(!password){
//     console.log("login with google");
// }else{
//     console.log("log in with password");
// }
// }
// login("zainab","khimji")
// ******************************ENUMS*****************************************
var colors;
(function (colors) {
    colors[colors["red"] = 0] = "red";
    colors[colors["green"] = 1] = "green";
    colors[colors["yellow"] = 2] = "yellow";
})(colors || (colors = {}));
// data type bhi value bhi, index number print hotai hai
// console.log(colors.red); // 0
// ways to print index number of enum
// colors.red // 0
// colors["red"] // 0
// colors[0] // red
let trafficLight = colors.green;
if (trafficLight == colors.red) {
    console.log("stop");
}
else if (trafficLight == colors.green) {
    console.log("ready");
}
else if (trafficLight == colors.yellow) {
    console.log("go");
}
// ***********************************************************************
// home work
//never data type 
// full code //enums wala
