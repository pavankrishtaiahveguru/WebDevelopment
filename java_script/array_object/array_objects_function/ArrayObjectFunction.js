// array object functions

// length:number
let movieNames=["Devara","RRR","War2"];
console.log(movieNames.length);
// indexOf(element):index
// indexOf(element,fromIndex):index
console.log(movieNames.indexOf("War2",2));

// lastIndexOf(element):lastIndex
// lastIndexOf(element,fromIndex):lastIndex
console.log(movieNames.lastIndexOf("RRR"))

// reverse():reversedArray
let colors=["red","green","blue"];
console.log(colors.reverse());

// slice(startIndex,endIndex):subArray
// slice(startIndex,deleteCount):RemovedSubArray
console.log(colors.slice(0,1));
console.log(colors);

// join():string
// join(separator):string
let course=["HTML","CSS","JS"];
console.log(course.join());
console.log(colors.join("_"));
// toString():string
console.log(course.toString().replaceAll(",","|"));

// push(element):length
let javaSubjectLists=["Java"];
console.log(javaSubjectLists.push("JavaLibrary","JavaDSA"));
console.log(javaSubjectLists);
// pop():removedLastElement
console.log(javaSubjectLists.pop());

// unshift(element):length
let randomPersonName=["Iyer"];
console.log(randomPersonName.unshift("Chinnaswamy","Muthuwamy","Venugopala"));
console.log(randomPersonName);
// shift():removedFirstElement
console.log(randomPersonName.shift());

// fill(fillElement,startIndex,endIndex):filledArray
let emptyArrayObject=new Array(10);
console.log(emptyArrayObject);
console.log(emptyArrayObject.fill("JavaScript",0,4));
console.log(emptyArrayObject.fill("JavaLibrary",4,7));
console.log(emptyArrayObject.fill("CoreJava",7));

// flat(depth_factor):flattedArray
let nestedArray=[["a","b",["A","B",["1","2",["I","II",["i","ii"]]]]],["c","d",["C","D",["3","4",["III","IV",["iii","iv"]]]]],["e","f",["E","F",["5","6",["V","VI",["v","vi"]]]]]];
console.log(nestedArray);
console.log(nestedArray.flat(Infinity));

// sort():sortedArray
// sort(callBackFunction):sortedArray
let numbers=[-10,110,45,11,5,-55];
console.log(numbers.sort((firstElement,secondElement)=>{
    return firstElement-secondElement;
}));
let courses=["JavaLibrary","JavaScript","JavaProgramming","Java"];
console.log(courses.sort((firstElement,secondElement)=>{
    return firstElement.length-secondElement.length;
}));

// map(callBackFunction):mappedArray
let numericals=[1,3,5,7,9,11];
console.log(numericals.map(number=>{return number*2}));
console.log(numericals.map(number=>{return number**2}));
console.log(numericals.map(number=>{return number**3}));

let radius=[90,5,9,15,12];
console.log(radius.map(radius=>{return 3.142*radius*radius}));
console.log(radius.map(radius=>{return 2*3.142*radius}));

// find(callBackFunction):foundElement
console.log(radius.find(radius=>{
    if(radius<10){
        return radius;
    }
}));

// findIndex(callBackFunction):foundElementIndex
console.log(radius.findIndex(radius=>{
    if(radius<10){
        return radius;
    }
}));

// filter(callBackFunction):filteredArray
let numerics=[1,2,3,4,5,6,7,8,9,10,11,12];
console.log(`Odd numbers : ${numerics.filter(numeric=>{return numeric%2==1})}`);
console.log(`even numbers : ${numerics.filter(numeric=>{return numeric%2==0})}`);

// some():boolean
let students=["Naseer","Pavan","Sai","Praveen","Hasheem"];
console.log(students.some(student=>{
    if(student.length<=5)
    {
        return student;
    }
}));

// every():boolean
console.log(students.every(student=>{
    if(student.length<=5)
    {
        return student;
    }
}));

let speakers=["JBL","bOAt","SONY"]
// keys():ArrayIterator
for(let speakerKey of speakers.keys()){
    console.log(speakerKey)
}

// values():ArrayIterator
for(let speakerValue of speakers.values()){
    console.log(speakerValue);
}

// entries():ArrayIterator
for(let speakerEntries of speakers.entries()){
    console.log(speakerEntries);
}

// how many ways developer can iterate/enumerate array elements
for(let speakerIndex=0;speakerIndex<=speakers.length-1;speakerIndex++){
    console.log(speakers[speakerIndex]);
}

// for of loop
for(let speaker of speakers){
    console.log(speaker);
}

// for in loop
for(let speakerIndex in speakers){
    console.log(speakers[speakerIndex]);
}

// forEach(callBAckFunction):void
speakers.forEach(speaker=>console.log(speaker));