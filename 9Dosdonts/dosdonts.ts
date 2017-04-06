
/**********************
	General types
***********************/

/* WRONG */
	function whatEver(s: String): String;

/* OK */
	function whatever1(s: string): string;

/**********************
	Callbacks types
***********************/

//Don’t use the return type any for callbacks whose value will be ignored:

/* WRONG */
	function myFunction(x: () => any) {
	    x();
	}

//Do use the return type void for callbacks whose value will be ignored:
//Using void is safer because it prevents you from accidently using the return value of x in an unchecked way:

/* OK */
	function myFunction1(x: () => void) {
	    x();
	}
	
/**********************
	Overloads and Callbacks
***********************/

//Don’t write separate overloads that differ only on callback arity:

/* WRONG */
	declare function beforeAll(action: () => void, timeout?: number): void;
	declare function beforeAll(action: (done: string) => void, timeout?: number): void;

//Do write a single overload using the maximum arity:

/* OK */
	declare function beforeAll(action: (done: string) => void, timeout?: number): void;

//Why: It’s always legal for a callback to disregard a parameter, so there’s no need for the shorter 
//overload. Providing a shorter callback first allows incorrectly-typed functions to be passed in because they match the first overload.


/**********************
	Function Overloads
***********************/

/* WRONG */
	declare function fn(x: any): any;
	declare function fn(x: HTMLElement): number;
	declare function fn(x: HTMLDivElement): string;

	var myElem: HTMLDivElement;
	var x = fn(myElem); // x: any, wat?

/* OK */
	declare function fn(x: HTMLDivElement): string;
	declare function fn(x: HTMLElement): number;
	declare function fn(x: any): any;

	var myElem: HTMLDivElement;
	var x = fn(myElem); // x: string, :)

//Why: TypeScript chooses the first matching overload when resolving function calls. 
//When an earlier overload is “more general” than a later one, 
//the later one is effectively hidden and cannot be called.


/**********************
	Use optional parameters
***********************/

/* WRONG */
interface Example {
    diff(one: string): number;
    diff(one: string, two: string): number;
    diff(one: string, two: string, three: boolean): number;
}

// /* OK */
interface Example {
    diff(one: string, two?: string, three?: boolean): number;
}



//Why:
//TypeScript resolves signature compatibility by seeing if any signature of the target
//can be invoked with the arguments of the source, and extraneuous arguments are allowed. 
//This code, for example, exposes a bug only when the signature is correctly written using optional parameters:

/**********************
	Use union types
***********************/

/* WRONG */
interface Moment {
    utcOffset(): number;
    utcOffset(b: number): Moment;
    utcOffset(b: string): Moment;
}

/* OK */
interface Moment {
    utcOffset(): number;
    utcOffset(b: number|string): Moment;
}







