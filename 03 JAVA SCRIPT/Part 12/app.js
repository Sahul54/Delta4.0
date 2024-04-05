// async function greet(){
//     // throw "random error";
//     //    return "Hello!"
// }
//  greet();

// greet()
//     .then( (result) => {
//         console.log("Promises was accepted");
//     })
//     .catch((err) => {
//         console.log("promise was rectected");
//     });


// function getNum() {
//     return new Promise((resolve, rejrct) => {
//         setTimeout ( ()=>{
//             let num = Math.floor(Math.random() *10)+1;
//             console.log((num));
//         }, 1000)
//     }) 
// }

// async function demo(){
//     await getNum();
//     await getNum();
//     await getNum();
//     getNum();
// }


// Handling Rejection------------
//  some to our promise is reject then program is error to use Handling rejection therefore to run aagye ka Program to use try and catch


// let h1 = document.querySelector("h1");

// function changeColor(color, dealy) {
//     return new Promise ((resolve, reject) => {
//         setTimeout(() => {
//             let num = Math.floor(Math.random() * 5)+1;
//             if(num> 3){
//                 reject("Promise is rejected");
//             }
//             h1.style.color = color;
//             console.log(`Color is changed to ${color}!`);
//             resolve("color changed");
//         }, dealy);  
//     }, );
// }

// async function demo(){
//     try
//     {
//     await changeColor("red", 1000);
//     await changeColor("green", 1000);
//     await changeColor("yellow", 1000);
//     await changeColor("pink", 1000);
//     }
//     catch(err){
//     let a = 5;
//     console.log(a);
//     }
    
  
// }


// let student = {
//     name : "raj",
//     marks : 84
// }

// JSON.stringify(student);
// console.log(student);

let url = "https://catfact.ninja/fact";

async function getFacts(){
    let res = await fetch(url);
    let data = await res.json();
    console.log(data);

}

// fetch(url)
// .then( (res)=>{
//    console.log("resopnse");
// })
// .catch((err)=>{
//     console.log("ERR");
// });

