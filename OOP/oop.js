/*const circle={

    radius:1,
    location:{
      x:1,
      y:2
      },
    draw:function(){
      console.log('Drawing');
    }
  
  
    };
  
    console.log(circle);
    circle.draw(); 
    console.log(circle.radius);
    console.log(circle.location.y);
    
    //Factory function
  console.log('Factoory function');

  function createCircle(radius){
      return{
        radius,
        
        draw: function(){
          console.log('Drawing');
        }
      
      };

  }

  const circle2=createCircle(3);
console.log(circle2);
createCircle(4).draw();

//Constructor Function
/*console.log('Constructor Function');
 function createCircle(radius){
    this.radius=radius;
    this.draw = function(){
      console.log('Drawing');
    }

 };

 const Circle=new createCircle(5);
 console.log(Circle);
 console.log(Circle.radius);  
 Circle.draw();
 */
//Enumeration
/*if('color' in Circle){
  console.log('Circle has a radius');
}*/

//Rectangle
console.log("Rectangle");
/*
let rect={
  width:100,
  height:50,

  draw: function(){
    console.log("I am rectangle");
    this.printProperties();
  },

printProperties: function(){
  console.log("My width is : "+this.width);
  console.log("My height is :"+this.height);
  
  
}

}

rect.draw();

let another={
  height:10,
  width:20,
  print:rect.printProperties 

};

another.print();
*/
//Create Class using factory patterns
console.log('Create class using factory function');

/*var createRect=function(width,height){

  return{
   width:width,
    height:height,
  
    draw: function(){
      console.log("I am rectangle");
      this.printProperties();
    },
  
  printProperties: function(){
    console.log("My width is : "+this.width);
    console.log("My height is :"+this.height);
    
    
  }
  
  }
  

}

var value1= createRect(10,47);

value1.draw();
console.log(value1);

var value2=createRect(60,20);

value2.draw();
*/
//create  class using construction functiuon
console.log('Create class using construction function');

var createRect=function(width,height){

  this.width=width;
  this.height=height;
  
    this.draw= function(){
      console.log("I am rectangle");
      this.printProperties();
    },
  
  this.printProperties=function(){
    console.log("My width is : "+this.width);
    console.log("My height is :"+this.height);
    
    
  }
  
  
  

}

var value1= new createRect(10,47);

value1.draw();
console.log(value1);

var value2=new createRect(60,20);

value2.draw();

console.log("Call,apply,bind");

 /*const great=function(c,d){
console.log(this.a+" "+this.b+" "+c+" "+d);
};

great.call({a:10,b:90},45,50);
great.apply({a:13,b:47},[87,94]);

let result=great.bind({a:7,b:4},17,5);
result();
*/
console.log("Abstruction");

  /*var printProperties=function(){
  console.log("My widthg is :"+width);

    console.log("My height is :"+height);

  }

  this.draw=function(){
      console.log("I am a rectangle");
      printProperties();
        console.log('Position of x is: '+location.x);
          console.log("Positon of y is :"+location.y);
  }
Object.defineProperty(this,"location",{
    get:function(){
      return location;
    },
    set: function(value){
      location=value;
    }

})


}

var result = new circle(7,8);
//result.draw();
result.location={
  x:456,
  y:-123,
  

};
result.location;*/


