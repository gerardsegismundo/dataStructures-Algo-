const array1 = ['a', 'b', 'c', 'x']
const array2 = ['z', 'y', 'a']

function containsCommonItem2(arr1, arr2) {
  // loop through first array and create object
  //  where properties === items in the array
  let map = {}
  for (let i = 0; i < arr1.length; i++) {
    if (!map[array1[i]]) {
      const item = array1[i]
      map[item] = true
    }
  }
  // loop through second array and check if
  // item in second array exists on created object
  for (let j = 0; j < arr2.length; j++) {
    if (map[array2[j]]) {
      return true
    }
  }
  return false
}

// O (a + b)
// Naive solution = O(n^2)

// Javascript
function containsCommonItem3(arr1, arr2) {
  return arr1.some(item => arr2.includes(item))
}
