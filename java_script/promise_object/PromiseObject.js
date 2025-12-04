// promise object

console.log("FirstPromise");
console.log("SecondPromise");
console.log("ThirdPromise");
console.log("FourthPromise");
console.log("FifthPromise");

// fetch user data
let fetchUserDataButton=document.getElementById("fetch_user_data_button");
let fetchUserDataOutput=document.getElementById("fetch_user_data_output");
fetchUserDataButton.addEventListener("click",()=>{
    function fetchUserData(){
        return new Promise((resolve,reject)=>{
            // asynchronous operation
            setTimeout(()=>{
                let fetchData=true;
                if(fetchData){
                    resolve("UserData fetched successfully.");
                }
                else{
                    reject("UserData have not fetched.");
                }
            },3000);
        });
    }
    fetchUserData()
    .then((promiseResult)=>{
        fetchUserDataOutput.textContent=promiseResult;
        fetchUserDataOutput.style.color="green";
    })
    .catch((promiseResult)=>{
        fetchUserDataOutput.textContent=promiseResult;
        fetchUserDataOutput.style.color="red";
    });
});


// place order
let placeOrderButton=document.getElementById("place_order_button");
let placeOrderResult=document.getElementById("place_order_data_output");
placeOrderButton.addEventListener("click",()=>{
    function placeOrder(){
        return new Promise((resolve,reject)=>{
            // asynchronous operation
            setTimeout(()=>{
                let orderPlaced=true;
                if(orderPlaced){
                    resolve("Order placed Successfully");
                }
                else{
                    reject("Order have not placed.");
                }
            },3000);
        })
    }
    placeOrder()
    .then((promiseResult)=>{
        placeOrderResult.textContent=promiseResult;
        placeOrderResult.style.color="green";
        return new Promise((resolve,reject)=>{
            // asynchronous operation
            setTimeout(()=>{
                let orderReachedHydHub=true;
                if(orderReachedHydHub){
                    resolve("Order reached hyderabad amazon Hub Successfully.");
                }
                else{
                    reject("Order not reached hyderabad amazon hub.");
                }
            },3000);
        });
    }).then((promiseResult)=>{
        placeOrderResult.textContent=promiseResult;
        placeOrderResult.style.color="green";
        return new Promise((resolve,reject)=>{
            // asynchronous operation
            setTimeout(()=>{
                let outOfDelivery=true;
                if(outOfDelivery){
                    resolve("Order is OutOf Delivery.");
                }
                else{
                    reject(" ✅ Order is not OutOf Delivery");
                }
            },3000);
        });
    })
    .then((promiseResult)=>{
        placeOrderResult.textContent=promiseResult;
        placeOrderResult.style.color="green";
        return new Promise((resolve,reject)=>{
            // asynchronous operation
            setTimeout(()=>{
                let orderDelivered=true;
                if(orderDelivered){
                    resolve("Order delivered Successfully.");
                }
                else{
                    reject("Order not Delivered.");
                }
            },3000);
        });
    })
    .then((promiseResult)=>{
        placeOrderResult.textContent=promiseResult;
        placeOrderResult.style.color="green";
    })
    .catch((promiseResult)=>{
        placeOrderResult.textContent=promiseResult;
        placeOrderResult.style.color="red";
    });
});