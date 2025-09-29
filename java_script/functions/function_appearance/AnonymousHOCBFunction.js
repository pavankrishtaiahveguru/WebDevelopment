// anonymous Higher Order Function
// anonymous Callback Function
function anonymousHOFunction(anotherFunction){
    anotherFunction(25);
}
// call back function
anonymousHOFunction(function(number){
    console.log(number*number)
});
