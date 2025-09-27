// arrow function
let arrowFunction=()=>("ArrowFunction");
for(let functionCallTimes=1;functionCallTimes<=500;functionCallTimes++){
    arrowFunction();
}
arrowFunction();

// function without parameters and without return value
let toFindAreaOfSquare=()=>{
    let side=100;
    let areaOfSquare=side*side;
    console.log(areaOfSquare);
}
toFindAreaOfSquare();

// function with parameters and without return value
let toCalculateAreaOfSquare=side=>console.log(side*side);
toCalculateAreaOfSquare();

// function with parameters and with return value
let toSquareNumber=number=>{return number* number};
document.getElementById("squared_number_heading").innerText="SquareNumber : "+toSquareNumber(25);
document.getElementById("squared_number_operational_code").innerText=toSquareNumber;