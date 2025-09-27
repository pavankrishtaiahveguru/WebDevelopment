// variables 
// variables_declaration_keyword variableName=data/value;

// difference between var let const
// clarity one : declaration and initialization(var let const)
var numberOne=10;
console.log(numberOne);
let mobileBrandName="SAMSUNG";
console.log(mobileBrandName);
const piValue=3.142;
console.log(piValue);

// clarity two : re-initialize(var let)
numberOne=20;
console.log(numberOne);
mobileBrandName="IPhone";
console.log(mobileBrandName);
// piValue=3.14;
console.log(piValue);

// clarity three : only-declaration (var let)
var numberTwo;
console.log(numberTwo);
let courseName;
console.log(courseName);
const earthOrderPosition=3;
console.log(earthOrderPosition);

// clarity four : re-declaration(var)
var bagBrandName="WildCart";
var bagBrandName="SkyBags";
console.log(bagBrandName);
let classRoomNo=202;
// let classRoomNo=203;
console.log(classRoomNo);
const earthGravityValue=9.81;
// const earthGravityValue=9.91;
console.log(earthGravityValue);


// clarity five : block-scoped variables(let const)
{
    var laptopBrandName="Apple";
    let laptopMOdelName="M2 Air";
    console.log(laptopBrandName);
    const laptopRam=8;
    console.log(laptopRam);
}
// console.log(laptopMOdelName);

// clarity six : function-scoped variables(var let const)
function functionName(){
    var studentName="Ram";
    console.log(studentName);
    let studentRollNo=202;
    console.log(studentRollNo);
    const studentGender="Male";
    console.log(studentGender);
}

// clarity seven : variable hosting(var)
console.log(noteBookBrandName);
var noteBookBrandName="ClassMate";
// console.log(speakerBrandName);
let speakerBrandName="JBL";
// console.log(isSunriseEast);
const isSunriseEast=true;