"use stric"

function devide(){
    console.log('---------------------------------------------------');
}

function showMass(arr){
    console.log(arr);
}

devide();

let styles = ['Jazz', 'Bluz'];
showMass(styles);
styles.push('Roc-n-Roll');
showMass(styles);
devide();

// styles[styles.length -2] = 'Clasic';
// showMass(styles); Can be like this one

styles.splice(-2, 1, 'Clasic');
showMass(styles);// Or this one
devide();

showMass(styles.shift());
devide();

styles.unshift('"Rap" & "Reggi"');
showMass(styles);
devide();