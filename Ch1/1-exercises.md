# Exercises

Suppose you have a sorted list of 128 names. Max steps?

log2(128) =  7

Suppose you double the size of the list. What's the max steps now?

log2(256) = 8

This is logical because the first step of binary search is cutting the list in half, making a doubling of elements only one extra step for the algorithm.

1.3 You have a name, and you want to find the person’s phone number in the phone book.

O(log n)

1.4 You have a phone number, and you want to find the person’s name in the phone book. (Hint: You’ll have to search through the whole book!)

O(n)

1.5 You want to read the numbers of every person in the phone book.

O(n)

1.6 You want to read the numbers of just the As. (This is a tricky one! It involves concepts that are covered more in chapter 4. Read the answer—you may be surprised!)

O(n)
