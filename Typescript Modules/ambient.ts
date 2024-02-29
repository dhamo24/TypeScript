//Ambient Modules its used to declare external modules or third-party libraries in a typescript program. Ambient modules provide type information for modules that have no typescript declarations but are available in the global scope.

//mymodule.d.ts
declare module 'my-module'{
    export function dosomething(): void;
}


//main.ts

import * as mymodule from 'my-module';
mymodule.dosomething();