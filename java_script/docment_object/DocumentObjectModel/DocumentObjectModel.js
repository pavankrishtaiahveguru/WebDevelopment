document.getElementById("title_heading").textContent="DocumentObjectModel";

const subscribeButton=document.getElementById("subscribe_button");
subscribeButton.addEventListener("click",function(){
    if(subscribeButton.textContent==="Subscribe"){
        subscribeButton.textContent="Subscribed";
        subscribeButton.style.backgroundColor="green";
    } else {
        subscribeButton.textContent="Subscribe";
        subscribeButton.style.backgroundColor="red";
    } 
});

const followButton=document.getElementById("follow_button");
followButton.addEventListener("click",function(){
    if(followButton.textContent==="Follow"){
        followButton.textContent="Following";
        followButton.style.backgroundColor="green";
    } else {
        followButton.textContent="Follow";
        followButton.style.backgroundColor="darkblue";
    }
});