//Global Augmentation is a way to add declarations to the global scope . this is useful when to add new functionality to existing libraries or to augment the bulit-in-types in typescript.


//myModule.d.ts 
declare namespace NodeJS {
    interface Global{
        myGlobalFunction(): void;
    }
}


//main.ts
globalThis.myGlobalFunction = function(){
    console.log('i am dhamo');
};

myGlobalFunction();