'use strict';
// binary search

// cut elements in half, 
// check if answer is higher or lower, 
// then cut in half again. 

function binarySearch (list, item) {
  let low = 0
  let high = list.length - 1

  while (low <= high) {
    let mid = Math.floor((low + high) / 2)
    let guess = list[mid]

    console.log('middle index of list is', mid)
    console.log('computer guesses', guess)

    if (guess > item) {
      high = mid - 1
    } else if (guess < item) {
      low = mid + 1
    } else if (guess === item) {
      return mid
    } else {
      console.log("error")
    }
  }
  return null;
}

const some_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const list2 = [1, 3, 5, 7, 9];


console.log('index of guess is', binarySearch(some_list, 3))
console.log('index of guess is', binarySearch(some_list, 5))

console.log('index of guess is', binarySearch(list2, 3))

// console.log(binarySearch(some_list, 5))
// console.log(binarySearch(some_list, -1))