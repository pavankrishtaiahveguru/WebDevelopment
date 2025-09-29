// arrow Higher Order Function
// arrow Callback Function
let arrowHigherOrderFunction= (anotherFunction) =>{
    anotherFunction();
}
arrowHigherOrderFunction(()=> {
console.log("ArrowCallBackFunction.");
});