// Arrow functions
// scope this

const myfunction = () => {
  let _this = this;
  [1, 2].forEach(element => {
    console.log(this)
    console.log(_this)
    console.log(element)
  })
  console.log('First function in ES6')
}

const mySimpleFunction = () => console.log('Second function in ES6')

// Generators
function * calculator (input) {
  var doubleThat = 2 * (yield (input / 2))
  var another = yield (doubleThat)
  return (input * doubleThat * another)
}

myfunction()
mySimpleFunction()

const calc = calculator(10)
calc.next() // returns 5 because yield stops function and done false
calc.next(7) // returns 14 because 7 * 2 and stops functio in yiend(doubleThat)
calc.next(100) // returns 10 * 14 * 100 and done true
