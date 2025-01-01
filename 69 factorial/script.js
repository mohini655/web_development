console.log("hello world")
let a = 5
function factorial(Number){
    let arr = Array.from(Array(Number+1).keys());
    // console.log(arr.slice(1,));
    let c = arr.slice(1,).reduce((a,b) => {
        return a * b;
    })
    // console.log(c);
    return c;
}
console.log(factorial(a))