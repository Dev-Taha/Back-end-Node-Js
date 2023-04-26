function sum(a, b){
    return a + b;
}

console.log("Sum : ",sum(5,8));

const multy = function (a, b){
    return a * b;
}
console.log("multy : ",multy(5,9));

const div = (a, b) => {
    return a/b;
}

// special syntax for arrow function
const reminder = (a, b) => a % b; // already return reminder for arg
console.log("Reminder% : ",reminder(15,19));

console.log("div : ",div(15,5));

const person = {
    firstName: "Ahmed",
    lastName: "Taha",
    address: "Gaza",
    Math : 88,
    SQA : 89,
    gpa: function (){
        return `(${this.Math} + ${this.SQA}) / 2`; // Bugs
    },
    fullName: function () {
        return `${this.firstName} ${this.lastName}`;
    }
}

console.log(person.gpa())
