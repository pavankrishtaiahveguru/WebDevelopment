// immediately invoked function expression higher order function
// immediately invoked function expression callback function
(function(){
    // higher order function
    let arrowFunctionOrderFunction=(anotherFunction)=>{
        anotherFunction();
    }
    // callback function
    arrowFunctionOrderFunction(()=>{
        console.log("ArrowCallBackFunction.");
    });
})();