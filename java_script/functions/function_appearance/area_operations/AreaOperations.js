// area operations
// higher order function
function toCalculateArea(areaOperationalCode){
    console.log(areaOperationalCode(5));
}
// call back function
toCalculateArea(side=>{return side*side});
toCalculateArea(side=>{return 6* side*side});