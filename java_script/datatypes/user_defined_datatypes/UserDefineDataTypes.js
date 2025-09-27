// user-defined 
// java script components

// Number():number
// new Number():NumberObject
var numberObject=new Number(10); //boxing
console.log(numberObject,typeof numberObject);
var number=numberObject.valueOf();
console.log(number, typeof number);

// String():string
// new Number():NumberObject
var stringObject=new String("Java"); //boxing
console.log(stringObject,typeof stringObject);
var string=stringObject.valueOf();//unboxing
console.log(string,typeof string);

// Boolean():boolean
// new Boolean():BooleanObject
var BooleanObject=new Boolean(true);// boxing
console.log(BooleanObject,typeof BooleanObject);
var boolean=BooleanObject.valueOf();//unboxing
console.log(boolean,typeof boolean);


// Array():Array
// new Array():ArrayObject
var courses=Array("JAva","JavaScript");
console.log(courses,typeof courses);
var colors=new Array("DarkBlue","Gray");
console.log(colors,typeof colors);


// Bigint():bigint
var gPayTransactionId=BigInt(9876532345672345n);
console.log(gPayTransactionId,typeof gPayTransactionId);
var gPayTransactionId=BigInt(9876532345672345n);
console.log(gPayTransactionId,typeof gPayTransactionId);

// Symbol():symbol
var username=Symbol("username");
console.log(username,typeof username);
var username=Symbol("username");
console.log(username,typeof username);

// clarity
console.log(new Number(10),typeof new Number(10));//Number{10} 'object'
console.log(new String("Javascript"),typeof new String("JavaScript"));//String {'JavaScript'}
console.log(new Boolean(true),typeof new Boolean(true)); //Boolean {true} 'object'
console.log(new Array("Java","JavaScript"),typeof new Array("Java","JavaScript")); //(2) ['Java','JavaScript']
console.log(10,typeof 10);//10 'number'
console.log("Java",typeof "Java");//Java string
console.log(true,typeof true);//true 'boolean'