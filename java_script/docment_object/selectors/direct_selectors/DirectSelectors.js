// direct electors (document object properties)

// tittle:string
console.log(document.title="DirectSelector");

// body:HTMLBodyElement
let bodyElement=document.body;
Object.assign(bodyElement.style,{
    width:"100vw",
    height:"100vw",
    padding:"20px",
    backgroundImage:"radial-gradient(circle at top,gray,black",
});

// images:HTMLCollection<HTMLImageElement>
let solarSystemImages=document.images;
for(let solarSystemImage of solarSystemImages){
    Object.assign(solarSystemImage.style,{
        width:"10vw",
        height:"10vw",
        border:"10px solid white",
        borderRadius:"20px"
    });
}

// forms:HTMLCollection<HTMLFormElement> 
let forms=document.forms;
for(let form of forms){
    form.style.paddingLeft="10px";
    if(form.id=="login_form"){
        Object.assign(form.style,{
            color:"white",
            border:"5px solid orange",
            marginBottom:"10px"
        });
    } 
    else if(form.id=="signup_form"){
        Object.assign(form.style,{
            color:"orange",
            border:"5px solid white",
        });
    }
}

// anchor:HTMLCollection<HTMLAnchorElement> 
let anchors=document.anchors;
for(let anchor of anchors){
    Object.assign(anchor.style,{
        color:"white",
        fontSize:"3vw",
        fontWeight:"bold",
        marginRight:"10px"
    });
}