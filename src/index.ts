// let id: number = 5;
// console.log("ID: ", id);

// basic types :
let id: number = 5;
let company: string = "Traversy Media";
let isPublished: boolean = true;

let x: any = "Hello";
x = 9;
console.log(x);
// we will not get errors for this

let age: number;
age = 19;

// array
let ids: number[] = [1, 2, 3, 4, 5];

// ids.push("ehue")// get error

let other: any[] = [1, 2, "yids", true];

// Tuple
// in this we can specify proper types inside of the array
let person: [number, string, boolean] = [1, "jsdj", true];

// tuple array
let employee: [number, string][];
employee: [
  [1, "jsd"],
  [1, "jsd"],
  [1, "jsd"],
];

// union
