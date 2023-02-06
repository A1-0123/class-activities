A `search algorithm` is a method used to find a specific item in a collection of items, such as an array or a list. There are several different types of search algorithms, such as linear search and binary search.

`Linear search` is the simplest search algorithm. It starts at the beginning of the collection and looks at each item one by one, in order, until it finds the item it is looking for.

```js
function linearSearch(array, target) {
    for(let i = 0; i < array.length; i++) { //loop through the array
        if (array[i] === target) { //check if the current element is equal to the target
            return i; //if it is, return the index
        }
    }
    return -1; //if not found, return -1
}
```

`Linear search` is a simple search algorithm that checks every item in a collection one by one, in the order they appear, until it finds the item it is looking for. It is also known as a "sequential search" because it looks at each item in sequence.

It is a straightforward algorithm and easy to understand, but it can be slow for large collections because it has to check every item even if the item is not in the collection or is not at the beginning.

The `worst-case time complexity` of linear search is `O(n)`, meaning that in the worst case, the algorithm will take n steps to complete, where n is the number of items in the collection. This makes linear search less efficient than other search algorithms like binary search, which has a `worst-case time complexity` of `O(log n)`.

However, linear search can be useful in certain situations. For example, if the collection is small, or if the collection is not sorted and you can't use a more `efficient` sorting-based algorithm like binary search. It's also useful when searching for multiple items in a collection, since it can return all the occurrences of the item in the collection.

In JavaScript, the `Array.prototype.indexOf()` and `Array.prototype.includes()` methods are example of linear search, you can use them to find the first occurrence of an element in an array.

`Binary search` is a more efficient search algorithm than linear search, but it can only be used on sorted collections. It starts by looking at the middle item in the collection. 
If the item is the one being searched for, the algorithm is done. If the item is greater than the one being searched for, the algorithm looks at the middle item of the left half of the collection. If the item is less than the one being searched for, the algorithm looks at the middle item of the right half of the collection. 
The algorithm keeps dividing the collection in half until it finds the item or determines that the item is not in the collection.

```js
function binarySearch(array, target) {
    let left = 0; //start from the beginning of the array
    let right = array.length - 1; //end at the end of the array
    while (left <= right) { //loop until left pointer is greater than right pointer
        let middle = Math.floor((left + right) / 2); //find the middle element
        if (array[middle] === target) { //check if the middle element is equal to the target
            return middle; //if it is, return the index
        } else if (array[middle] < target) { //if the middle element is less than the target
            left = middle + 1; //move the left pointer to the right
        } else {
            right = middle - 1; //move the right pointer to the left
        }
    }
    return -1; //if not found, return -1
}
```

`Binary search` is a more efficient search algorithm than linear search. It can only be used on sorted collections and starts by looking at the middle item in the collection.

The basic idea behind `binary search` is to divide the collection in half and look at the middle element. If the middle element is the item we are looking for, we are done. If the middle element is greater than the item we are looking for, we know that the item must be in the left half of the collection, so we repeat the process on the left half. If the middle element is less than the item we are looking for, we know that the item must be in the right half of the collection, so we repeat the process on the right half. This process is repeated until the item is found or it is determined that the item is not in the collection.

Because the collection is divided in half at each step, the algorithm is able to eliminate half of the remaining possibilities with each step. This makes the algorithm much faster than linear search for large collections. The worst-case time complexity of binary search is `O(log n)`, where n is the number of items in the collection. This means that the algorithm will take log(n) steps to complete, which is much faster than linear search's `O(n)` time complexity.

One important thing to keep in mind is that the array must be sorted for binary search to work. If the array is not sorted, the algorithm won't work correctly.

In JavaScript, the`Array.prototype.indexOf()` and `Array.prototype.includes()` methods are not suitable for binary search because they are linear search. However, you can create your own binary search algorithm using the `Array.prototype.slice()` method to divide the array in half.

It is important to note that both these examples assume that the input array is sorted. If the input array is not sorted, these algorithms won't work correctly.