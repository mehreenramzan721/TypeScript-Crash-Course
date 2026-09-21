// let id: number = 5;
// console.log("ID: ", id);

// basic types :
// let id: number = 5;
// let company: string = "Traversy Media";
// let isPublished: boolean = true;

// let x: any = "Hello";
// x = 9;
// console.log(x);
// // we will not get errors for this

// let age: number;
// age = 19;

// // array
// let ids: number[] = [1, 2, 3, 4, 5];

// // ids.push("ehue")// get error

// let other: any[] = [1, 2, "yids", true];

// // Tuple
// // in this we can specify proper types inside of the array
// let person: [number, string, boolean] = [1, "jsdj", true];

// // tuple array
// let employee: [number, string][];
// employee: [
//   [1, "jsd"],
//   [1, "jsd"],
//   [1, "jsd"],
// ];

// // union
// // we can use more than one types
// let ID: string| number ;
// ID = 22

// ENUMS
// they all have the values like 0 for Up and so on
// enum Direction1 {
//   Up,
//   Down,
//   Right,
//   Left,
// }

// console.log(Direction1.Up);// 0
// but if we specify our own values we can also do it like:

// enum Direction1 {
//   Up = 1,
//   Down,
//   Right,
//   Left,
// }

// console.log(Direction1.Up); // 1
// console.log(Direction1.Down); //2

// we can also set them to strings

// enum Direction2 {
//   Up = "Up",
//   Down = "Down",
//   Right = "Right",
//   Left = "Left",
// }

// console.log(Direction2.Up);
// console.log(Direction2.Down);

// Objects
// const user: {
//   id: number;
//   name: string;
// } = {
//   id: 1,
//   name: "John",
// };
// console.log(user);

// // or we can use another method :
// type User = {
//   id: number;
//   name: string;
// };

// const User1: User = {
//   id: 12,
//   name: "H",
// };

// console.log(User1);

// // Type assertion
// let cid: any = 1;
// // way 1:
// // let customerId = <number>cid;
// // way 2:
// let customerId = cid as number;
// // and now whenever we wanna assign customerId a number we get a error in both ways

// // functions
// // the third type number that we specified is for our output to be a number
// function addNum(x: number, y: number): number {
//   return x + y;
// }

// if we wanna implement a functioning without returning we will use void type for our output
function log(message: string | number): void {
  console.log(message);
}
console.log(log("Hello World"));

// just like we use type in objects to specify the type we can also use interfaces
interface InterfaceUser {
  // if we wanna make the property read only so that will not be change
  readonly id: number;
  name: string;
  // for optional properties that will not cause an error if not assigned :

  age?: number;
}

const User2: InterfaceUser = {
  id: 132,
  name: "Hi",
};

// so whats the difference???
// a type can be used with primitives and unions

// for union:
type Point = string | boolean;
const Point: Point = true;

// but in interface we cant do it we will get an error
// interface Point = string | boolean;
// const Point: Point = true;

// we can also use interfaces with functions
interface MathFunc {
  (x: number, y: number): number;
}

const add: MathFunc = (x: number, y: number): number => x + y;
const subtract: MathFunc = (x: number, y: number): number => x - y;
