interface myInterface {
    name : string,
    age : number,
    test(): void
}

const obj:myInterface = {
    name : '12123',
    age : 14,
    test(){
        console.log(1111)
    }
}

class myClass implements myInterface{
    name : string;
    age : number;
    constructor(name:string,age:number) {
        this.name = name
        this.age = age
    }
    test(){
        console.log(1111)
    }
}
