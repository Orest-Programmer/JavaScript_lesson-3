"use stric"

function camelize(str){
    let arr = str.split('-');
    for(let i = 1; i < arr.length; i++){
        let s = arr[i];
        arr[i] = s.charAt(0).toUpperCase() + s.slice(1); 
    }
    let str2 = arr.join('');    
    console.log(str2);
}

let str = 'my-short-string';
console.log(str);
camelize(str);