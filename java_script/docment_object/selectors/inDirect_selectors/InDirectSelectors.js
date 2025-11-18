// indirect selectors

// getElementByTagName("tagname"):HTMLCollection
let courseHeading=document.getElementsByTagName("h1");
let javaHeading=courseHeading[0];
let pythonHeading=courseHeading[1];
let webHeading=courseHeading[2];
let sqlHeading=courseHeading[3];

javaHeading.textContent="CoreJava";
pythonHeading.textContent="CorePython";
webHeading.textContent="WebDevelopment";
sqlHeading.textContent="StructureQueryLanguage";

// getElementById("id_value"):HTMLelement
let genderHeading=document.getElementById("gender_heading");
genderHeading.textContent="Gender";

// getElementByClassName("class_value"):HTMLCollection
let buttons=document.getElementsByClassName("buttons");
let subscribeButton=buttons[0];
let followButton=buttons[1];

subscribeButton.textContent="Subscribed";
followButton.textContent="Following";

// getElementByName("name_value"):NodeList
let genderRaidoButtons=document.getElementsByName("Gender");
console.log(genderRaidoButtons);

// querySelector("tag_name" | "#id_value" | ".class_value"):FirstElement
let toolButtons=document.querySelector(".buttons");
console.log(toolButtons);

// querySelector("tag_name" | "#id_value" | ".class_value"):NodeList
let subjectHeadings=document.querySelectorAll(".headings");
console.log(subjectHeadings);