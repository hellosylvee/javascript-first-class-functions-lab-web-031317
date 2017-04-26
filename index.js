function countdown(callback) {
  window.setTimeout(callback, 2000)
}

var doubler = createMultiplier(2)
var tripler = createMultiplier(3)

function createMultiplier(multiplierValue) {
  return function(n) {
    return n * multiplierValue   //helper function that takes a number
  }
}
// doubler(10) outputs 20


function multiplier(multiplierValue, value) {
  return multiplierValue * value
}

var doublerWithBind = multiplier.bind(null, 2)
var triplerWithBind = multiplier.bind(null, 3)
