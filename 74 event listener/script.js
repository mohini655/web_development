console.log("hello world")
let button = document.getElementById("submit");
button.addEventListener("click", ()=>{
    alert("data is submitted");
    document.querySelector("#heading").innerHTML = "i am changed";
})
// let head = document.querySelector("#heading");
// head.addEventListener("click", ()=>{
//     head.style.color = "red";
// })

// let head = document.querySelector("#heading");
// head.addEventListener("dblclick", ()=>{
//     head.style.color = "red";
// })
// let head = document.querySelector("#heading");
// head.addEventListener("mouseleave", ()=>{
//     head.style.color = "red";
// })
// let head = document.querySelector("#heading");
// head.addEventListener("contextmenu", ()=>{
//     head.style.color = "red";
// })
// let head = document.querySelector("#heading");
// document.addEventListener("keydown", fun());
// // document.removeEventListener("keydown", fun());
// function fun(e){
//     head.style.color = "red";
//     console.log(e);
// }
// let head = document.querySelector(".heading");
document.addEventListener("keydown", (e)=>{
    head.style.color = "red";
    console.log(e);
})