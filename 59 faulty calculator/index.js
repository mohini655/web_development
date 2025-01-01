console.log("let's create a faulty calculator")
let a = Number(prompt("enter 1st number"))
let b = Number(prompt("enter 2nd number"))
let op = prompt("enter oprator")
let r = Math.random()

let obj = {
    "+" : "-",
    "-" : "/",
    "*" : "+",
    "/" : "**"
}

if(r < 0.1){
    alert(`the result is ${eval(`${a} ${op} ${b}`)}`);
}
else{
    op = obj[op];
    alert(`the result is ${eval(`${a} ${op} ${b}`)}`);
}

// function calculator(a , b, op, r){
//     if(r < 0.1){
//         if(op == '+'){
//             return a - b;
//         }
//         else if(op == '-'){
//             return a / b;
//         }
//         else if(op == '*'){
//             return a+b;
//         }
//         else if(op == '/'){
//             return a**b;
//         }
//         else{
//             console.log("invalid operator")
//         }
//     }
//     else{
//         if(op == '+'){
//             return a + b;
//         }
//         else if(op == '-'){
//             return a - b;
//         }
//         else if(op == '*'){
//             return a*b;
//         }
//         else if(op == '/'){
//             return a/b;
//         }
//         else{
//             console.log("invalid operator")
//         }
//     }
// }
// let result = calculator(a, b, op, r);
// console.log("result : " + result);
