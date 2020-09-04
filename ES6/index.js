//String
/*var s=`         My name is Anik Sikder

                I am from cse background.

                            I am a software engineer.   `

console.log(s.trim());
*/
/*var age=17;
var name="Anik Sikder";

console.log("My name is "+name+" and I am "+age+" years old");
console.log(`My name is ${name} and I am ${age} years old and i am ${age<18?'not':''} adult`);
console.log(name.padStart(15,"*"));
console.log(name.padEnd(15,"$"));
console.log("S".repeat(10));
*/


//Arrow function
/*function add(a,b){
    return a+b;
}

let add=(a,b)=>a+b;
let sub=(a,b)=>a-b;
console.log(add(10,3));
console.log(sub(78,45));


var react={
    width:10,
    height:5,
    draw:function(){
        console.log("My height is : "+this.height);
    }
}

react.draw();
*/

//How to use default parametter

/*function sqr(n=8){
  return n*n;
}

console.log(sqr(4));
console.log(sqr());
*/

//Enhance object in ES6.ts

/*let a=10,b=20;

let obj={
    a,
    b,
    print(){
        console.log(this.a);
    }
}

console.log(obj);
obj.print();
*/
//Destruction for object 

/*
let person={

    name:"Anik Sikder",
    email:"amlansikder6508@gmail.com",
    address:{
        city:"Chittagong",
        country:"Bangladesh"
    }
}

let {name,email,address:{city,country}}=person;
console.log(name,email,city,country);
*/

//Destruction for array

/*let array=[10,20,30,40,50];

let [first,second,,,last]=array;

console.log(first,second,last);
*/

//Object to Array convert

/*let obj ={
    a:10,
    b:20
}
console.log(Object.entries(obj));

//Array to object convert

let objArr=[
    ["a",10],
    ["b",20]
]

console.log(Object.fromEntries(objArr));
*/

//What is itterator

/*let array=[17,89,23];

function createIterator(collection){
let i=0
return{
  next(){
    return{
      done:i>=collection.length,
      value: collection[i++]
    }
  }
}

}


let iterate=createIterator(array);

console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());
*/

//create iterator

/*let array=[17,78,58];

let iterate=array[Symbol.iterator]();

console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());

let str="TEXT"

let iterateText=str[Symbol.iterator]();

console.log(iterateText.next());
console.log(iterateText.next());
console.log(iterateText.next());
console.log(iterateText.next());
console.log(iterateText.next());
*/

//generator

/*let array=[14,27,63];

function* generator(array){
  for(i=0;i<array.length;i++){
    yield array[i];
  }
}

let it=generator(array);
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
*/

//How to use set

/*let set =new Set([1,2,3])
set.add(5);
set.delete(3);
//set.clear(); 
console.log(set);
console.log(set.size);

console.log(set.has(2));
console.log(set.keys());
*/

//how to use map
/*let map=new Map([
  ["a",10],
  ["b",20],
  ["c",30]
])
map.set("e",40);
map.delete("c");
//console.log(map);
//console.log(map.size);
//console.log(map.values());
//console.log(map.keys());
//console.log(map.entries());
//console.log(map.get("b"));


//map.forEach((v,k)=>{
//  console.log(k,v);
//  })
//map.clear();
//console.log(map);


for(let [k,v] of map)
{
      console.log(k,v);
} 
*/


/*function rectangle(width,height){
  this.width=width,
  this.height=height
}

rectangle.prototype.draw=function(){
  console.log(this);
  console.log("Drawing.....");
}                    

let rect=new rectangle(10,20);
*/



//class declaration

/*
class rectangle {
  constructor(width,height){
    this.width=width;
    this.height=height;
    this.another=function(){
      console.log("This is another function");
    }

  }
  name="Anik Sikder";

  test=function(){
    console.log("This is test function");
  }

  draw(){
    console.log("Class Drawing");
    console.log(this);
  }
}

let rect=new rectangle(30,40);

console.log(rect);
rect.draw();
*/


//Hide properties from class(Abstruct)
/*
const _radius=Symbol();
const _name=Symbol();
const _draw=Symbol();

class circle{
  constructor(radius,name){
    this[_radius]=radius;
    this[_name]=name;
  }
  [_draw](){
    console.log("Drawing...");
  }

  //get radius(){
  //return _radius.get(this);
  //}

  //set radius(v){
  //  _radius.set(this,v);
  //}
  
}

let c1=new circle(2,"CRED");
c1._radius;
c1._draw; 
let key = Object.getOwnPropertySymbols(c1)[1];
console.log(c1[key]);
//c1.radius=100;
//console.log(c1.radius);
*/


//Inheritance

class shape{
   constructor(color){
    this.color=color;
   }
   draw(){
     console.log("Drawing");
   }
}

class rectangle extends shape{
  constructor(color,width,height){
    super(color);
    this.width=width;
    this.height=height;
  }
  calculate(){
    console.log(this.height*this.width);
  }
}


let r=new rectangle("Green",47,196);
console.log(r);
r.draw();
r.calculate();  