// Installation and Setup

// npm i -D typescript (Install typescript package (specify -g to install globally))
// tsc --init (creates tsconfig.json - edit this as per your requirements)
// tsc (compiles the files to js)

// Examples

// number
let n: number = 1
console.log(n)

// string
let greeting: string = "hello world"

// any
let x: any = 1
x = "any string"

// array
const nums: number[] = [1, 2, 3, 4, 5]

// tuple
const empInfo: [number, string] = [1, 'bot1']

// tuple array
const empsInfo: [number, string][] = [
	[1, 'bot1'],
	[2, 'bot2']
]

// union 
let pid: number | string = 25
pid = 'ac12'

// enum
enum DIR {
	UP = 25,
	DOWN = 32
}
// console.log(DIR.UP)

// object
type User = {
	id: number
	name: string
}
const user: User = {
	id: 23,
	name: 'john'
}

// type assertion 
let cid: any = 23
let custId2 = <number>cid
let custId3 = cid as number

// function - (return value can be void)
function addNums(a: number, b: number): number{
	return a+b
}

// Interface - (set optional value using "?", 
// restrict changing valus using "readonly")
// unions in interfaces is not possible
interface Point {
	readonly x: number
	y?: number
}
const p1: Point = { x: 1, y: 2 }

// classes
// properties of classes can be public(accessible), 
// private(not accessible from outside of class), 
// protected(only within + accessible to classes that extend this class)
// use "extends" to extend classes
class Customer {
	private id: number
	name: string
	constructor(id: number, name: string) {
		this.id = id
		this.name = name
	}
}

// generics
function makeArray<T>(items: T[]): T[] {
	return Array().concat(items)
}
const numArr = makeArray<number>([1, 2, 3, 4])
const strArr = makeArray<string>(['john', 'bill'])


