//First line of code in Javascript!
console.log('Rudimentary Java');
let name1 = 'cool';
let width = 12;
console.log(width);

//Objects
let student = {
    name: 'Nikhil',
    age: 18,
    yearOfGrad: 2025,
    major: 'CS'
};
console.log(student);

function setName(name){
    this.name = name;
}
function getName(){
    return this.name;
}

//Arrays
let javaTabs = ['Rudimentary JAVA', 'Conditionals and Loops'];
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

//Encapsulation
let freshman = {
    name: 'Nikhil Munagala',
    age: 18,
    major: 'Computer Science BS',
    getCourses:function(num){
        for(let i = 0; i < num; i++){
            var a = prompt("Enter first CS course: ");
            document.write(a);
        }
    }
};

//Abstraction

//Inheritance
//Polymorphism(element.render)

//constructor
function Remote(length, width){
    this.length = length;
    this.width = width;
    this.draw = function(){
        console.log('draw rectangle');
    }
}
const remote = new Remote(1,2);

function Button(length, width, color){
    this.length = length;
    this.width = width;
    this.color = color;
    this.draw = function(){
        console.log('draw button');
    }
}
const button = new Button(12, 24, "red");

function collegeStudent(){
    return{
        
    }
}