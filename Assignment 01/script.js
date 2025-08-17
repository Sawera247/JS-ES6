// =============
//  QUESTION 01
// =============

document.write(`<h2>Your Biodata Details</h2>`)

// Constant values (won't change)
const myName = "Sawera Fayyaz";
const email = "fayyazamajeed@gmail.com";
const instituteName = "Jawan Pakistan";

// Let values (can change)
let age = 17;
let phoneNumber = 923078994616;
let occupation = "Software Developer";
let education = "Matriculation";
let city = "Karachi";

// Template literals to show biodata
document.write(`
    Name: ${myName}<br>
    Age: ${age}<br>
    Occupation: ${occupation}<br>
    Email: ${email}<br>
    Phone Number: ${phoneNumber}<br>
    Institute Name: ${instituteName}<br>
    Education: ${education}<br><br>
`);

// =============
//  QUESTION 02
// =============

document.write(`<h2>Var vs Let vs Const</h2>`)

// var examples

var a = "faraz"; 
document.write(`
    Var declare: ${a}<br>
`)

// 1. reassign
a = "ayaz";
document.write(`
    Var reassign: ${a}<br>
`)

// 2. redeclare
var a = "zara"; 
document.write(`
    Var redeclare: ${a}<br>
`)

// 3. in function-scope
function vars(){
    var a = "heer"; 
    document.write(`
        Var in function-scope: ${a}<br>
    `)
}
vars();

// 4. hoisting 
document.write(`
    Var hoisting: ${b}<br>
`)
var b = "qais";

// 5. without declaring
c = "qais"; 
document.write(`
    Var without declaring: ${c}<br><br>
`)

// let examples

let d = "faraz"; 
document.write(`
    Let declare: ${d}<br>
`)

// 1. reassign
d = "ayaz";
document.write(`
    Let reassign: ${d}<br>
`)

// 2. in bock-scope
if(true){
    let e = "zara"; 
    document.write(`
        Let in bock-scope: ${e}<br>
    `)
};

// 3. in function-scope
function lets(){
    let f = "heer"; 
    document.write(`
        Let in function-scope: ${f}<br>
    `)
}
lets();

// 4. inside loops/conditions
for(let i = 0; i < 1; i++){
    document.write(`
        Let inside loops/conditions: ${i}<br><br>
    `)
}

// const examples

const h = "faraz"; 
document.write(`
    Const declare: ${h}<br>
`)

// 1. in bock-scope
if(true){
    const j = "zara"; 
    document.write(`
        Const in bock-scope: ${j}<br>
    `)
};

// 3. in function-scope
function consts(){
    const k = "heer"; 
    document.write(`
        Const in function-scope: ${k}<br>
    `)
}
consts();

// 4. with arrays
const arr = ['apple', 'mango', 'banana'];
arr.push('orange');
document.write(`
    Const with arrays: ${arr}<br>
`)

// 4. with objects
const obj = {name: "Sawera", age: 17};
obj.education = "Matriculation";
document.write(`Const with objects:<br>`);
for (let key in obj) {
    document.write(`${key}: ${obj[key]}<br>`);
}