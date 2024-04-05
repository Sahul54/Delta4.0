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


function getNum() {
    return new Promise((resolve, rejrct) => {
        setTimeout ( ()=>{
            let num = Math.floor(Math.random() *10)+1;
            console.log((num));
        }, 1000)
    }) 
}

async function demo(){
    await getNum();
    await getNum();
    await getNum();
    getNum();
}