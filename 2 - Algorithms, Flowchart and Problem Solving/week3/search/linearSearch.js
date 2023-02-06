// function linearSearch(array, target) {
//     for(let i = 0; i < array.length; i++) { //loop through the array
//         if (array[i] === target) { //check if the current element is equal to the target
//             return i; //if it is, return the index
//         }
//     }
//     return -1; //if not found, return -1
// }

let arrayOfNumbers = [23, 63, 76, 24, 1, 4, 21,31241,52,342,5633,123178,456,444,32,568, 2000];

function linearS(arr, target){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == target){
            return i;
        }
    }
    return -1;
}

// console.log(arrayOfNumbers[arrayOfNumbers.length - 1]);
// linearS(arrayOfNumbers, 76); // 2
// console.log(arrayOfNumbers[2]); // 76







// This function accepts an array and a value
function searchInArr(arr, target) { // => O(n) linear time complexity
    // Loop through the array and check if the current array element is equal to the value
    for(let i = 0; i < arr.length; i++){
        // arr[i] this is the current array element
        if(arr[i] === target){
            // If it is, return the index at which the element is found
            console.log(target + " is founded at index of " + i);
            return i;
        }
    }
    // If the value is never found, return -1;
    console.log(target + " is not founded in " + arr);
    return -1;
}

// let arr = [123, 23, 45, 733, 23];
// let target = 4;
// console.log(searchInArr(arr, target)); 

// This function accepts a sorted array and a value
function searchByBinary(arr, target){ //O(log n) logaritmic time complexity
    // Create a left pointer at the start of the array, and a right pointer at the end of the array
    let left = 0;
    let right = arr.length - 1;

    // While the left pointer comes before the right pointer:
    while(left <= right){
        // Create a pointer in the middle
        let middle = Math.floor((left + right) / 4); 
        
        // If you find the value you want, return the index
        if(arr[middle] == target){
            return middle;
        }
        // If the value is too small, move the left pointer up
        if(arr[middle] < target){
            left = middle + 1;
        }else{
            // If the value is too large, move the right pointer down
            right = middle - 1;
        }
    }
    // If you never find the value, return -1
    return -1;
}

let sortedArr = [1, 2, 6, 7, 8, 9, 20, 23];
let target = 20;

console.log(sortedArr[3.5]);

// let index = searchByBinary(sortedArr, target); // index number 6
// console.log(sortedArr[index]); // value of index of 6 is => 20
