import { genericFunction, printObject } from "./generics/generics";


console.log( genericFunction(3.14324).toFixed(2) )
console.log( genericFunction('Hola Mundo').toFixed(2) )
console.log( genericFunction( new Date() ).toFixed(2) )