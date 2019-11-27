const add = (n1: number, n2: number) => {
	return n1 + n2;
};

console.log(add(1, 2));

// This is not good practice
// const person: {
// 	name: string;
// 	age: number;
// } = {
// 	name: 'Jacob',
// 	age: 23
// };

const person1 = {
	name: 'Jacob',
	age: 23,
	hobbies: ['Sports', 'Cooking']
};

const strArr: string[] = ['a', 'b'];

for (const char of strArr) {
	// You get auto completion here for char.
	console.log(char.toUpperCase());
}

// Tuples
const agent: {
	level: [number, string]; // Tuple type
} = {
	level: [1, 'Elite']
};

// Enums
// Used when you need identifiers and human readable values.
enum Role {
	ADMIN,
	AUTHOR,
	READ_ONLY
}

const person = {
	name: 'Jacob',
	role: Role.ADMIN
};

console.log(Role.ADMIN);

// Union type
const combine = (n1: number | string, n2: number | string) => {
	if (typeof n1 === 'number' && typeof n2 === 'number') {
		return n1 + n2;
	} else return n1.toString() + n2.toString();
};

console.log(combine('Jacob', 'Amber'));
console.log(combine(10, 20));

// Literal types
// When you know exactly what value you want
const func = (input: 'A' | 'B') => {
	console.log(input);
};

func('B');

// Type alias
type Person = {
	name: string;
	age: number;
};

const jacob: Person = {
	name: 'Jacob',
	age: 23
};

// The interface key word has similar functionalities but differ in syntax and has some extra features.

// Functions, set return type, usually let TS do type inference.
const func2 = (n1: number, n2: number): number => {
	return n1 + n2;
};

const func3 = (printThis: number): void => {
	console.log(printThis);
};

// Function type.
// func can only be assigned to a function with two parameters and return a number
let temp: (a: number, b: number) => number;
temp = func2;

const func4 = (input: string, cb: (input: any) => void) => {
	return cb(input);
};

func4('Hello', () => {
	// This is ignored because cb is specified to ignore the return value
	return true;
});

// Interface
// Describes the structure of an object
interface Animal {
	species: string;
	age: number;
	roar(time: string): void;
}

const dog: Animal = {
	species: 'Dogos',
	age: 3,
	roar: () => console.log('Offfff')
};

// Intersection types
type Human = {
	age: number;
	name: string;
};

type God = {
	power: string;
	immortal: boolean;
};

type DemiGod = Human & God;
