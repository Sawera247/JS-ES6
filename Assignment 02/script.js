// =============
//  QUESTION 01
// =============

document.write(`<h2>Marksheet</h2>`)

// Const because total marks are fixed
const total = 500;

// Let because obtained marks can vary
let english = 86;
let chemistry = 56;
let physics = 68;
let maths = 70;
let computer = 73;

// Calculate total obtained marks
let obtained = english + chemistry + physics + maths + computer;

// Calculate percentage
let percentage = (obtained / total) * 100;

// Decide grade
let grade = percentage >= 90 ? "A+" : percentage >= 80 ? "A" : percentage >= 70 ? "B" : percentage >= 60 ? "C" : percentage >= 50 ? "D" : "Fail";

// Display output
document.write(`
    English: ${english}<br>
    Chemistry: ${chemistry}<br>
    Maths: ${maths}<br>
    Physics: ${physics}<br>
    Computer: ${computer}<br>
    -------------------------<br>
    Total Marks: ${total}<br>
    Obtained Marks: ${obtained}<br>
    Percentage: ${percentage.toFixed(2)}<br>
    Grade: ${grade}<br>
`)