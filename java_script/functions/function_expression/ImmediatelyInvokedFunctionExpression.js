//  ImmediatelyInvokedFunctionExpression
(function(){
    console.log("ImmediatelyInvokedFunctionExpression");
})();

// function with parameters and without return value
((length,breadth)=>console.log(length*breadth))(10,15);

// function with parameters and without return value
let squaredNumber=(number=>{ return number*number})(625);
console.log(squaredNumber);