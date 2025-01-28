//let ranNum = Math.trunc(Math.random() *(max-min) ) +min
const btn = document.getElementById('btn');
const l1 = document.getElementById('l1');
const l2 = document.getElementById('l2');
const l3 = document.getElementById('l3');

const max = 9;
const min = 0;

let ranNum1;
let ranNum2;
let ranNum3;

btn.onclick = function(){
    ranNum1 = Math.trunc(Math.random() *(max-min)) +min;
    ranNum2 = Math.trunc(Math.random() *(max-min)) +min;
    ranNum3 = Math.trunc(Math.random() *(max-min)) +min;
    l1.textContent = ranNum1;
    l2.textContent = ranNum2;
    l3.textContent = ranNum3;
}