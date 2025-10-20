// array object
let studentRollNumber=101;
let studentName="Naseer";
let studentAge=22;
// variables limitations: variables can store only one data at a time, it cannot store multiple data and even if we create multiple variables to store multiple data, it will a code elongated way, thats why we go for array object.

// array literals([elements]):object
let studentRollNumbers=[101,102,103,104,105];
let studentNames=["Naseer","kumar","sai"];
let studentAges=[21,23,24];
let studentInformation=["Naseer",23,102,true,343567890887654454345467n];
console.log(studentInformation,typeof studentInformation);

// empty array literals:object
let colors=[];//0
colors[0]="red";
colors[1]="green";
colors[2]="greenyellow";
colors[5]="blue";
console.log(colors,typeof colors);
console.log(colors[2]);

// Array():object
let courses=Array();
console.log(courses,typeof courses);
// Array(length):object
let courseNames=Array(5);
courseNames[0]="OopsConcept";
courseNames[1]="Python";
courseNames[2]="JavLibrary";
courseNames[3]="JavaScript";
courseNames[4]="SQL";
courseNames[5]="HTML | CSS";
// Array(arrayLength):object
let bagBrands=Array("SkyBags","WildCraft","AmericanTourister","VIP");
console.log(bagBrands,typeof bagBrands);

// new Array():object
let laptopBrands=new Array();
console.log(laptopBrands);
// new Array(arrayLength):object
let shoesBrands=new Array(3);
shoesBrands[0]="Sparx";
shoesBrands[1]="PUMA";
shoesBrands[2]="adidas";
shoesBrands[3]="Nike";
console.log(shoesBrands,typeof shoesBrands);
// new Array():object
let classRoomNumbers=new Array("401","402","403","404","405");
console.log(classRoomNumbers,typeof classRoomNumbers);