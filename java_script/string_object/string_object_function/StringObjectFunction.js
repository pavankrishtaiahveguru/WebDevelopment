// string object function
// length:number
let speakerName="JBL";
console.log(speakerName.length);

// charAt(index):string
function toGetLength(string){
    let stringCharacterCount=0;
    for(let stringIndex=0;stringIndex<=length-1;stringIndex++){
        stringCharacterCount++;
    }
    return stringCharacterCount;
}
console.log(`The length of ${speakerName} : ${toGetLength(speakerName)}`);

let courseName="JavaScriptJ";
console.log(`The length of ${courseName} : ${toGetLength(courseName)}`);

// indexOf(searchString):index
// indexOf(searchString,fromIndex):index
console.log(courseName.indexOf("J",5));
// lastIndexOf(searchString):lastIndex
// lastIndexOf(searchString,fromIndex):lastIndex
console.log(courseName.lastIndexOf("J"));

// slice(startIndex,endIndex):substring
let bagBrandName="WildCraft";
console.log(bagBrandName.slice(0));
console.log(bagBrandName.slice(0,4));
console.log(bagBrandName.slice(0,bagBrandName.length));
console.log(bagBrandName.slice(-9));
console.log(bagBrandName.slice(-9,-5));
console.log(bagBrandName.slice(-5));
console.log(bagBrandName.slice(-5,0));

// substring(startIndex,endIndex):substring
console.log(bagBrandName.substring(0));
console.log(bagBrandName.substring(0,-5));
console.log(bagBrandName.substring(-9,-7));

// substr(fromIndex,length):substring
console.log(bagBrandName.substr(0,1));
console.log(bagBrandName.substr(0,2));
console.log(bagBrandName.substr(0,3));
console.log(bagBrandName.substr(0,4));

let movieReview=`He is an legendary actor,He proves that gravity does not exit and sometimes He pulls railway tracks for beating rowdies.`;
console.log(movieReview);
// replace("oldString","newString"):replacedString
console.log(movieReview.replace("He","Balayya"));
// replaceAll("oldString","newString"):replacedString
console.log(movieReview.replaceAll("He","Balayya"));

// trim():trimmedString
let speaker=" J B L ";
console.log(speaker);
console.log(speaker.trim());
// trimStart():trimmedString
console.log(speaker.trimStart());
// trimEnd():trimmedString
console.log(speaker.trimEnd());

// small task
let fruitName="a p p l e";
console.log(fruitName.trim().replaceAll(" ",""));

// padStart(maxLength,fillString):concatenatedString
let subject="Development";
console.log(subject.padStart(14,"Web"));
// padEnd(maxLength,fillString):concatenatedString
let subjectName="Core";
console.log(subjectName.padEnd(8,"Java"));
// concat():concatenatedString
let webTechnologies="HTML";
console.log(webTechnologies.concat(" CSS | JavaScript"));

// includes(searchString):boolean
let emailUserName="sai@gmail.com";
if(emailUserName.includes("@")){
    console.log(`${emailUserName} contains @,UserName added Successfully...`);
}
else{
    console.log(`${emailUserName} does not contains @, Please provide @`); 
}
// startWith(searchString):boolean
// endWith(searchString):boolean
if(emailUserName.endsWith("@gmail.com")){
    console.log("EmailUsername is valid")
}
else{
    console.log("EmailUsername is not valid, Please provide domain name");
}

// toLowerCase():lowerCasedString
let weatherStatus="WINDY".toLowerCase();
if(weatherStatus=="rainy"){
    console.log("Please carry umbrella");
}
else if(weatherStatus=="sunny"){
    console.log("Apply sunscreen");
}
else if(weatherStatus=="cloudy"){
    console.log("Eat snacks");
}
else if(weatherStatus=="windy"){
    console.log("Wear Head Gear");
}

// toUpperCase():upperCaseString
let airConditioner="Blue Start";
console.log(airConditioner.split(" "));
console.log(airConditioner.split(" ").length);
console.log(airConditioner.length);

// italics():<i>String</i>
function toValidateNumberPositive(givenNumber){
    if(givenNumber>0){
        return `${givenNumber} is positive`.italics();
    }
    else{
        return `${givenNumber} is not positive`.italics();
    }
}
document.getElementById("return_value").innerHTML=toValidateNumberPositive(-10);

// how many ways developer can iterate / enumerate on string object
let speakerBrandName="JBL";
// for loop
for(let speakerBrandNameIndex=0;speakerBrandNameIndex<=speakerBrandName.length-1;speakerBrandNameIndex++){
    console.log(speakerBrandName.charAt(speakerBrandNameIndex));
}

// for of loop
for(let speakerBrandNameCharacter of speakerBrandName){
    console.log(speakerBrandNameCharacter);
}

// for in loop
for(let speakerBrandNameIndex in speakerBrandName){
    console.log(speakerBrandNameIndex);
}
