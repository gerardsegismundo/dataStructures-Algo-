// BIG O EXERCISE
function funChallenge(input) {
  let a = 10 // O(1)
  a = 50 + 3 // O(1)

  for (let i = 0; i < input.length; i++) {
    // ^ O(n)
    anotherFunction() // O(n)
    let stranger = true // O(n)
    a++ // O(n)
  }

  return a // O(1)
}

// BIG O COUNT
// O(3 + 4n) -> simplified -> O(n)

// ---------------------------------------------------
// Applying Rule #2 - Drop the Constants
function compressBoxesTwice(boxes) {
  boxes.forEach(function(boxes) {
    console.log(boxes)
  })
  boxes.forEach(function(boxes) {
    console.log(boxes)
  })
}

// BIG O COUNT
// Rule #2 - Drop the Constants
// O(2n) -> simplified -> O(n)

//-------------------------------------------------------
// Applying Rule #3 - Different terms
function compressBoxesTwice(boxes, boxes2) {
  boxes.forEach(function(boxes) {
    console.log(boxes)
  })

  boxes2.forEach(function(boxes) {
    console.log(boxes)
  })
}

// BIG O COUNT
// O(a + b)

//-------------------------------------------------------
// Log all pairs of array
const boxes = ['a', 'b', 'c', 'd', 'e']

function logAllPairsOfArray(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      console.log(array[i], array[j])
    }
  }
}

logAllPairsOfArray(boxes)

// BIG O COUNT
// O(n*n) -> O(n^2)
// Quadratic time -- horrible

//-------------------------------------------------------
function printAllNumbersThenAllPairSums(numbers) {
  console.log('these are the numbers:')
  numbers.forEach(function(number) {
    console.log(number)
  })

  console.log('and these are their sums:')
  numbers.forEach(function(firstNumber) {
    numbers.forEach(function(secondNumber) {
      console.log(firstNumber + secondNumber)
    })
  })
}

printAllNumbersThenAllPairSums([1, 2, 3, 4, 5])

// BIG O COUNT
// Rule #4 Drop Non Dominants
// O(n + n^2) -> O(n^2)
