"use strict";
// let id: number = 5;
// console.log("ID: ", id);
Object.defineProperty(exports, "__esModule", { value: true });
// now we will implement the interface here using implements keyword instead of colon
class Person {
    // it is just a method and whenever the instance of the class is created this is called automatically
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `{this.name} is now registered `;
    }
}
// instance of Person
const brad = new Person(101, "Ali");
console.log(brad);
//# sourceMappingURL=index.js.map