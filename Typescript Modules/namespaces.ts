//Namespaces are used to organize and share code across multiple files .Nmaespaces allow you to group related functionality into a single unit and prevent naming conflicts.

//MyNamespace.ts
namespace MyNamespace{
    export function dosomething(){
        console.log('doing something...')
    }
}


//main.ts
<reference path = "MyNamespace.ts"/>
MyNamespace.dosomething();