// java script object functions

let studentObject={
    studentName:"Naseer",
    age:22,
    isGraduated:true,
    isMarried:false,
    javaFullStack:{
        1:"CoreJava",
        2:"AdvancedJava",
        3:"WebDevelopment",
        4:"SQL"
    },
    residentialAddress:{
        plotName:"SriSaiRam Mens Pg",
        plotNumber:"123C",
        streetNumber:"Road-4",
        areaName:"HMT Hills",
        colonyName:"KPHB Colony",
        cityName:"Hyderabad",
        postalCode:"5000072"
    }
}
console.log(studentObject);

// Object()functions
// Object.keys(object):keysArray
console.log(Object.keys(studentObject));

// Object.values(object):valuesArray
console.log(Object.values(studentObject));

// Object.entries(object):entriesArray
console.log(Object.entries(studentObject).flat());

// Object.seal(object):sealedObject
Object.seal(studentObject);
// modification
studentObject.isGraduated=false;
console.log(studentObject.isGraduated);
// addition
studentObject.electiveCourse="Aptitude";
console.log(studentObject);

// deletion
delete studentObject.isMarried;
console.log(studentObject);

// Object.freeze(object):frozenObject
Object.freeze(studentObject);
// modification
studentObject.age=25;
console.log(studentObject);

// addition
studentObject.electiveCourse="Aptitude";
studentObject.residentialAddress.landmark="Pitapuram Palav";
console.log(studentObject);

// deletion
delete studentObject.isMarried;
console.log(studentObject);

// how to deep freeze java script object
// function recursion
function deepFreezeObject(object){
    Object.freeze(object);
    for(let value of Object.values(object)){
        if(typeof value =="object" && value!=0){
            deepFreezeObject(value);
        }
    }
}
deepFreezeObject(studentObject);

// Object.isFrozen(object):boolean
// Object.isSealed(object):boolean
console.log(Object.isFrozen(studentObject));//true
console.log(Object.isFrozen(studentObject.javaFullStack));//true
console.log(Object.isFrozen(studentObject.residentialAddress));//true

// Object.assign(targetObject,sourceObject):assignedObject
let songs={
    flockSong:"VaaluKallaVayyari",
    romanticSong:"YedhutaNiliChindhi",
    sadSong:"KanPesumVaarthaigal"
}
console.log(songs);
Object.assign(songs,{
    devotionalSong:"OmSivoham",
    brotherFeelSong:"YaaroYaaro",
    flockSong:"AvaEnnaEnna"
});
console.log(songs);