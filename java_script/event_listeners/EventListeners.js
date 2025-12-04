// event listener(in-built function)
let colorButtons=document.querySelectorAll(".color_buttons");
let redButton=colorButtons[0];
let greenButton=colorButtons[1];
let darkblueButton=colorButtons[2];

redButton.addEventListener("click",(clickEventObject)=>{
    console.log(clickEventObject);// PointerEventObject
    console.log(`User clicked RedButton at x-axis :${clickEventObject.x}px and y-axis : ${clickEventObject.y}px on the webpage`);
    document.body.style.backgroundColor=redButton.textContent;
    redButton.style.color="red";
    redButton.style.backgroundColor="white";
});
redButton.addEventListener("mouseout",()=>{
    document.body.style.backgroundColor="transparent";
    redButton.style.color="white";
    redButton.style.backgroundColor="red";
});

greenButton.addEventListener("dblclick",(doubleClickEventObject)=>{
    console.log(doubleClickEventObject);
    console.log(`User doubleClicked GreenButton at x-axis :${doubleClickEventObject.x}px and y-axis : ${doubleClickEventObject.y}px on the webpage`);
    document.body.style.backgroundColor=greenButton.textContent;
    greenButton.style.color="green";
    greenButton.style.backgroundColor="white";
});

darkblueButton.addEventListener("mouseover",(mouseOverEventObject)=>{
    console.log(mouseOverEventObject);
    console.log(`User hovered DarkBlueButton at x-axis :${mouseOverEventObject.x}px and y-axis : ${mouseOverEventObject.y}px on the webpage`);
    document.body.style.backgroundColor="darkblue";
    darkblueButton.style.color="darkblue";
    darkblueButton.style.backgroundColor="white";
})