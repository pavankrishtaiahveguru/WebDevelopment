// named higher order function
// named callback function
function namedHigherOrderFunction(anotherFunction) {
    anotherFunction();
}
namedHigherOrderFunction(function (){
    console.log("NamedCallBackFunction");
});
