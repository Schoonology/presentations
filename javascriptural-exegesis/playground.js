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



