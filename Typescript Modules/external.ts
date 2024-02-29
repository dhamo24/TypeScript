// external modules allow you to organize and share code across multiple files . external modules in typescript follow the commonjs or ES modules standards.


//myModule.ts
export function dosomething(){
    console.log('Doing Something...');
}

//main.ts 
import {dosomething} from './myModule';
dosomething();