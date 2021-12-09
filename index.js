//First line of code in Javascript!
console.log('Rudimentary Java');
let name1 = 'cool';
let width = 12;
console.log(width);

//Objects
let person = {
    name: 'Nikhil',
    age: 18
};
/*
let student = {
    name = 'Nikhil', 
    age = 18,
    yearOfGrad = 2025,
    major = 'CS'
}
*/
function setName(name){
    this.name = name;
}
function getName(){
    return this.name;
}

console.log(person);

//Arrays
let javaTabs = ['Rudimentary JAVA', 'Conditionals and Loops'];
javaTabs[2] = 'Arrays';
console.log(javaTabs);

//Functions
function welcome(user, lastName){
    console.log('Welcome to my website ' + user + ' ' + lastName);
}
function cube(number){
    return number * number * number;
}
welcome('Nikhil', 'Munagala');
let number = cube(2);
console.log(number);
//String object
const another = new String('Nikhil');

//String primitive
const message = 'Welcome \n to JAVA';
console.log(message);

let hour = 12;
if(hour >= 6 && hour < 12){
    console.log('Good morning');
} else if (hour >= 12 && hour < 18){
    console.log('Good afternoon');
} else if(hour >= 18 && hour < 24){
    console.log('Good evening');
} else {
    console.log('Good night');
}
//Can't use switch statements for this. 
switch(hour){
    case (hour>= 6 && hour <= 12): 
        console.log('Good morning');
      break;
    case(hour >= 12 && hour <= 18):
        console.log('Good afternoon');
        break;
}
for(let i = 0; i < 5; i++){
    console.log('Hello, World');
}