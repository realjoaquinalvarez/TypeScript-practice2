import { Hero } from "./classes/Hero";
import { genericFunction, genericFunctionArrow, printObject } from "./generics/generics";
import { Villain } from "./interfaces";







// const name: string = 'Fernando'
// console.log( genericFunctionArrow(3.14324).toFixed(2) )
// console.log( genericFunctionArrow(name).toUpperCase() )
// console.log( genericFunctionArrow( new Date() ).getDate() )

const deadpool = {
    name: 'Deadpool',
    realName: 'Wade Winston Wilson',
    dangerLevel: 130
}

console.log( genericFunctionArrow<Villain>(deadpool) )