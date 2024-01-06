const InsertionSort = (arr: number[]) => {
    for(let i: number = 1; i < arr.length; i++){
        const key = arr[i];
        let j = i - 1;
        while(j >= 0 && arr[j] > key){
            arr[j+1] = arr[j];
            j = j - 1;
        }
        arr[j+1] = key
    }
    return arr;
}

console.log(InsertionSort([4,5,2,1,6]))
console.log(InsertionSort([2, 4, 1, 3]))
console.log(InsertionSort([5,6,2,1,2]))