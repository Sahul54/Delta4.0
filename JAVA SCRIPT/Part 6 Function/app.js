function isVote(age){
    if (age>=18) {
        return `your age is ${age}, You are eligble for vote`;
    }
    else{
        return `your age is ${age}, You are not eligble for vote`;
    }
}

// console.log(isVote(0));

let sum = 0;
function sumOf(n) {
    for (let i = 1; i <= n; i++){
        sum = sum + i ;
       }
       return sum;
    }
    // console.log(`sum of 1 to ${n} : `, sumOf(3));
    // console.log(`sum of 1 to n : ${totalSum}`);

    let str = [1,2];

    function msg(str) {
        let result = "";
        for (let i = 0; i < str.length; i++){
           result += str[i]
        }
        return result;
    }

    console.log(msg(str));