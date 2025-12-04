// dynamic buttons
let buttons=document.querySelectorAll(".buttons");
let subscribeButton=buttons[0];
let followButton=buttons[1];
let copyButton=buttons[2];
let toggleCount=0;
let dropDown=document.getElementById("drop_down");
let listButton=document.getElementById("subscribe_dropdown")

subscribeButton.addEventListener("click",()=>{
    if(toggleCount==0){
        subscribeButton.textContent="Subscribed";
        setTimeout(()=>{
            subscribeButton.textContent="Subscribed";
            // subscribeButton.innerHTML= `Subscribed<span id="list_arrow"><button id="list_button"><i class="fa-solid fa-angle-down" id="angle_down"></button></i></span>`;
            dropDown.innerHTML=`Subscribed <span><i class="fa-solid fa-angle-down"></i></span>`;
            toggleCount=1;
        },1000);
    }
    else if(toggleCount==1){
        subscribeButton.textContent="Subscribe";
        toggleCount=0;
    }
});

let followButtonToggleCount=0;
followButton.addEventListener("click",()=>{
    if(followButtonToggleCount==0){
        setTimeout(()=>{
            followButton.textContent="Following";
        },100)
        followButtonToggleCount=1;
    }
    else if(followButtonToggleCount==1){
        followButton.textContent="Follow";
        followButtonToggleCount=0;
    }
});

let copiedButton=document.getElementById("copy_button");

copyButton.addEventListener("click",()=>{
    copyButton.innerHTML= `<i class="fa-solid fa-check"></i>Copied!`;
    copyButton.style.color="white";
    copiedButton.style.backgroundColor="green";
    setTimeout(()=>{
        copyButton.innerHTML=`<i class="fa-regular fa-copy"></i> Copy`;
        copiedButton.style.backgroundColor="royalblue";
    },3000)
});