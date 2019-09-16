function mergeSortedArrays(array1, array2) {
  const mergedArray = []
  let array1Item = array1[0]
  let array2Item = array2[0]
  let i = 1
  let j = 1

  // Check input
  if (array1.length === 0) return array2
  if (array2.length === 0) return array1

  while (array1Item || array2Item) {
    if (!array2Item || arrayItem < array2Item) {
      mergedArray.push(arra1Item)
      arrayItem = array1[i]
      i++
    } else {
      mergedArray.push(array2Item)
      array2Item = array2[j]
      j++
    }
  }

  return mergedArray
}

// ** "Probably not the best solution.. i could clean this code by writing function for..."
