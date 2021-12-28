

var boxNode=document.querySelector('.box-1')

console.log(boxNode);

//muoons lay li ben trong box
//lay ra elemnt con

console.log(boxNode.getElementsByTagName('li'));

console.log(boxNode.querySelector('p'));



//chú ý lấy cả elemnet cách 1 dùng tagname nhưng log ra có chỉ số cách 2 dùng query
var ele = document.getElementsByTagName('li');
console.log(ele[0]);
