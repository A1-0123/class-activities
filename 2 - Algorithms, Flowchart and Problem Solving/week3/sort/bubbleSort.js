let numbers = [5, 123, 73, 98, 3, 6]

function swap(arr, idx1, idx2){
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
}

function bubbleSort(arr){
    var i, j;
    for (i = 0; i < arr.length-1; i++){
        for (j = 0; j < arr.length-i-1; j++){
            console.log(arr[j], arr[j+1])
            if (arr[j] > arr[j+1]){
                swap(arr,j,j+1);
            }
        }
    }
    return arr;
}

console.log(bubbleSort(numbers));