class TestClass {
  constructor() {
    console.log(new.target.name)
  }

  method() {
  }

  set arms(value) {
    console.log('Setting arms to:', value)
    this._arms = value
  }

  get arms() {
    console.log('Getting arms of:', this._arms)
    return this._arms
  }
}

class TestSubclass extends TestClass {
  constructor() {
    super();
  }
}

console.log('-- Playground results')
var test_instance = new TestSubclass()

test_instance.arms = true

// Promise.resolve()
//   .then(function () {
//     console.log(this)
//   })

function spreadTest(...args) {
  console.log(args)
}

spreadTest(1, 2, 3)

// var [a, ...b, c] = [1, 2, 3, 4, 5]

var o = Object.create({ foo: () => 'hi' })
console.log(o.foo())
console.log(Reflect.ownKeys(o))

var matrixOnServer = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]

function *getMatrixFromServer() {
  var matrix = matrixOnServer

  for (let rowIndex = 0; rowIndex < 3; rowIndex++) {
    for (let colIndex = 0; colIndex < 3; colIndex++) {
      yield matrix[rowIndex][colIndex]
    }
    yield null
  }
}

var iter = getMatrixFromServer()
var matrix = [[]]
var colIndex = 0

for (i of matrix) {
  if (i == null) {
    colIndex = 0
    break
  }

  matrix[colIndex].push(i)
}

for (i of matrix) {
  if (i == null) {
    colIndex = 0
    break
  }

  matrix[colIndex].push(i)
}

function i18n() {
  return function () {
    console.log(arguments)
  }
}

i

let cost = 0.50
let totalCost = i18n({
  en_us: ['Total Cost: $'],
  gibberish: ['awefasdhliwe: £'],
})
totalCost`Total Cost: $${cost}`

console.log(matrix)

var a = `
  some heredoc
`
var b = '\n\
  some heredoc\n\
'
console.log('%j', a)
console.log('%j', b)
console.log('%s', a)
console.log('%s', b)
console.log(a == b)


class ThisTest {
  mine() {
    return this
  }

  static ours() {
    return this
  }
}

var a = new ThisTest()

console.log(a.mine())
let mine = a.mine
console.log(mine())
console.log(ThisTest.ours())
let ours = ThisTest.ours
console.log(ours())

{
  var real = { answer: 42 }
  var fake = Object.keys(real)
    .reduce(function (obj, key) {
      return Object.defineProperty(obj, key, {
        get: function () {
          console.log('Fetching ' + key + '...')
          return real[key]
        }
      })
    }, {})
  fake.answer
  // Fetching answer...
  fake.missing
}

{
  let real = { answer: 42 }
  let fake = new Proxy(real, {
    get: function (obj, key) {
      console.log('Fetching ' + key + '...')
      return obj[key]
    }
  })
  fake.answer
  // Fetching answer...
  fake.missing
}

function doThingAsync() { return Promise.resolve() }

{
  let result = doThingAsync()
    // -> p1
    .then(function (resultOfP1) {})
    // -> p2
    .then(null, function (errorFromP2) {})
    // -> p3
    .catch(function (errorFromP3) {})
    // -> p4
}

{
  doThingAsync()
    .then(function (result) {
      return Promise.resolve(42)
    })
    .then(console.log)
}

{
  doThingAsync()
    .then(function (result) {
      return {
        then(fn) { return fn(42) }
      }
    })
    .then(console.log)
}

{
  doThingAsync()
    .then(function (result) {
      return 42
    })
    .then(console.log)
}

{
let arr = [1, 2, 3, 4, 5]
console.log(arr.map((number) => { return number / 0 }))
// [ Infinity, Infinity, Infinity, Infinity, Infinity ]
console.log(arr.map((number, index) => number + index))
// [ 1, 3, 5, 7, 9 ]
console.log(arr.map(number => number % 2))
// [ 1, 0, 1, 0, 1 ]
}
{
const fibonacci = (n) => {
  if (n === 0 || n === 1) {
    return n
  } else {
    return arguments.callee(n - 1) + arguments.callee(n - 2)
  }
}
// console.log(fibonacci(10))
// // By itself:
// // ReferenceError: arguments is not defined
// // In another function:
// // RangeError: Maximum call stack size exceeded
}
{
function fibonacci(n) {
  if (n === 0 || n === 1) {
    return n
  } else {
    return arguments.callee(n - 1) + arguments.callee(n - 2)
  }
}
console.log(fibonacci(10))
}
{
console.log('--- this')
let obj = {
  viaFunction: function () {
    return this.property
  },
  viaArrow: () => this.property,
  property: 'test'
}
console.log(obj.viaFunction())
// test
console.log(obj.viaArrow())
// undefined
}

// {
// const ArrowClass = () => {}

// var arrow = new ArrowClass()
// }

// {
// const ArrowClass = () => {}

// ArrowClass.prototype.greet = (name) => {
//   console.log(`Hi, ${name}!`)
// }
// // TypeError: Cannot set property 'greet' of undefined
// }

// {
// const generator = *() => {}
// // SyntaxError: Unexpected token *
// }

{
const buildOptions = () => { option: true }
console.log(buildOptions())

const buildOptionsFix = () => ({ option: true })
console.log(buildOptionsFix())
}

{
// function asyncThing(callback) {
//   let fn = callback || err => { throw err; }
//   // SyntaxError: Unexpected token ||
//   fn(null)
// }

// function asyncThingFix(callback) {
//   let fn = callback || (err => { throw err; })
//   // SyntaxError: Unexpected token ||
//   fn(null)
// }
}

{
// (() => console.log('foo')())
// [Nothing happens.]
// (() => { console.log('foo') }())
// SyntaxError: missing ) after argument list
// (() => { console.log('foo') })()
// foo
}

{
  let a = { foo: true, bar: 'please', answer: 42 }
  console.log(a)
  delete a['foo']
  console.log(a)
  Reflect.deleteProperty(a, 'answer')
  console.log(a)
}
