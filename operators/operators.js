//opertators[+,-,*,/,%,**,++,--]
let z=2;
let y=4;
console.log(z**y);
console.log(y++);
console.log(++y);
console.log(z--);
console.log(--z);

//comparison operators
let a=10;
console.log(a>9);
console.log(a>=9);
console.log(a<9);
console.log(a<=9);
console.log(a==9);
console.log(a==10);
console.log(a!=10);

let x=1;
//value check
console.log(x==1);
console.log(x=='1');
//type+value check
console.log(x==='1');

//ternary operator
let i=1;
let j=i==2?'yes':'no';
console.log(j);

let point=200;
let type=point>100?'gold':'silver';
console.log(type);

//logical operators(&&)
let highIncome=true;
let goodCreditScore=true;
let elegableForLoan=highIncome&&goodCreditScore;
console.log('elegibleForLoan : '+elegableForLoan);
//(||)
 highIncome=false;
 goodCreditScore=true;
 elegableForLoan=highIncome||goodCreditScore;
console.log('elegibleForLoan : '+elegableForLoan);
//(!)
console.log('applicationRefuse :'+!elegableForLoan);

//non boolean
let userColor='red';
let defaultColor='blue';
let anotherColor='white'
let currentColor=userColor||defaultColor||anotherColor;
console.log(currentColor);

userColor=undefined;
defaultColor='blue';
currentColor=userColor||defaultColor;
console.log(currentColor);

//bitwise operators
const readPermission=4;
const writePermission=2;
const executiomPermission=1;

let myPermission=0;
myPermission=myPermission|readPermission|writePermission;
let check=myPermission&readPermission?'yes':'no';
console.log(check);

// 1 = Switch On  -- 001
// 2 = Switch Off--  010
//4 = Switch Damage--100

let on = 1;
let off= 2;
let damage=4;
result=0;
result= on | off | damage;//0000000

let value=(result&on)?'on':'False';
console.log(value);

let dataRes = 3 * 4 / 2 + 1;
console.log(dataRes);


//precedence
let value=(1+2)*4;
console.log(value);

//swaping veriable
let swap1=2;
let swap2=4;
let result=swap1;
swap1=swap2;
swap2=result;
console.log(swap1);
console.log(swap2);

