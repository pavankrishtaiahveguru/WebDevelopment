// datatypes casting
// implicit datatype casting

let numberOne="25";
let numberTwo=2;
console.log(numberOne+numberTwo,typeof (numberOne+numberTwo));
console.log(numberOne-numberTwo,typeof (numberOne-numberTwo));
console.log(numberOne*numberTwo,typeof (numberOne*numberTwo));
console.log(numberOne/numberTwo,typeof (numberOne/numberTwo));

// explicit datatype casting
// any datatype to number datatype
// Number(anyData):number
let scienceMarks="94";
let socialScienceMarks=89;
let avgMarks=(Number(scienceMarks)+Number(socialScienceMarks));
console.log(avgMarks,typeof avgMarks);// 86 'number'
let isUserNameValid=true;
console.log(Number(isUserNameValid),typeof Number(isUserNameValid)); //1 'number'
let isPasswordValid=false;
console.log(Number(isPasswordValid),typeof Number(isPasswordValid));// 0 'number'
let waterBottleQuantity="2liter";
console.log(Number(waterBottleQuantity),typeof Number(waterBottleQuantity));//NaN 'number'

// parseInt(string):number
let oilPackQuantity="5l";
console.log(parseInt(oilPackQuantity),typeof parseInt(oilPackQuantity)); //5 'number'

// parseFloat(string):number
let academicCGPA="8.56CGPA";
console.log(parseFloat(academicCGPA),typeof parseFloat(academicCGPA)); //8.56 'number'

// any datatype to string datatype
// String():string
var mobileNumber=9861244560;
console.log(String(mobileNumber),typeof String(mobileNumber)); //9861244560 string
var isSunRiseWest=false;
console.log(String(isSunRiseWest),typeof String(isSunRiseWest)); // false string

// toString():string
var mobileNumber=9861568376;
console.log(mobileNumber.toString(),typeof mobileNumber.toString()); //9861568376 string
var isSunRiseEast=true;
console.log(isSunRiseEast.toString(),typeof isSunRiseEast.toString()); // true string

// any datatype to boolean datatype
let username="";
console.log(Boolean(username),typeof Boolean(username)); //false 'boolean'
