// promise object

console.log("Starts");
function orderDelivered(){
    setTimeout(()=>{
        let productDelivered=true;
        if(productDelivered){
            return "Product Delivered Successfully"
        }
        else{
            return "Product have not delivered"
        }
    },5000);
}
console.log(orderDelivered());
console.log("Ends");


// 
function getProductStatus(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let orderPlaced=true;
            if(orderPlaced){
                resolve("Order Placed Successfully.");
            }
            else {
                reject("Order have Not placed.")
            }
        },3000);
    });
}
getProductStatus()
.then((promiseStatus)=>{
    console.log(promiseStatus);
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let isOrderReachedHyderabadHub=true;
            if(isOrderReachedHyderabadHub){
                resolve("Order Reached Hyderabad Hub Successfully.");
            }
            else{
                reject("Order have not Reached Hyderabad Hub");
            }
        },3000);
    });
}).then((promiseStatus)=>{
    console.log(promiseStatus);
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let isOrderIsOutOfDelivery=true;
            if(isOrderIsOutOfDelivery){
                resolve("Order is OutOf Delivery.");
            }
            else{
                reject("Order have not OutOf Delivery.")
            }
        },3000);
    });
})
.then((promiseStatus)=>{
    console.log(promiseStatus);
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let isOrderDelivered=true;
            if(isOrderDelivered){
                resolve("Order Delivered Successfully.");
            }
            else{
                reject("Order have not Delivered.");
            }
        },3000)
    });
}).then(promiseStatus=>{
    console.log(promiseStatus);
})
.catch(error=>{
    console.log(promiseStatus);
});