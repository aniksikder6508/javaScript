const numbers=[3,4];

numbers.push(5,6);
numbers.unshift(1,2);
console.log(numbers);
numbers.splice(2,0,'a','b');
console.log(numbers);

//Find an element
const numbers2=[4,5,5,6,7];
console.log(numbers2.indexOf(6));
console.log(numbers2.lastIndexOf(5));
//Check value exist or not

console.log(numbers2.indexOf(7)!=-1);
console.log(numbers2.includes(7));

//finds elements reference type
const courses=[
    {id:1,name:'java'},
    {id:2,name:'c#'}
];
const result = courses.find(function(result){
    return result.name==='java';
}) 

console.log(result);

const result2 = courses.findIndex(function(result2){
    return result2.name==='java';
}) 

console.log(result2);

let country1=['Bangladesh','India'];
let country2=['Pakistan','Nepal'];

let country3=country1.concat(country2);

console.log(country3);

//Array addition(Anisul Islam)

let addNum=[10,20,30,40,50];
let sum=0;

/*for(var key in addNum){
    
    sum=sum+addNum[key];
}*/

for(var i=0;i<5;i++){
    
    sum=sum+addNum[i];
}
console.log(sum);

//Another one(Anisul Islam)

var num = new Array();
var sum2=0;

/*for(var i=0;i<5;i++){

    num[i]=parseInt(prompt("Enter a Number :"));
}*/


/*for(var i=0;i<5;i++){
    console.log(num[i]);
    sum2=sum2+num[i];
}*/

for(var key in num){
    
    sum2=sum2+num[key];
}

//console.log(sum2);
//Find a number
let arr=[5,9,6,10,12];
for(i=0;i<arr.length;i++){
    if(arr[i]===10){
        console.log(i);
    }
  
}

//Multidimantional array

let value=[

    [78,71,80,90],
    [80,75,90,86],
    [71,75,79,80]



];

for(let i=0;i<value.length;i++){

    for(let j=0;j<value[i].length;j++){
        
        console.log('Index :'+i+' '+'value :'+' '+value[i][j]);
    }

}

//Increase value by 5

let incValue=[5,10,15,20,25];

for(let i=0;i<incValue.length;i++){
    incValue[i]=incValue[i]+5;
}

for(let i=0;i<incValue.length;i++){
    console.log(incValue[i]);
}

//If index even insert 0

let evenValue=[7,3,4,8,9];

for(let i=0;i<evenValue.length;i++){
    if(i%2==0){
        evenValue[i]=0;
    }
}

for(let i=0;i<evenValue.length;i++){
  console.log(evenValue[i]);
}

//evenNumber && oddNumber Summation

let evenSum=[1,2,3,4,5];
let sumEven=0;
let sumOdd=0;

for(let i=0;i<evenSum.length;i++){
    if(i%2==0){
        sumEven=sumEven+evenSum[i];
    }
}
console.log('Sum of even index : '+sumEven);

for(let i=0;i<evenSum.length;i++){
    if(i%2!==0){
        sumOdd=sumOdd+evenSum[i];
    }
}
console.log('Sum of odd index : '+sumOdd);

//Reverse
for(let i=evenSum.length-1;i>=0;i--){
    console.log(evenSum[i]);
}
//console.log(evenSum.reverse()); [reverse method]

//sorting an array
const subject=[{code:101,name:'DataStructure'},
                {code:102,name:'algorithoms'}
            ];
subject.sort(function(a,b){
    numA=a.name.toUpperCase();
    numB=b.name.toUpperCase();

    if(numA<numB){
        return -1;
    }
    if(numA>numB){
        return 1;
    }
    else {
        return 0;
    }
});

console.log(subject);

//Exercise->1

function arrayFromRange(min,max){
    let arr=[];
 for(i=min;i<=max;i++){
    arr.push(i);
}
return arr;
};

const numb=arrayFromRange(-10,-4);
console.log(numb);

//Exercise->2(check number exist or not)

const test=[1,2,3,4];

function checkArray(testCheck,searchElement){
let count=0;
     for(i=0;i<testCheck.length;i++){

         if(testCheck[i]===searchElement){
             count++;
             break;
         }
  
     }

     if(count!=0){
            return true;
     }
     else{
         return false;
     }
}

const checkResult = checkArray(test,4);
console.log(checkResult);

//Exercise->3

const number3=[1,2,3,4,1,1];

function except(array,exclude){

    newArr=[];

    for(let key in array){
        if(!exclude.includes(array[key])){
          newArr.push(array[key]);  
        }
    }
return newArr;
}

const output=except(number3,[1,2]);
console.log(output); 

//Exercise->4

const number4=[1,2,3,4];

function move(array,index,offset){

  const removeElement=  array.splice(index,1)[0];
    array.splice(offset,0,removeElement);
  
 
return array;
}

const output4 = move(number4,1,3);
console.log(output4);

//Exercise->5
const number5=[1,2,3,4,1];

function countOccurrences(array, searchElement){
let c=0;
for(let key in array){
    if(array[key]===searchElement){
    
    c++;
    }
}

if(c!==0){
    return c;

}
else{
    return c;
}

}


const countElement=countOccurrences(number5,11);
console.log(countElement);

//exercise->6

const number6=[9,8,6,12];

function getMax(array){
  let max=array[0];
  let min=array[0];
 
    for(let i=0;i<array.length;i++){
        if(max<array[i+1]){
            max=array[i+1];
        }
        if(min>array[i+1]){
            min=array[i+1];
        }
    }

   let getArray=[];
   getArray.push(max);
   getArray.push(min);
    //return max+" "+min;
    return getArray;
}

const maxResult = getMax(number6);
console.log(maxResult);

//exercise->7

const movies=[

{title:'a', year:2018,rating:4.5},
{title:'b', year:2018,rating:4.3},
{title:'c', year:2018,rating:3},
{title:'d', year:2017,rating:4.5}

];

//All the movies in 2018 with rating>4
//Sort them by their rating
//Descending order
//Pick their title


const filtered=movies.filter(function(array){

        return array.year==2018 && array.rating>4;
}


);

    const sorted=filtered.sort(function(a,b){
        if(a.rating<b.rating){
        return 1;
        }
        if(a.rating>b.rating){
            return -1;
        }
        else{
            return 0;
        }
    }


);

console.log(sorted);

//exercise-8
let testArray = [];

testArray[0]=10;
testArray[1]=20;

console.log(testArray);