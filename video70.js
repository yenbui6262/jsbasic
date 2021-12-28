
var headingElement=document.querySelector('h1');

//them thuoc tinh vao h1

headingElement.title='heading';

//muon them j thi viet vao do: .id; .className;

//muon them attribute
//2 tham so truyen vao : ten atribute, gia tri attri
headingElement.setAttribute('href','heaidng');

//muon lay ra gia tri cua attribute...viet ten attribute 
var laygiatri=headingElement.getAttribute('class');
console.log(laygiatri);

//vẫn có thể lấy được giá trị của attribute thêm bằng js
//giống như trên thôi..viết tên attribute
console.log(headingElement.getAttribute('title'));