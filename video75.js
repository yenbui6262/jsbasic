
//classList

var box=document.querySelector('.box');

//lay ra do dai cua classs
console.log(box.classList.length);

console.log(box.classList.value);


//them class vao elemnet
//muon them nhieu class thi dung dau ,
box.classList.add('red');

//kiem tra xem co ton tai class 'red' ko
box.classList.contains('red');
console.log(box.classList.contains('red'));


//cach xoa class moi them
//box.classList.remove('red');

setInterval(()=>{
    box.classList.toggle('red');
}, 1000);



