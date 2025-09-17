//  JavaScriptPrintingWays
// console object (BrowserConsole)
console.log("JavaScriptPrintingWays");
console.log(10+5); // 15
console.log(10*5); //50
console.log(console); // console object,normal msg form
console.dir(console); //console object,object form
console.dir(document); // document object,object form
console.dir(window); // window object,object form

// document object
document.write("<span style='color:red;'>FirstStatement</span><br>");
document.write("<span style='color:darkblue;'>SecondStatement</span><br>");
document.writeln("<span style='color:orange;'>ThirdStatement</span><br>");
document.writeln("<span style='color:white;background-color:black;'>FourthStatement</span><br>");
document.writeln("<span style='color:green;'>FifthStatement</span>");

// window object
window.console.log("BrowserConsole is a part of WindowObject");
window. document.write("DocumentObject is present inside WindowObject");
console.log(" BrowserConsole is a part of WindowObject");
document. write("DocumentObject is present inside WindowObject");

// innerHTML Java Script property
// dom(document object model) manipulation
document.getElementById(" container_one").innerHTML="<div style= width:50%;height: 50%;background-color: yellow; ><div style='width:50%;height: 50%;background-color: darkblue;'></div></div>";

// inner text java script property
// dom(document object model) manipulation
document.getElementById("container_two").innerText=" <div style='width:50%;height: 50%;background-color:yellow;'><div style= 'width: 50%;height: 50%;background-color: darkblue;'></div></div>";