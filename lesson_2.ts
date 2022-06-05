let a : number;
a = 10;
// a = 'change'  // Type 'string' is not assignable to type 'number'


function sum ( a :number , b:number ) : number {
    // return 'test' // Type 'string' is not assignable to type 'number'.
    return a + b;
}

// console.log(sum(123,'456')) // Argument of type 'string' is not assignable to parameter of type 'number'
// console.log(sum(123,456 , 789)) // Expected 2 arguments, but got 3.