// named function
for(let functionCallTimes=1;functionCallTimes<=10;functionCallTimes++){
    namedFunction();
}
function namedFunction(){
    // operational codes
    console.log("NamedFunction.");
}

// function without parameters and without return value
function toProductTwoNumbers(){
    let numberOne=10;
    let numberTwo=20;
    let productValue=numberOne*numberTwo;
    console.log(productValue);
}
toProductTwoNumbers();

// function with parameters and without return value
function toProductThreeNumbers(numberOne,numberTwo,numberThree){
    let productValue=numberOne*numberTwo*numberThree;
    console.log(productValue);
}
toProductThreeNumbers(10,20,30);
toProductThreeNumbers(40,50,60);
toProductThreeNumbers(70,80,90);

// function with parameters and with return value
function toSquareRadius(radius){
    let squareRadius=radius*radius;
    return squareRadius;
}
function toFindAreaOfCircle(){
    const piValue=3.142;
    let areOfCircle=piValue*toSquareRadius(7.5);
    return areOfCircle;
}
document.getElementById("circle_area_heading").innerText="AreaOcCircle : "+parseInt(toFindAreaOfCircle())+"cm";
document.getElementById("circle_area_function_code").innerText=toFindAreaOfCircle;