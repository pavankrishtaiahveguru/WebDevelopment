// style js property
let webDevelopmentHeading=document.getElementById("web_development_heading");
webDevelopmentHeading.style.fontSize="5vw";
webDevelopmentHeading.style.fontFamily+"ProductScans";
webDevelopmentHeading.style.textAlign="center";
webDevelopmentHeading.style.backgroundColor="lightgray";
webDevelopmentHeading.style.color="darkblue";

Object.assign(webDevelopmentHeading.style,{
    fontSize:"5vw",
    color:"darkblue",
    fontFamily:"ProductScans",
    backgroundColor:"lightgray",
    textAlign:"center"
});

let containerOne=document.getElementById("container_one");
Object.assign(containerOne.style,{
    width:"10vw",
    height:"10vw",
    backgroundColor:"greenYellow",
    borderRadius:"10px",
    border:"5px solid black",
    position:"absolute",
    left:"45vw",
    top:"15vh"
});