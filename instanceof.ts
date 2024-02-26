// The instanceOf operator is way to narrow down the type of a variable . it is used to check if an object is an instance of class

function logvalue (x : Date | string){
    if( x instanceof Date){
        console.log(x.toUTCString());
    }
    else{
        console.log(x.toUpperCase());
    }
}