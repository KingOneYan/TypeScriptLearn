/**
 * 字面量类型
 */
let a : 10; // 字面量类型声名，类似const

// a = 11  // Type '11' is not assignable to type '10'.



/**
 * 联合类型
 */
// 可以用 | 连接多个类型（联合类型）
let b : "male" | "female"
b = "male"
b = "female"

let c : String | Boolean
c = false


/**
 * any类型
 */
// 相当于关闭ts的类型检测
let any: any

any = 'sss'
any = 123123


/**
 * unknow类型
 */

let unknow : unknown
unknow = 10
unknow = 'unknow'
//unknow类型不允许直接赋值给其他类型
 // c = unknow // Type 'unknown' is not assignable to type 'String | Boolean'.
if(typeof unknow === 'string'){
    c = unknow
}


/**
 * 类型断言，相当于类型转化
 * 语法 params as type
 *     <type>params
 */
c = unknow as String
c = <String>unknow


/**
 * void类型，没有返回值
 */
//void
function fn() : void{
    return
    // return true //  Type 'boolean' is not assignable to type 'void'.
}

/**
 * never类型
 */
//never表示永远不返回结果
function fn2() : never{
   throw new Error('error')
}


/**
 * object类型
 */
let uselessObj : object

uselessObj = {}

uselessObj = function (){}

/**
 * ? =》 可选属性
 */

let useObj : { name : String , age?: number}

// useObj = {name:123} // The expected type comes from property 'name' which is declared here on type '{ name: String; }'

useObj = {name:'NAME'}


/**
 * [property: string] 任意数量的属性
 */
let moreProperty : {name : String , [property: string] : unknown}

moreProperty = {name: '123123' ,age :123 ,sex: 'male'}

/**
 * function设置参数类型和返回类型
 */
let sumFunction : ( a :number , b:number ) => number


/**
 * 数组类型
 */
let array : number[]

let array2 : Array<String>

//array.push('123') //  Argument of type 'string' is not assignable to parameter of type 'number'

array.push(123)

/**
 * 元组类型：固定长度的数组
 */

let symbolArray : [string,string]

// symbolArray = ['num1','num2','num3'] //Source has 3 element(s) but target allows only 2


/**
 * enum: 枚举
 * ps: 学的时候感觉没什么用，抛弃了类型验证
 */

enum sex {
    male = 0,
    female = 1
}

let human : {
    name: String,
    male: sex
}

human = {
    name : '张三',
    male : sex.male
}