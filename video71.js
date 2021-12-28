


var headingE=document.querySelector('h1');


//lay noi dung trong the h1
console.log(headingE.innerText);
console.log(headingE.textContent);

//doi noi dung ben trong h1
headingE.innerText='new heading';

//sự khác biệt giữa innertext và textContent
//innerText : lấy nôi dung những j nhìn thấy
//textContent : lấy nội dung thực sự bên trong ví dụ như khoảng cách dòng enter, ko bị ảnh hưởng bởi display: none

var headingE2 =document.querySelector('.heading_2');

console.log(headingE2.innerText);
console.log(headingE2.textContent);
