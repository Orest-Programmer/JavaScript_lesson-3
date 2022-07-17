"use stric"

function filterRange(array, a, b){
    let array2 = array.slice(a,b);
    console.log(array2);
}

let arr = [1, 4, 24, 4, 36, 40, 3, 7];
console.log(arr);
filterRange(arr, 2, 5);