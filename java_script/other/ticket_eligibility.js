function student_eligibility (age, isStudent) {
    if ((age < 18) || isStudent) {
        return "Discount ticket granted"
    } else {
        return "Regular ticket only"
    }
}

let age = 20;
let isStudent = true;

// TODO: Write an if/else statement using booleans
// to decide which message to log.

console.log(student_eligibility(age, isStudent));