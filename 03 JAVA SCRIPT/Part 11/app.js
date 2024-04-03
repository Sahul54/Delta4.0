// function one(){
//     return 1;
// }

// function two(){
//     return one() + one();
// }

// function three(){
//     let ans = two() + one();
//     console.log(ans);
// }

// three();

//  ------------------------------------------------------------

// setTimeout( () =>{
//     console.log("hello...");
// }, 2000);

// setTimeout( () =>{
//     console.log("hello2...");
// }, 2000);

// console.log("hii...");

// // --------------Callback Hell --------------------

// h1 = document.querySelector("h1");

// h1.style.color = "red";


// ------------

// setTimeout ( () => {
//     h1.style.color = "red";
// },1000);

// setTimeout ( () => {
//     h1.style.color = "green";
// },2000);

// setTimeout ( () => {
//     h1.style.color = "yellow";
// },3000);

// -------------

// function create

// function changeColor(color, delay){
//     setTimeout ( () => {
//     h1.style.color = "yellow";
//   },delay);
// }

// changeColor("red", 1000);
// changeColor("yello", 2000);


// ================callback hell ============

// function changeColor(color, delay, nextColorChange){
//     setTimeout( ()=> {
//         h1.style.color = color;
//         if(nextColorChange) nextColorChange();
//     }, delay );

//     changeColor("red", 1000, ()=>{
//         changeColor("red", 1000, ()=>{
//             changeColor("red", 1000, ()=>{
//                 changeColor("red", 1000, ()=>{
        
//                 });
//             });
//         });
//     });

// ?+++++++++++++++++++++ PROMISES +++++++++++++++++++++++++++

// function savetoDb(data, sucess, failure) {
//     let internetSpeed = Math.floor(Math.random()*10)+1;
//     if (internetSpeed>4) {
//         sucess();
//     }
//     else{
//        failure();
//     }
// }

// savetoDb(
//     "apna clg",
//     ()=> {
//         console.log("sucess 1 : your data was save");
//         savetoDb(
//             "apna clg",
//             ()=> {
//                 console.log("sucess 2 : your data was save");
//                 savetoDb(
//                     "apna clg",
//                     ()=> {
//                         console.log("sucess 3 : your data was save");
//                     },
//                     () => {
//                         console.log("failure 3: Week connection: Data not save");
//                     }
//                 );
//             },
//             () => {
//                 console.log("failure 2: Week connection: Data not save");
//             }
//         );
//     },
//     () => {
//         console.log("failure 1: Week connection: Data not save");
//     }
// );

// +++++++++Refactoring with Promises +++++++++++++++++++++++++

function savetoDb(data) {
    return new Promise ( (resolve, reject)=>{
      let internetSpeed = Math.floor(Math.random*10)+1;
    //   console.log(internetSpeed);   =>NaN
      if (internetSpeed > 4) {
        console.log("Sucess : data was save");
      }
      else{
        console.log("failure: week connection");
      }
    });
}

// savetoDb("apna clg");


let request = savetoDb("apna");
request .then(() =>{
    console.log("promise resove");
})
.catch(() =>{
    console.log("promise resove");
});