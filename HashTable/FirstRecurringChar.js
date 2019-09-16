function firstRecurringChar(input) {
  for (let i = 0; i < inputlength; i++) {
    for (let j = i + 1; j < input.length; j++) {
      if (input[i] === input[j]) return input[i]
    }
  }
  return undefined
} // O(n^2)

function firstRecurringChar2(input) {
  let map = {}
  for (let i = 0; i < input.length; i++) {
    if (map[input[i]] !== undefined) {
      return input[i]
    } else {
      map[input[i]] = i
    }
  }
  return undefined
}

firstRecurringChar([2, 5, 1, 2, 3, 5, 1, 2, 4])
