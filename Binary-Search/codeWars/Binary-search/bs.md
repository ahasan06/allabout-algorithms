A binary search algorithm is a way to look for the index of a certain value in a sorted array.

The algorithm will progressively cut the original array into smaller and smaller chunks until it finds the desired value. If the desired value is not found, return -1.

Let's take a look at an illustration from Wikipedia:

The list to be searched: L = 1 3 4 6 8 9 11. The value to be found: X = 4.

Compare X to 6. X is smaller. Repeat with L = 1 3 4.

Compare X to 3. X is bigger. Repeat with L = 4.

Compare X to 4. They are equal. We're done, we found X.

More information on Wikipedia

This makes it efficient for particularly large arrays because it doesn't have to completely iterate over them, so it will only take logarithmic time.

Write a function binSearch that can perform a binary search on large arrays and not time out. The function will have 2 parameters, which are a sorted array and an element to search.

Note: indexOf, lastIndexOf, eval, sort and sortedIndex are disabled.