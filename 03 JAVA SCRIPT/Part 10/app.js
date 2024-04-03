// let p = document.querySelector("p");
// let h4 = document.querySelector("h4");
// let div = document.querySelector("div");

// function change() {
//     console.log(this.innerText);
//     this.style.backgroundColor = "red";
// }

// p.addEventListener("click", change);
// h4.addEventListener("click", change);
// div.addEventListener("click", change);


let inp = document.querySelector("#text");
let p = doument.querySelector("p")

inp.addEventListener("input", function(){
    console.log(inp.value);
    p.innerText = inp.value;
});
