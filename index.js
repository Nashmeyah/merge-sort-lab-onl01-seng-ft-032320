function findMinAndRemoveSorted(array){
  let min = array[0]
  let minIndex = 0
  for(let i = 0; i < array.length; i++){
    if(array[i]<min){
      min = array[i]
      minIndex = i
    }
  }
  array.splice(minIndex,1)
  return min
}

function merge(first, second){
  let sorted = []

  while(first.length != 0 && second.length != 0){
    let firstMin = findMinAndRemoveSorted(first)
    let secondMin = findMinAndRemoveSorted(second)
    sorted.push(firstMin)
    sorted.push(secondMin)
  }
  return sorted.concat(first).concat(second)

}

// function mergeSort(array){
//   let midpoint = array.length/2
//   let firstHalf = array.slice(0, midpoint)
//   let secondHalf = array.slice(midpoint, array.length)
//
//   if(array.length < 2){
//      return array
//    } else {
//      merge(mergeSort(firstHalf), mergeSort(secondHalf))
//    }
// }
