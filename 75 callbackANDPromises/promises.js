// snippet
console.log('hello');
alert('wow!');

// promise
let prom1 = new Promise((resolve, reject) =>{
    let a = Math.random();
    if(a > 0.5){
        reject("Number is rejected");
    }
    else{
        console.log("Number is accepted")
        resolve("mohini");
    }
})
prom1.then((a) =>{
    console.log(a);
}).catch((err)=>{
    console.log(err);
})