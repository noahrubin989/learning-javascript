export default class User {
    constructor(fname, lname, age) {
        this.first = fname;
        this.last = lname;
        this.age = age;
    }
}

export function printFullName(p) {
    // Print fullname of person p
    console.log(`Full Name: ${p.first} ${p.last}`);
}

export function printAge(p) {
    // Print age of person p
    console.log(`User '${p.first} ${p.last}' is ${p.age} years old`);
}