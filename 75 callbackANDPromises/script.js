console.log("hello world");
console.log("hello india");
setTimeout(()=>{
    console.log("hello North East Delhi");
} , 4000);
setTimeout(()=>{
    console.log("hello North East Delhi 2 ");
} , 0);
console.log("hello Delhi");
console.log("The Home");


// callback function
const fn = () =>{
    console.log("i am inside the callback function");
}
const callback = (arg, fn) => {
    console.log("hello " + arg);
    fn();
}
const loadScript = (src, callback) => {
  let sc = document.createElement("script");
  sc.src = src;
  sc.onload = callback("mohini", fn);
  document.head.append(sc);
}
loadScript("hello.js", callback);
