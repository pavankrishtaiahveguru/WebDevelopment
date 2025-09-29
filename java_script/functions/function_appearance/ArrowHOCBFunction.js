// arrow Higher Order Function
// arrow Callback Function
function arrowHOFunction(anotherFunction){
    anotherFunction(568);
}
// call back function
arrowHOFunction((number)=>{
    console.log(number*number);
});