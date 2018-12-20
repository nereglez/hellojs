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
calc.next()
