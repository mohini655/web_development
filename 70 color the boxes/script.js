console.log("hello world")

let boxarr = document.getElementsByClassName("box");
console.log(boxarr);

let boxes = document.querySelector(".container").children
console.log(boxes);

function get_rand_color(){
    let var1 = Math.ceil(Math.random() * 256);
    let var2 = Math.ceil(Math.random() * 256);
    let var3 = Math.ceil(Math.random() * 256);
    return `rgb(${var1} ${var2} ${var3})`;
}

Array.from(boxarr).forEach(e=>{
    e.style.backgroundColor = get_rand_color();
    e.style.color = get_rand_color();
})
