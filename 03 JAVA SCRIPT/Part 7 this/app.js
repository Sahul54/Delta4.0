const student = {
    name: "raj",
    math: 85,
    eng: 85,
    phy: 85,
   
    
    getAvg(){
    let avg = (this.math + this.eng + this.phy)/3;
    console.log(avg);
    }
}

// student.getAvg();


// -----------try & catch
// let a = 5;
// try{                            // error detect
//     console.log(a);
// }
// catch(err){
//     console.log(`a variable is not declare`);
//     console.log(err);
// }

// console.log("hello");

// Arrow function

let fun = () =>{
    return console.log("hello");
}

fun();
fun();

let sum = (a,b) =>{
    return console.log(a+b);
}
sum(1,3);
sum;

// implicit return

const mul  = (a,b) => (a*b)

// console.log(mul(2,4));

const cube  = (a) => (a*a*a)

// console.log(cube(2));

print = () => {
    // console.log("hello");
}
print()


// SET TIME OUT

console.log("Hii");

setTimeout( ()=> {
    console.log("Namasate!");
}, 2000);

console.log("welcome");


// set interval

let id = setInterval(() => {
    console.log("Apna clg");
}, 2000);

clearInterval(id);