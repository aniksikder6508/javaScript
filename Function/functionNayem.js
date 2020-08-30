//Function
console.log('Normal Functiom');

function sub(){
    let a=20;
    let b=10;
    console.log(a-b);
}

sub();

//Constructive function
console.log('Constructive Function');

var arr1=[1,2,3];
var arr2=[4,5,6];
var arr3=[7,8,9];

function add(array){
  let add=0;
  for (let key in array){
    add=add+array[key];
  }
  return add;
}

const storeValue = add(arr1);
console.log(storeValue);

console.log(add(arr2));
console.log(add(arr3));


//Return anything anything from a string
console.log('Return anything from a string');

function person(name,email){
    
    return{
            Name: name,
            Email:email
    };

}

const showDetails=person('Anik','amlansikder6508@gmail.com');
console.log(showDetails);


//Function Expression
console.log("Function Expression");

let addition=function(a,b){
    return a+b;
}

const show=addition;
console.log(show(30,10));

//Time Set Function
console.log('Time set function');

setTimeout(function(){
    console.log('I will call after 5 second');
},5000)


//InnerFunction
console.log('Inner Function');

function something(greet,name){

    function  getFirstName(){

            if(name){
                const parts=name.split(" ");
                firstName=parts[0];
                return firstName;  
            }
            else{
                return "";
            }

        }
          return greet+" "+getFirstName();
    }

    console.log(something('Good Morning','Anik Sikder'));

//Pure Function
console.log('Pure function');

function sqr(n){
    return n*n;
}

console.log(sqr(2));
console.log(sqr(4));
console.log(sqr(6));

//First Class Function
console.log('First class Function');
//1. A function can be stored in a Variable

function addNum(a,b){
    return a+b;
}

const store=addNum;
console.log(store(5,6));

//2. A function can be stored in an array

let arr=[1,2,store(2,2)];
console.log(arr);

//3.A function can be stored in an object

 const obj={

    Name:'Anik Sikder',
    Id :'17-33917-1',
    Value: store,
    

 };

 console.log(obj.Value(40,10));
 console.log(obj.Id);
 
 //Higher order function

console.log('Higher order function');

function sum(a,b){
    return a+b;
}

function manipulate(a,b,fun){
    c=a+b;
    d=a-b;
    function mulltiply(){
        let m=fun(a,b);
        return c*d*m;
    }

    return mulltiply();


}

const manipul= manipulate(3,4,sum);
console.log(manipul);

//CallBack function
console.log('CallBack Function');

//Normal
/*function sample(a,b){
    let c=a+b;
    let d=a-b;
    let result=sum(c,d);
    return result;

}

function sum(a,b){
    return a+b;
}

console.log(sample(5,8));
*/
//High
function sample(a,b,cb){
    let c=a+b;
    let d=a-b;
    let result=cb(c,d);
    return result;
  }
  
  function sum(a,b){
    return a+b;
  }
  
  let result=sample(5,8,sum);
  
  
  console.log(result);
  
  let result2=sample(5,8,function(c,d){
  return c-d;
  }) 
  
  console.log(result2);

  //forEach implementation
  console.log('Foreach function implementation');
  let crr=[10,78,47,31,28];
  let addi=0;

function forEach(array,cb){
  for (i=0;i<array.length;i++){
    cb(array[i],i,crr);
  }
  


}

forEach(crr,function(value,index,array){
        //addi+=value;
        crr[index]=value+2;
})

//console.log(addi);
console.log(crr);





//Map Function
console.log('Map Function');

let mapArr=[1,2,3];

function mapFn(array,cb){
for(let i=0;i<array.length;i++){
    
    cb(array[i]);

    
}


}


let newArr=[];
function showResult(gv){
    sgv=gv*gv;
   
   newArr.push(sgv);  

return newArr;
}

 mapFn(mapArr,showResult);
 console.log(newArr);  

 //Another Map function
 /*var arr=[1,2,3];

function myMap(arr,cb){
  let newArr=[];
  for(i=0;i<arr.length;i++){
    //store=arr[i]*arr[i];
   var temp= cb(arr[i]);
    newArr.push(temp);
  }
return newArr;
}

 console.log(myMap(arr,function(value){
 return value*value*value;
}));*/

//Filter Implementation(using filter function)
console.log('Filter implemenatation(using filter function)');

let arr4=[4,8,1,3,5,6,4,3,9];

const filtered=arr4.filter(function(value){
  return value%2==0;
})

console.log(filtered);

//Raw implement
console.log('Raw implementation');

let arr5=[4,8,1,3,5,6,4,3,9];


function filterfun(arr5,cb){
let newArr5=[];
    for(let i=0;i<arr5.length;i++){
   if(cb(arr5[i])){
     newArr5.push(arr5[i]);
    }
    
}
return newArr5;
}
var final=filterfun(arr5,function(value){
  return value%2===0;
})

console.log(final);

//Reduce function\
console.log('Reduce function');


let arr6=[1,2,3,4,5];

let suma=arr.reduce(function(prev,curr){
  return prev+curr;
},0);

let max=arr.reduce(function(prev,curr){
  return Math.max(prev,curr);

},0);
console.log(max);


console.log(suma);

///Raw implementation
/*let arr=[1,2,3,4,5];

function myReduce(arr,cb,acc){


for(let i=0;i<arr.length;i++){
  acc=cb(acc,arr[i])
}

return acc;
}

let sum= myReduce(arr,function(prev,curr){
  return prev+curr;
},0);

console.log(sum);

let max= myReduce(arr,function(prev,curr){
  return Math.max(prev,curr);
},0);

console.log(max);
*/ 


//Find Function
console.log('Find function');

/*let arr=[1,2,9,7,4];

var result=arr.find(function(value,index){
return value===9;
});

console.log(result);
*/

//Raw Implementation
console.log('Raw implementation');


/*function findElement(array,cb){

  for(i=0;i<array.length;i++){
      if(cb(array[i])){
        return true;
  }
  }


}

var result=findElement(arr,function(value){
  return value==9;
});
console.log(result);
*/

//Return a function from another function
console.log('Return a function another function');
/*function base(b){
  function power(n){
    mul=1;
    for(let i=0;i<n;i++){
      mul=mul*b;
    }
    return mul;
  }
return power;
}

let result=base(2);
console.log(result(10));
*/
console.log('Function composition');
/*function print(imp){
   console.log(imp);
}

function multiplyByFive(n){
  return n*5;
}

function add(a,b){
  return a+b;
}

print(multiplyByFive(add(3,5)));
*/




