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

function binaryS(arr, target){
    let left = 0;
    // starting from beginning
    let right = arr.length - 1;
    // arr.length - 1 will give you the last element's index
    while(left <= right){
        let middle = Math.floor((left + right) / 2);

        if(arr[middle] === target){
            return middle;
        }else if (arr[middle] < target){
            left = middle + 1;
        }else {
            right = middle - 1;
        }
    }
    return -1;
}

// let arr = [1, 2, 3, 4, 5, 6];
// let target = 5;
// console.log(binaryS(arr, target)); // 4

if(!character) res.render("index/" + user.id, { user: user, character: "", title: "", message: "" })