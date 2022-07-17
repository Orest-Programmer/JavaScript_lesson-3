"use stric"

function find(arr, value){
    let index;
    let valueIn;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == value){
            valueIn = arr[i];
            index = i;
        }
    }
    if(value == valueIn){
        console.log(`Index of value "${valueIn}" is ` + index);
    }else console.log(-1);
}

let array = ['Olga', 'Orest', 'Andrew', 'Oleg', 'Den'];
find(array, 'Andrew'); // If value is "Karl" ---> return -1