console.log('Hello world js');

let firstName ='Anik';//string
let lastname='Sikder';

console.log(lastname);


let interestRate = 0.12;//number literal
interestRate=1;

console.log(interestRate);

//constant variable never change value key->const
const rate = 100;
//rate =200;
console.log(rate);

//primitive datatype
//typeof 
let isapproverd=false;
let name=undefined;
let selectedcolor = null;

//Reference type
//object
let person = {
    name: 'Moni',
    age:87

};

console.log(person);


//Dot notation
person.name='bala';

console.log(person.name);
console.log(person);

//Array(Any datatypes are allowed)
let selectcolor=['Red','Blue'];
console.log(selectcolor);
//access 2nd element
console.log(selectcolor[1]);

selectcolor[2]=5.06;
console.log(selectcolor);

console.log(selectcolor.length);
console.log(selectcolor.length-1);


let car={
    name: 'COROLLA',
    color:'WHITE',
    seat:6
  };
  
  console.log(car);
  car.seat = 'six';
  console.log(car);
  // name, colour, seat
  let select = 'color';
  car[select] = 'Black';
  console.log(car);

//function(performing a task)
function great(){
    console.log('Hello Anik(function)');
}
great();

function great2(fname,lname){
    console.log('hello '+fname+' '+lname);
}
great2('Anik','Sikder');

//function(calculating a value)
function square(number){
return number*number;
}
let x=square(3);
console.log(x);



