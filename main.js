// 1)Filter the students from the class 6th 'A' section from the below array of objects.

 myArr = [
    {
     studenName: "jack",
     studenClass: 6,
     studenSection: "a"
    },
    {
     studenName: "tom",
     studenClass: 6,
     studenSection: "a"
    },
    {
     studenName: "ricky",
     studenClass: 6,
     studenSection: "b"
    },
    {
     studenName: "john",
     studenClass: 6,
     studenSection: "b"
    },
    {
     studenName: "jerry",
     studenClass: 6,
     studenSection: "a"
    },
    {
     studenName: "henry",
     studenClass: 6,
     studenSection: "b"
    },
    {
     studenName: "stephen",
     studenClass: 6,
     studenSection: "a"
    }
]

let a =myArr.filter(function(rk){

  let b=  rk.studenSection == "a";
  return b;
})
console.log(a);


// 2)sort an array of JavaScript objects.

library = [ 
   {
       title:  'The Road Ahead',
       author: 'Bill Gates',
       libraryID: 1254
   },
   {
       title: 'Walter Isaacson',
       author: 'Steve Jobs',
       libraryID: 4264
   },
   {
       title: 'Mockingjay: The Final Book of The Hunger Games',
       author: 'Suzanne Collins',
       libraryID: 3245
   },
   {
       title: 'Adventures of Tom Sawyer',
       author: 'Mark Twain',
       libraryID: 1345
   },
   {
       title: 'Adventures of Sherlock Holmes',
       author: 'Sir Arthur Conan Doyle',
       libraryID: 2245
   }
];

let b =library.sort(function(rk1,rk2){
    let c = rk1.libraryID - rk2.libraryID;
    return c;
}) 
console.log(b);

// 3)Identify all of the variables, object property names, primitive values, and objects shown in the following code

function hello(greeting, name) {
  return greeting + ' ' + name;
}

function xyzzy() {
  return { a: 1, b: 2, c: [3, 4, 5], d: {} };
}

const howdy = hello('Hi', 'Grace');
let foo = xyzzy();

console.log("variable: howdy , foo" );

let objKey = Object.keys(foo);
let objValue = Object.values(foo);

console.log(objKey);
console.log(objValue);
console.log(xyzzy());


// 4)Write a code to replace the value 6 in the following object with 606

let obj = {
  foo: { a: "hello", b: "world" },
  bar: ["example", "mem", null, { xyz: 6 }, 88],
  qux: [4, 8, 12]
};

let add = obj.bar[3].xyz=606;

console.log(add);


