// Conditional Statements
// if statement
let givenNumber=10;
if(givenNumber>0)
{
    console.log("Positive.");
}

// if else statement
if(givenNumber>0)
{
    console.log("positive.");
}
else{
    console.log("Negative");
}

// else if statement
let number=25;
if((number%3==0)&&(number%5==0)&&(number>0)){
    console.log("3_5");
}
else if((number%3==0)&&(number>0)){
    console.log("3")
}
else if((number%5==0)&&(number>0)){
    console.log("5");
}
else{
    console.log("NoNegativity");
}

// switch statement
let mountCount=5;
switch(mountCount){
    default:console.log("Please provide between 1 to 12.");
    case 1:console.log("January");
    break;
    case 2:console.log("February");
    break;
    case 3:console.log("March");
    break;
    case 4:console.log("April");
    break;
    case 5:console.log("May");
    break;
    case 6:console.log("June");
    break;
    case 7:console.log("July");
    break;
    case 8:console.log("August");
    break;
    case 9:console.log("September");
    break;
    case 10:console.log("October");
    break;
    case 11:console.log("November");
    break;
    case 12:console.log("December");
    break;
}