

var box=document.querySelector('.box');

console.log(box);

//cach them element vao element da co

box.innerHTML='<h1> new heading</h1>';

//box.outerHTML='<span>heading</span>'; cách này nó  sẽ ghi đè luôn vào thẻ ban đầu




//vẫn có thể lấy nội dung của h1 mới thêm
console.log(document.querySelector('h1').innerText);

console.log(box.innerHTML);

console.log(box.outerHTML);//lấy luôn từ bên ngoài thẻ