# Chapter 2

Your computer is a giant set of drawers, and each drawer has an address.

## Appending items to Linked Lists vs. Arrays

Adding items to an array is like seating at a movie theatre. If you and your friends add one more person, then there's a possibility there's already someone in a seat, causing you to have to move the entire group to a different section. Your computer needing to do this with arrays is slow.

Linked lists allow items to be anywhere in memory since they store the address of the next item in the list.

> Let’s say you go to a popular movie with five of your friends. The six of you are trying to find a place to sit, but the theater
is packed. There aren’t six seats together. Well, sometimes this happens with arrays. Let’s say you’re trying to find 10,000 slots for an array. Your memory has 10,000 slots, but it doesn’t have 10,000 slots together. You can’t get space for your array! A linked list is like saying, “Let’s split up and watch the movie.” If there’s space in memory, you have space for your linked list.

What's the issue with linked lists then? If you want to read the last item in a list, you need to go through the whole list. It's like going through those "top 100 songs" slideshows needing to click next 100x. Every item in the linked list is only connected by the address in the previous item.

Arrays have all the addresses upfront (they're the index).

## Question 1

2.1 Suppose you’re building an app to keep track of your finances.
Every day, you write down everything you spent money on. At the end of the month, you review your expenses and sum up how much you spent. So, you have lots of inserts and a few reads. Should you use an array or a list?

Linked list due to lots of inserts and few reads. It makes it easy to insert since you don't need to make space constantly, and the drawback of reading items is mitigated by the lack of reads needed.

## Inserting into Linked Lists vs Arrays

It's easier to add items to the middle of a linked list because you just change the address the element just before is pointing to. eg. listnumber(pointing to)

1(points to 2) -> 2(points to 3) -> 3(points to 4)

Then:

1(points to 2) -> 2(points to 5) -> 5(points to 3) -> 3(points to 4)

With an array, you need to move every single element down.

## Deleting items in Linked Lists vs Arrays

Arrays once again need you to move up every element if one in the middle is deleted. Linked lists can delete an item by simply changing what the previous item points to. If you don't point to an element it's effectively deleted from the list. Typically the first and last items of a linked list are tracked, so deleting them is O(1).

## Popularity

Arrays are more common due to random access which allows very quick reads. Linked Lists are sequential access meaning an element can only be acccessed after sequentially going through previous data.

## Exercises

> 2.2 Suppose you’re building an app for restaurants to take customer orders. Your app needs to store a list of orders. Servers keep adding orders to this list, and chefs take orders off the list and make them. It’s an order queue: servers add orders to the back of the queue, and the chef takes the first order off the queue and cooks it. Would you use an array or a linked list to implement this queue? (Hint: Linked lists are good for inserts/deletes, and arrays are good for random access. Which one are you going to be doing here?)

Linked lists because they're better for inserts which are the more common operation, and chefs usually are only taking the most recent order to make.

> 2.3 Let’s run a thought experiment. Suppose Facebook keeps a list of usernames. When someone tries to log in to Facebook, a search is done for their username. If their name is in the list of usernames, they can log in. People log in to Facebook pretty often, so there are a lot of searches through this list of usernames. Suppose Facebook uses binary search to search the list. Binary search needs random access—you need to be able to get to the middle of the list of usernames instantly. Knowing this, would you implement the list as an array or a linked list?

Array because reads from the middle of the list are needed almost always. 

> 2.4 People sign up for Facebook pretty often, too. Suppose you decided to use an array to store the list of users. What are the downsides
of an array for inserts? In particular, suppose you’re using binary search to search for logins. What happens when you add new users to an array?

> 2.5 In reality, Facebook uses neither an array nor a linked list to store user information. Let’s consider a hybrid data structure: an array of linked lists. You have an array with 26 slots. Each slot points to a linked list. For example, the first slot in the array points to a linked list containing all the usernames starting with a. The second slot points to a linked list containing all the usernames starting with b, and so on.

> Suppose Adit B signs up for Facebook, and you want to add them to the list. You go to slot 1 in the array, go to the linked list for slot 1, and add Adit B at the end. Now, suppose you want to search for Zakhir H. You go to slot 26, which points to a linked list of all the Z names. Then you search through that list to find Zakhir H.

> Compare this hybrid data structure to arrays and linked lists. Is it slower or faster than each for searching and inserting? You don’t have to give Big O run times, just whether the new data structure would be faster or slower.
