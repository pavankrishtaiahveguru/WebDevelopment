// childNodes:NodeList
console.dir(document.childNodes);
console.dir(document.head.childNodes);

// children:HTMLCollection
console.dir(document.children);
console.dir(document.head.children);
console.dir(document.body.children);

// childElementCount:number
console.log(document.head.childElementCount);
console.log(document.body.childElementCount);


// selectors
// manipulators
/*
innerHTML:String
innerText:String
textContent:String
*/

console.log(document.getElementById("title_heading").innerText);
console.log(document.getElementById("title_heading").textContent);
let topicHeading=document.getElementById("title_heading");
topicHeading.textContent="DocumentObjectModel";
