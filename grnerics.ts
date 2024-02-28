// generic types allows you to write objects , functions and classes that work with multiple data types , instead of being limited to a single data type .A generic type is defened using angle brackets <T> and can be used as  aplace holder for specific data type . the actual data type is specified when the function or class is used.

const addUID = <T>(obj: T) => {
    let uid = Math.floor(Math.random()*100);
    return{...obj, uid}
}

let docOne = addUID ({name:'dhamo',age:23});
console.log(docOne);
console.log(docOne.name);