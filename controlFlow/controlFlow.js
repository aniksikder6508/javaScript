//condition(if...else)
//if hour is between 6am and 12pm : Good moorning
//if hour is between 12pm and 6pm : Good afternoon
//otherwise: Good evening

let hour=20;

if(hour>=6 && hour<12){
    console.log('Good Morning');
}

else if(hour>=12 && hour<18){
    console.log('Good Afternoon');
}
else{
    console.log('Good evening');
}

//switch......case
let role='moderator';

switch(role){
    case 'guest':
        console.log('guest user');
    break;
    
    case 'moderator':
        console.log('Moderator');
    break;
    
    default :
        console.log('Unknown users');
}

//for loop(odd number)->scope
for(let i=1;i<=5;i++){
    if(i%2!=0){
    console.log('Anik Sikder',i);
}
}

for(let j=5;j>=1;j--){
    console.log(j);
}

//while loop
let i=0;
while(i<5){
    if(i%2==0){
        console.log('Anik Sikder',i);
    }
    i++;
}

//do....while{at least one time execute if statement is false}
let x=9;
do{
    if(x%2!==0){
        console.log(x);
    }
    i++;
}while(x<=5);

//for-in(like for each)

let person={
    name: 'Anik',
    age: 24
};
console.log(person);
person.name='Amit';
console.log(person);

for(let key in person){
    console.log(key,person[key]);
}

let array=['red','green','blue'];
for(let get in array){
    console.log(get,array[get]);
} 

//for of loop
let colors=['White','gray','yellow'];
for(let color of colors){
    console.log(color);
}

//continue&&break
let k=0;
while(k<=10){
    if(k%2===0){
        k++;
        continue;
    }
    console.log(k);
    k++;
}

//Exercise (Find out the maximum number from the two number)
function max(num1,num2){
if(num1>num2){
    return 'maximum number :'+num1;
}
else{
    return 'maximum number :'+num2;
}
}

let result=max(30,20);
console.log(result);

//(landscape or Portrait)
function isLandscape(width,height){
    return (width>height)?true:false;
}
console.log(isLandscape(400,300));

//fizzbuzz algorithm
function fizzBuzz(input){
 

if(typeof input!=='number'){
return NaN;
}

if((input%3===0)&&(input%5===0)){
    return 'FizzBuzz'
}
if(input%3==0){
    return 'Fizz';
}
if(input%5==0){
    return 'Buzz';
}

else{
    return input;
}
}   
const output=fizzBuzz('Anik');
console.log(output);


//Speed test
function speedTest(speed){

    speed=Math.floor(speed);
        if(speed<=74){
            return 'ok';
        }
        else{
            let check=speed-70;
            let point=Math.floor(check/5);
            if(point>=12){
                return 'Lisence Suspended';
            }
            else{
                return point;
            }
        
      
        }

}
console.log(speedTest(130));

//even-odd
let c=0;
function showNumbers(limit){

    for(let x=0;x<=limit;x++){
     
    let countValue =(x%2==0)?'even':'odd';
    /*if(x%2==0){
        console.log(x,'even');  
    }
    else{
        console.log(x,'odd');
    }*/
    console.log(x,countValue);
    }

}
let checkValue = showNumbers(10);

//String properties

function showProperties(obj){
    for(let key in obj){
        if(typeof obj[key]==='string'){
        console.log(key,movie[key]);
        }
    }

}  


let movie={
 title:'3idiots',
 releasedYear:2020,
 rating:4.5,
 director:'b'

};

showProperties(movie);

//Sum of multiples 3 and 5

function sum(limit){
    let sum=0;
    let sum2=0;
    for(let y=1;y<=limit;y++){
        if(y%3===0){
            sum=sum+y;
           
        }
        if(y%5==0){
            sum2=sum2+y;

        }
    }
    console.log(sum+sum2);

}

sum(10);

//Grade
const grade=[80,80,50];

function calculateGrade(marks){

const averageMarks=calculateAverage(grade);
if(averageMarks>=1 && averageMarks<=59){
    console.log('F');
}
if(averageMarks>=60 && averageMarks<=69){
    console.log('D');
}
if(averageMarks>=70 && averageMarks<=79){
    console.log('C');
}
if(averageMarks>=80 && averageMarks<=89){
    console.log('B');
}
if(averageMarks>=90 && averageMarks<=100){
    console.log('A'); 
}

}

function calculateAverage(array){
    let add=0;
for(let z in array){
     add=add+array[z];
}
return add/array.length;
}


calculateGrade(grade);

//star print
function showStars(rows){
for(let r=1;r<=rows;r++){
    let pattern ='';
    for(let c=1;c<=r;c++){
        pattern=pattern+'*';
        
    }
    console.log(pattern);
}
}
showStars(5);

//showPrime
  
function showPrime(limit){
    
    for(let i=2;i<=limit;i++){
        
        let count=0;
        for(j=2;j<i;j++){
            if(i%j===0){
                count++;
               break;
            }
        }
          
        if(count==0){
            console.log(i);
           
        }
    }
}
showPrime(20);
 
