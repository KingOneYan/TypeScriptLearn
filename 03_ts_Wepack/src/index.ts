import {test} from './importFile2'
function sum (num1:number , num2:number):number {
    return num1 + num2
}

var a  = sum(1 , 2)

console.log(a)

console.log(test)

const babelObj = { name:'babelObj' ,age :33}
babelObj.age = 18
console.log(babelObj)

console.log(Promise)
