let student = {
  name: "Raj",
  rollNo: 12,
  marks: [40, 50, 60]
};
// console.log(student);
// console.log(`Name: ${student.name}`);
// console.log(`Marks: ${student.marks}`);

let post = {
  userName: "sahul54",
  like: 1553,
  share: 178,
  Comment:1299
}
// console.log(post);
// console.log(post["Comment"]); //first is
// console.log(post.Comment); //second is


// add/ update/ delete value 
let fruits = {
  name: "mango",
  color: "orange",
  test: "sweet",
  price: 50
}
// console.log(fruits);

// add
fruits.price = 70;
// console.log(fruits);

// update
fruits.test  = "khatta";
// console.log(fruits);

// delete
delete fruits.color;
// console.log(fruits);


// Obeject of Object
let classInfo = {
  ram : {
    grade: "A+",
    city: "Mumbai"
  },

  sayam : {
    grade: "A+",
    city: "Mumbai"
  },

  ramu : {
    grade: "A+",
    city: "Mumbai"
  }
};
// console.log(classInfo);
// console.log(classInfo.ram);
// console.log(classInfo.ramu.city);
// classInfo.ram.city = "delhi";
// console.log(classInfo);

delete classInfo.ram;
// console.log(classInfo);


// Array of Object
let classInfo1 = [
  {
    name: "ram",
    grade: "A+",
    city: "Mumbai"
  },

  {
    name: "sam",
    grade: "A+",
    city: "Mumbai"
  },

  {
    name:"kam",
    grade: "A+",
    city: "Mumbai"
  }
];
// console.log(classInfo1);
// console.log(classInfo1[1]);
// console.log(classInfo1[1].city);


// Math Object
// console.log(Math.PI);
// console.log(Math.pow(2,3));  // and more

let num = Math.random();
console.log(num);
num = num*10;
console.log(num);
num = Math.floor(num);
console.log(num);
num = num+1;
console.log(num); 