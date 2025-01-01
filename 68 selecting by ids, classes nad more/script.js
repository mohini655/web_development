console.log("hello world");
let box = document.getElementsByClassName("box")
console.log(box)
box[2].style.backgroundColor = "red"
document.getElementById("second").style.backgroundColor = "blue";
document.querySelector(".box").style.backgroundColor = "yellow";
console.log(document.querySelectorAll(".box"));
let boxarr = document.querySelectorAll(".box")
boxarr.forEach(e => {
    e.style.color = "pink";
})
console.log(document.getElementsByTagName("div"));