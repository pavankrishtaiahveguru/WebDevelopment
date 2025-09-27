// anonymous function
let number=10;
let anonymousFunction=function(){
    console.log("AnonymousFunction");
}
for(let functionCallTimes=1;functionCallTimes<=5;functionCallTimes++){
    anonymousFunction();
}
anonymousFunction();

// function without parameters and without return value
let toDoubleNumber=function(){
    let number=10;
    let doubleNumber=number*2;
    console.log(doubleNumber);
}
toDoubleNumber();

// function with parameters and without return value
let toFindAreaOfRightAngleTriangle=function(base,height){
    let areaOfRightAngleTriangle=0.5*base*height;
    console.log(areaOfRightAngleTriangle);
}
toFindAreaOfRightAngleTriangle(10,15);

// function with parameters and with return value
let toFindAreaOfRectangle=function(length,breadth){
    let areaOfRectangle=length*breadth;
    return areaOfRectangle;
}
document.getElementById("area_of_rectangle_heading").innerText="RectangleArea : "+toFindAreaOfRectangle(200,250);
document.getElementById("rectangle_area_operational_code").innerText=toFindAreaOfRectangle;

