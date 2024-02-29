import { MyModule } from './namespaceAugmentation';
//NamespaceSpace Agumentation is a way to extend or modify existing namespaces. This is useful when to add new functionality to existing namespaces or to fix missing or incorrrect declarations in third-party libraies.

//myModule.d.ts
declare namespace MyModule{
    export interface MyModule{
        newFunction(): void;
    }
}

//main.ts
<reference path="myModule.d.ts"/>
namespace MyModule{
    export class MyModule{
        public newFunction(){
            console.log('I am dhamo');
        }
    }
}


const obj = new MyModule.MyModule();
obj.newunction();