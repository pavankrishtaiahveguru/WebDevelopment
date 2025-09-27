//  pre-defined datatypes
// number
var numberOne=10;
console.log(numberOne,typeof numberOne); //20 'number'
let academicCGPA=9.9;
console.log(academicCGPA,typeof academicCGPA); //9.9 'number'

// string
var courseName="JavaScript";
console.log(courseName,typeof courseName); //"JavaScript" string
let domainName='WebDevelopment';
console.log(domainName,typeof domainName); //'WebDevelopment' string

// boolean
let userNameValid=true;
console.log(userNameValid,typeof userNameValid); //true 'boolean'
let isSunSetEast=false;
console.log(isSunSetEast,typeof isSunSetEast); //false 'boolean'

// undefined
let repeatativeCount=undefined;
console.log(repeatativeCount,typeof repeatativeCount); //undefined 'undefined'

// null
var password=null;
console.log(password,typeof password); //null 'object'

// bigint
let gPayTransactionId=9876532345672345n;
console.log(gPayTransactionId,typeof gPayTransactionId);//9876532345672345n 'bigint'
let phonePeTransactionId=86553234567345n;
console.log(phonePeTransactionId,typeof phonePeTransactionId);//86553234567345n 'bigint'

// symbol
var username=Symbol("username");
console.log(username,typeof username);//Symbol("username") 'symbol'
var password=Symbol("password");
console.log(password,typeof password); //Symbol("password") 'symbol'

// clarity
console.log(10==10.1);//true
console.log("Java"=='Java');//true
console.log(true==false);// false
console.log(null==undefined);//true
console.log(gPayTransactionId==phonePeTransactionId);//false
console.log(username==password);//false
console.log(typeof typeof typeof typeof typeof 5);
