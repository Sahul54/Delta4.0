async function greet(){
    // throw "random error";
       return "Hello!"
}
//  greet();

greet()
    .then( (result) => {
        console.log("Promises was accepted");
    })
    .catch((err) => {
        console.log("promise was rectected");
    });