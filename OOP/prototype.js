/*1.1
function person(name,age){
    this.name=name;  
    this.age=age;
    }
    
    var p1= new person("Anik",47);
    console.log(Object.getPrototypeOf(p1));
    console.log(person.prototype);
    */

   /*function square(width){
    this.width=width;
   
  }
  
  square.prototype={
     draw : function(){
      console.log("Draw");
      console.log("My width is :"+this.width);
    }
  }
  let result=new square(10);
  result.draw();
  console.log(result.width);
  
  let result2=new square(30);
  result2.draw();
  */

//1.2protype inheritence in javaScript

console.log("Prototype inheritence in javaScript");

/*function shape(){

}

shape.prototype={
  common:function(){
    console.log("I am a common method");
  }
}

function square(width){
  this.width=width;
}
square.prototype=Object.create(shape.prototype);

square.prototype.draw=function(){
    console.log("Drawing");
  }

let sp=new shape();
let sqr=new square(87);

function circle(){

}

circle.prototype=Object.create(shape.prototype);

let cir= new circle();
cir.common();

*/

//1.3Reset constructor property after inheritance
/*console.log("Reset constructior property after inheritance");

function shape(){

}

shape.prototype.common=function(){
    console.log("I am a common method");
  }


function square(width){
  
  this.width=width;
}
square.prototype=Object.create(shape.prototype);
square.prototype.constructor=square;

square.prototype.draw=function(){
    console.log("Drawing");
  }

let sp=new shape();
let sqr=new square(87);
sqr.common();

function circle(){

}

circle.prototype=Object.create(shape.prototype);

let cir= new circle();
cir.common();

*/

//1.4 Calling super with call method

function extend(parent,child){
  child.prototype=Object.create(parent.prototype);
  child.prototype.constructor=child;
}


function shape(color,height){
  this.color=color;
  this.height=height;
}
shape.prototype={
  common:function(){
    console.log("This is common method .");
  }
}


function square(width,color,height){
  shape.call(this,color,height);
  this.width=width;
}



extend(shape,square)

square.prototype.draw=function(){
  console.log("Drawing");
}

//let sp=new shape();
let sqr=new square(69,"green",100);

sqr.common();


function circle(color,height){
shape.call(this,color,height);
}

extend(shape,circle);
//overriding
circle.prototype.common=function(){

console.log("This is converted to circle.");
//if you want to access parent common method 
shape.prototype.common.call(this);
}

let cir= new circle("white",87);
cir.common();


/*updated
let array=[shp,sqr,cir];

for(let key in array){
  array[key].common();
}
*/

//inheritance and composition mixing together


/*function mixing(target,...source){
   Object.assign(target.prototype,...source);
}


let canwalk={
  walk:function(){
    console.log("walking");
  }
}

let canEat={
  eat:function(){
    console.log("Eating");
  }
}

let canSwim={
  swim:function(){
    console.log("Swiming");
  }
}



function person(name){

  this.name=name;

}
//Object.assign(person.prototype,canwalk,canEat);
mixing(person,canwalk,canEat);

let p = new person("Anik Sikder");

console.log(p);

function fish(name){
  this.name=name;
}

mixing(fish,canEat,canSwim);

let f=new fish("Gold Fish");

console.log(f);
*/
