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
