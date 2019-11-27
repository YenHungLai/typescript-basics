var add = function (n1, n2) {
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
var person1 = {
    name: 'Jacob',
    age: 23,
    hobbies: ['Sports', 'Cooking']
};
var strArr = ['a', 'b'];
for (var _i = 0, strArr_1 = strArr; _i < strArr_1.length; _i++) {
    var char = strArr_1[_i];
    // You get auto completion here for char.
    console.log(char.toUpperCase());
}
// Tuples
var agent = {
    level: [1, 'Elite']
};
// Enums
// Used when you need identifiers and human readable values.
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["AUTHOR"] = 1] = "AUTHOR";
    Role[Role["READ_ONLY"] = 2] = "READ_ONLY";
})(Role || (Role = {}));
var person = {
    name: 'Jacob',
    role: Role.ADMIN
};
console.log(Role.ADMIN);
// Union type
var combine = function (n1, n2) {
    if (typeof n1 === 'number' && typeof n2 === 'number') {
        return n1 + n2;
    }
    else
        return n1.toString() + n2.toString();
};
console.log(combine('Jacob', 'Amber'));
console.log(combine(10, 20));
