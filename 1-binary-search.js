// binary search

// cut elements in half, 
// check if answer is higher or lower, 
// then cut in half again. 

function binarySearch (list, item) {
  let low = 0
  let high = list.length - 1

  while (low <= high) {
    let mid = Math.floor((low + high) / 2)

    guess = list[mid]
  
    if (guess > item) {
      high = mid - 1
    } else if (guess < item) {
      low = mid + 1
    } else if (guess == item) {
      return mid
    } else {
      console.log("error")
    }
  }
}

const some_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

binarySearch(some_list, 3)
