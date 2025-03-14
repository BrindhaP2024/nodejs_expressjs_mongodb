var message = "Hello, TypeScript!";
console.log(message);
var username = "typescript";
var age = 25;
var isLoggedIn = true;
console.log(isLoggedIn);
//Any datatype
var value = "Hello";
value = 42;
value = true;
console.log(value);
var numbers = [1, 2, 3, 4];
var names = ["A", "Bb", "Cc"];
var city = "chennai";
var person = ["guest", 3];
console.log(person[0]);
console.log(person[1]);
//city = 100;//the number is not assignable to string
var isCompleted = false;
console.log(isCompleted);
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var myColor = Color.Green;
console.log(myColor);
var user = { name: "brindha", age: 23 };
function verify(result) {
    if (result === "pass") {
        console.log("Passed");
    }
    else {
        console.log("Failed");
    }
}
