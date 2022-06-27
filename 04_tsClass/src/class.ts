
abstract class Animal {
    name: string = 'one';
    animalName: string;
    //静态属性，通过直接访问class
    static staticProperty : string = 'staticProperty';

    readonly readonly : string = 'readonly'

    //构造器
    constructor(animalName:string) {
        this.animalName = animalName
    }

    sayHello(){
        console.log('i am animals')
    }

    abstract abstractFunction():void
}



class Dog extends Animal{
    age:number

    constructor(animalName:string , age:number) {
        super(animalName)
        this.age = age
    }

    sayHello(){
        super.sayHello()
        console.log(this.animalName + 'wang wang wang' , `i am ${this.age} years old`)
    }

    abstractFunction(){}
}

class Cat extends Animal{
    sayHello(){
        console.log(this.animalName + 'miao miao miao')
    }

    abstractFunction(){}
}

const dog1 = new Dog('dog1' , 15)
const dog2 = new Dog('dog2' , 10)
// console.log(person.staticProperty)

// person.readonly = 'canChange'

dog1.sayHello()
dog2.sayHello()


const cat1 = new Cat('cat1')
cat1.sayHello()
