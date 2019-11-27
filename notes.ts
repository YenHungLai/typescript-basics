// + before variable converts string to number
// The core primitive types in TypeScript are all lowercase!

// Do not do this, TS already knows it is a number
const n1: number = 5;
// or this
let n2: number = 5;
// This is good
let n3: number;

// Type inference
let n4 = 'text';
n4 = 123;

// JS does not have tuples, TS does

// Enum type

// Any type should be avoid whenever possible.

// Union type

// Type alias

// Function type
const func = input => {
	return input;
};

const temp: Function = func;

// unknown type, more restrictive than any type

// never type, meaning it never returns anything, not undefined, not null
