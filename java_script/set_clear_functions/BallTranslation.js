// ball translation
let colorBall=document.getElementById("ball_container");
let buttons=document.querySelectorAll(".buttons");
let startButton=buttons[0];
let stopButton=buttons[1];
let intervalId;
console.log(intervalId);

startButton.addEventListener("click",()=>{
    // -- top-left = top-right
    setTimeout(()=>{
        colorBall.style.transform="translateX(89.75vw)";
    },2000);

    // -- top-right = bottom-right
    setTimeout(()=>{
        colorBall.style.transform="translate(89.75vw,82vh)";
    },4000);

    // -- bottom-right = bottom-left
    setTimeout(()=>{
        colorBall.style.transform="translate(0,82vh)";
    },6000);

    // -- bottom-left = top-left
    setTimeout(()=>{
        colorBall.style.transform="translate(0,0)";
    },8000);
    intervalId= setInterval(()=>{
        // -- top-left = top-right
        setTimeout(()=>{
            colorBall.style.transform="translateX(89.75vw)";
        },2000);

        // -- top-right = bottom-right
        setTimeout(()=>{
            colorBall.style.transform="translate(89.75vw,82vh)";
        },4000);

        // -- bottom-right = bottom-left
        setTimeout(()=>{
            colorBall.style.transform="translate(0,82vh)";
        },6000);

        // -- bottom-left = top-left
        setTimeout(()=>{
            colorBall.style.transform="translate(0,0)";
        },8000);
    },10000);
});

stopButton.addEventListener("click",()=>{
    clearInterval(intervalId);
});