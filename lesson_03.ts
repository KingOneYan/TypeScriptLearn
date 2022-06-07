let a : 10; // 字面量类型声名，类似const

// a = 11  // Type '11' is not assignable to type '10'.


// 可以用 | 连接多个类型（联合类型）
let b : "male" | "female"
b = "male"
b = "female"

let c : String | Boolean
c = false

// 相当于关闭ts的类型检测
let any: any

any = 'sss'
any = 123123

let unknow : unknown
unknow = 10
unknow = 'unknow'
//unknow类型不允许直接赋值给其他类型
 // c = unknow // Type 'unknown' is not assignable to type 'String | Boolean'.
if(typeof unknow === 'string'){
    c = unknow
}

// 类型断言
/**
 * 语法 params as type
 *     <type>params
 */
c = unknow as String
c = <String>unknow


//void无返回值，没有返回值
function fn() : void{
    return
    // return true //  Type 'boolean' is not assignable to type 'void'.
}

//never表示永远不返回结果
function fn2() : never{
   throw new Error('error')
}

