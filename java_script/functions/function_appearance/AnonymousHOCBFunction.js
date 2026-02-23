// anonymous Higher Order Function
// anonymous Callback Function
let anonymousHigherOrderFunction=function (anotherFunction){
    anotherFunction();
}
anonymousHigherOrderFunction(function (){
console.log("AnonymousCallBackFunction.")
});
