// java script object
// object literals({}):object
let employeeObject={
    firstName:"Yaswanth",
    lastName:"Kannan",
    employeeId:"TYP1701",
    experience:5,
    domain:{
        1:"CoreJava",
        2:"AdvancedJava",
        3:"SQL",
        4:"WebDevelopment"
    },
    jobLocation:"Hyderabad",
    residentialAddress:{
        plotNumber:"238C",
        apartmentName:"MadineniumCommunityLiving",
        area:"AddagunttaSociety",
        colonyName:"KBHPColony",
        cityAndPinCode:"Hyderabad-500072"
    },
    getFullName:function(){
        return `${this.firstName} ${this.lastName}`
    }
}
console.log(employeeObject,typeof employeeObject);
console.log(`Employee ID : ${employeeObject.employeeId}`);
console.log(`Employee Domain : ${employeeObject.domain[1]}`);
console.log(`Employee ColonyName : ${employeeObject.residentialAddress.colonyName}`);
console.log(`Full name : ${employeeObject.getFullName()}`);

let numberObject={
    getAddedValue:(firstNumber,secondNumber)=>{return `The addition between ${firstNumber} and ${secondNumber} : ${firstNumber+secondNumber}`},
    getSubractedValue:(firstNumber,secondNumber)=>{return `The Subracted between ${firstNumber} and ${secondNumber} : ${firstNumber-secondNumber}`},
    getMultipleValue:(firstNumber,secondNumber)=>{return `The Multiplied between ${firstNumber} and ${secondNumber} : ${firstNumber*secondNumber}`},
    getRemainderValue:(numerator,de_numerator)=>{return `The Reminder between ${firstNumber} and ${secondNumber} : ${numerator%de_numerator}`},
    getQuotientValue:(numerator,de_numerator)=>{return `The Quotient between ${firstNumber} and ${secondNumber} : ${numerator/de_numerator}`},
    getSquaredValue:number=>{return `the Squared value of ${number} : ${number*number}`},
    getCubedValue:number=>{return `the Cubed value of ${number} : ${number*number*number}`}
}
console.log(numberObject.getAddedValue(10,20));
console.log(numberObject.getSquaredValue(10));
console.log(numberObject.getCubedValue(25));

// empty object literals({})
let noteBook={};
console.log(noteBook,typeof noteBook);

// Object():object
// new Object():object
let hpLaptop=new Object();
hpLaptop.price=35000;
hpLaptop.brandName="hp";
hpLaptop.color="DarkGray";
console.log(hpLaptop,typeof hpLaptop);

let dellLaptop=new Object();
dellLaptop.price=45000;
dellLaptop.brandName="Dell";
dellLaptop.color="LightGray";
console.log(dellLaptop,typeof dellLaptop);

let lenovoLaptop=new Object();
lenovoLaptop.price=40000;
lenovoLaptop.brandName="Linovo";
lenovoLaptop.color="Gray";
console.log(lenovoLaptop,typeof lenovoLaptop);

// constructor function
function Laptop(price,brandName,color){
    this.price=price;
    this.brandName=brandName;
    this.color=color;
}
let appleLaptops=new Laptop(99999,"Apple","Silver");
console.log(appleLaptops,typeof appleLaptops);
let hpLaptops=new Laptop(35000,"Hp","DarkGray");
console.log(hpLaptops,typeof hpLaptops);
let linovoLaptops=new Laptop(40000,"Linovo","Gray");
console.log(linovoLaptops,typeof linovoLaptops);

