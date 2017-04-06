/***************** BOOLEAN ******************/

let isDone: boolean = false;

/***************** NUMBER ******************/

let decimal: number = 6;

/***************** STRING ******************/

let color: string = "blue";
let sentence: string = `My favourite color is ${ color }.`

/***************** ARRAY ******************/

let list: number[] = [1, 2, 3];

let secondList: string[] = ['1', '2', '3'];

/***************** TUPLE ******************/

// Declare a tuple type
let x: [string, number];
// Initialize it
x = ["hello", 10]; // OK
// Initialize it incorrectly
x = [10, "hello"]; // Error

/***************** ENUM ******************/

enum Color {Red = 1, Green, Blue};
let c: Color = Color.Green;

// var Color;
// (function (Color) {
//     Color[Color["Red"] = 0] = "Red";
//     Color[Color["Green"] = 1] = "Green";
//     Color[Color["Blue"] = 2] = "Blue";
// })(Color || (Color = {}));
// ;
// var c = Color.Green;

/***************** ANY ******************/

let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean


/***************** VOID ******************/

function warnUser(): void {
    alert("This is my warning message");
}

/***************** NULL && UNDEFINED ******************/

// Not much else we can assign to these variables!
let u: undefined = undefined;
let n: null = null;

/***************** NEVER ******************/
//For throw excentionn

// Function returning never must have unreachable end point
function error(message: string): never {
    throw new Error(message);
}

/***************** TYPE ASSERTION ******************/
//Sometimes you’ll end up in a situation where you’ll know more about a value than TypeScript does.
//Usually this will happen when you know the type of some entity could be more specific than its current type.

let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;
let lengthstr: number = (someValue as string).length;