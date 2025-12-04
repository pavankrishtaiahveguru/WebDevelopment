// kurkure quantity task
let quantityValueButton=document.getElementById("quantity_value_button");
let quantityValue=Number(quantityValueButton.textContent);

// handler function
function incrementQuantityValue(){
    if(quantityValue<20){
        quantityValueButton.textContent=++quantityValue;
    }
    if(quantityValue==20){
        quantityValueButton.style.color="red";
    }
}
function decrementQuantityValue(){
    if(quantityValue>1){
        quantityValueButton.textContent=--quantityValue;
    }
    quantityValueButton.style.color="black";
}