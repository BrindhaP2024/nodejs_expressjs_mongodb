let message: string = "Hello, TypeScript!";
console.log(message);

let username: string = "typescript";
let age: number = 25;
let isLoggedIn: boolean = true;

console.log(isLoggedIn);
//Any datatype
let value: any = "Hello";
value = 42; 
value = true; 
console.log(value);

let numbers: number[] = [1, 2, 3, 4];
let names: Array<string> = ["A", "Bb", "Cc"];
let city = "chennai";
let person: [string, number] = ["guest", 3];
console.log(person[0]);
console.log(person[1]); 

//city = 100;//the number is not assignable to string
let isCompleted: boolean = false;
console.log(isCompleted);

interface User {
    name: string;
    age: number;
  }
  enum Color { Red, Green, Blue }
  let myColor: Color = Color.Green;
  console.log(myColor);

let u: undefined = undefined;
let n: null = null;
//union types
let userId: string | number;

  
let user: User = { name: "brindha", age: 23 };

type Result = "pass" | "fail"
 
function verify(result: Result) {
  if (result === "pass") {
    console.log("Passed")
  } else {
    console.log("Failed")
  }
}
 
