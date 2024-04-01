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

setTimeout( () =>{
    console.log("hello...");
}, 2000);

setTimeout( () =>{
    console.log("hello2...");
}, 2000);

console.log("hii...");

// --------------Callback Hell --------------------

h1 = document.querySelector("h1");

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

function changeColor(color, delay, nextColorChange){
    setTimeout( ()=> {
        h1.style.color = color;
        if(nextColorChange) nextColorChange();
    }, delay );

    changeColor("red", 1000, ()=>{
        changeColor("red", 1000, ()=>{
            changeColor("red", 1000, ()=>{
                changeColor("red", 1000, ()=>{
        
                });
            });
        });
    });