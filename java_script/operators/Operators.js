// Operators(operand)
// Operators(operands)

// arithmetic operators(+ - * / % ** )
console.log(10+10);//20
console.log(10-5);//5
console.log(10*10);//100
console.log(10/5);//2
console.log(10%5);//0
console.log(10**2);//100

// relational operators()
console.log(10>5);//true
console.log(10>5);//false
console.log(10<=5);//true
console.log(10>5);//false
console.log(10==10);//true
console.log(10===10);//false
console.log(10!=10);//false
console.log(10!==10);//true


// logical operators(&& || !)
console.log((10<5)&&(10==5));//false
console.log((10<5)||(5==5));//true
console.log(!((10==10)&&(10>20)||(20==="20")&&(10<=10)));//true

// assignment operators(= += -= *= /= %= **=)
let number=10;//assignment
console.log(number+=5);//re-assignment
console.log(number+10);// compound-assignment
console.log(number-5);
console.log(number*5);
console.log(number/5);
console.log(number%5);
console.log(number**5);

// unary operators(++ -- typeof delete void)
let gameScore=0;
console.log(++gameScore);
console.log(++gameScore);
let playerLives=3;
console.log(--playerLives);
console.log(--playerLives);
console.log(--playerLives);
console.log(10,typeof 10);