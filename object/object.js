//basic
//camel notation->oneTwoThree
//Pascal notation->OneTwoThree

const circle={
    radius : 1,
    location : {
        x:1,
        y:2
        
    },
    isVissable:true,
    draw : function (){
        console.log('Draw');
    }

};

circle.draw();


//factory function[pattern-1]
function createCircle(radius){
    return {
        radius,
        draw(){
            console.log('Drawing');
        }
    };
}

console.log(createCircle(10));
console.log(createCircle(20));

//Constructor function[pattern-2]
function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('Costructor');
    }
}

const circle1 = new Circle(15);
console.log(circle1);
console.log(circle1.draw());

//Dynamic nature of Objects
const circle3={
    radius:3,
};
circle3.color = 'Red';
circle3.draw = function ddrawCircle(){

}
console.log(circle3);
delete circle3.color;
console.log(circle3);

if('radius' in circle3){
    console.log('yes');
}


const circle4={
    radius : 44,
    draw(){
        console.log('Drawing circle4');
    }

};

//for(let key in circle4){
  //  console.log(key,circle4[key]);
//}

//console.log(Object.assign({color:'yellow'},circle4));
//console.log(Object.assign({},circle4));
console.log({...circle4});

//template
const name='Anik';
const temp=
`Hi ${name}

Thank you for joining my mailing list

Regards
Mosh`;
console.log(temp);

//Exercise-1(Address Object)

const address={
    street : '137 kazi nazrul Islam Road',
    city : 'Chittagong',
    zipcode : 400
};

function showAddress(address){
for(key in address){
    console.log(key,address[key]);
}

}

showAddress(address);

//Exercise(Constructor)
function addressConstr(address){

    this.address=address;
}
const constradd = new addressConstr(address);
console.log(constradd);

//(factory function)
function addressFact(address){
    return {
    address
    }
}
console.log(addressFact(address));

//exercise(are equal)

function createAdd(street,city,zipcode){
    this.street=street;
    this.city=city;
    this.zipcode=zipcode;
}

let address1=new createAdd('Alkaran road','ctg','1000');
let address2=new createAdd('Alkaran road','ctg','1000');
//Different object(False)
function areSame(address1,address2){
    return (address1===address2)?true:false;
    
}
//True
function areEqual(address1,address2){

         return address1.street===address2.street && address1.city===address2.city &&  address1.zipcode===address2.zipcode;
}
console.log(areEqual(address1,address2));
console.log(areSame(address1,address2));


//Blog post Object
let book={

    title : 'A genius man ',
    body : 'pdf',
    author: 'Dr. Anik Sikder',
    views: '90k',
    comments:[{author:'Anjan Sikder',body:'doc'},
                 {author:'Anjan Sikder',body:'doc'},

],
    isLive:true


};

console.log(book);
//construtor function
function ConstrBook(title,body,author){
this.title=title;
this.body=body;
this.author=author;
this.views=0;
this.comments=[];

}

let check = new ConstrBook('a','b','c'); 
check.add='javaScript';
console.log(check);

//price Range
let priceRange=[
    {label:'$', tooltip:'Inexpensive', minPerPerson:0,maxPerPerson:10},
    {label:'$', tooltip:'Moderate', minPerPerson:11,maxPerPerson:20},
    {label:'$', tooltip:'Inexpensive', minPerPerson:21,maxPerPerson:50}

];

let resturants=[
    {averagePerPerson:5}
];
//Self experiment
let array=[
    
    function add(){
        console.log('Rashed');
    },
   function remove(){
        console.log('Salim');
    }

];
console.log(array[0]);


//Google Drive
//1
let point={
    x:88,
    y:75,
}
point.z=92;
console.log(point);

for(let key in point){
    console.log(key,point[key]);
}

delete point.y;
console.log(point);




