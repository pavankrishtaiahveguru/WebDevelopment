// element creation

let webHeading=document.body.appendChild(document.createElement("h1"));
webHeading.textContent="WebDevelopment";
Object.assign(webHeading.style,{
    fontSize:"5vw",
    fontFamily:"ProductScans",
    color:"greenyellow",
    backgroundColor:"gray",
    textAlign:"center",
    borderRadius:"10px"
});

let parentDivision=document.body.appendChild(document.createElement("div"));
Object.assign(parentDivision.style,{
    width:"15vw",
    height:"15vw",
    backgroundColor:"purple",
    position:"relative",
    top:"10px",
    left:"42.5vw",
    borderRadius:"50px"
});

let childDivision=parentDivision.appendChild(document.createElement("div"));
childDivision.textContent="Web."
Object.assign(childDivision.style,{
    fontSize:"3vw",
    fontWeight:"bold",
    width:"50%",
    height:"50%",
    backgroundColor:"white",
    borderRadius:"25px",
    position:"absolute",
    left:"25%",
    top:"25%",
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
});

// remove element with the acceptance of parent element
parentDivision.removeChild(childDivision);