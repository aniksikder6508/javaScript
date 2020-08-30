//Function Declaration

walk();
function walk(){
    console.log("Walking");
}

//Annonimus Function

let run=function(){
    console.log("Running");
}

run();

//Arguments

function sum(){

    let total=0;

    for(let key in arguments){
        total=total+arguments[key];
    }
    return total;
}

console.log(sum(1,2,3,4,5));

//The Rest Operator

function add(discount,...prices){
    let total=0;
    for(let key in prices){
        total+=prices[key];
        
    }
return total*(1-discount);
}

console.log(add(0.1,20,30));

//Default Parameter

function interest(principal,rate=3.5,year){
    //rate=rate||3.5;
    //year=year||5;
return principal*rate/100*year;
}

console.log(interest(10000,undefined,5));

//(Getter and Setter) And (try and Catch)

const person={

    firstName:"Amlan",
    lastName:"Sikder",

   /* fullName:function(){
        return person.firstName+" "+person.lastName; 
    }*/

   get fullName(){
        return person.firstName+" "+person.lastName; 
    },

    set fullName(value){
        if(typeof value!=='string'){
            throw new Error('Enter a string');
        }
        else{
        const parts=value.split(' ');
       if(parts.length!==2){ 
           throw new Error("Enter firstName and lastName");
       }
        this.firstName=parts[0];
        this.lastName=parts[1];
    

}

}
};

try{
 person.fullName='Anik Sikder';   
}

catch(e){
alert(e);
}
console.log(person.fullName);
console.log(person); 



//This keyWord(Sayanta Qstn)
function video(name){
    this.name=name;
}

const v=new video('3idiots');//Create a new empty object {}
console.log(v.name);

/*
function add(name){
    this.name=name;
  }
  
  
  const value= new add('Anik Sikder');
  console.log(value.name);
  
  
  const person={
    
    Name :'Anik Sikder',
    Age : 24,
    
    showDetails(){
          
          return this.Name+" "+this.Age;     
      
    }
    
  }
  
  console.log(person.showDetails());

*/

/*
Take Two String as FirstName and LastName.
One value as age. 
Output: 
FirstName:___
LastName:___
Age: ____

Fix Errors:
If FirstName is blank Show and Error as please input FirstName
If LastName is blank Show and Error as please input LastName
If age is blank show error message For input age
If all input value blank also show error.
If FUlL-Name length greater than 20 then show length error.
If Name Input value is not string and Age input Value is not Number also show error message 
If Age less then 18 also show Age Limitation Error.

*/

function showDetails(fname,lname,age){

    if(!age&&!fname&&!age){
        throw new Error('Error');
    }

    else if(!fname){
        throw new Error('Please input first Name');
    }
    else if(!lname){
        throw new Error('Please input last Name');
    }
    else if(!age){
        throw new Error('Please input age Name');
    }
    
    else if((fname+lname).length>20){
        throw new Error('length error');
    }

    else if(age<18){
        throw new Error('Age limitation');
    }
    
    this.fname=fname; 
    this.lname=lname;
    this.age=age;
    this.display= function(){

        console.log('First Name : '+this.fname);
        console.log('Last Name : '+this.lname);
        console.log('age : '+this.age);

    }
}
try{
const check=new showDetails('Anik','Sikder',24);
check.display();
}
catch(e){
    alert(e);
}




