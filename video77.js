
var input1=document.querySelector('input[type="text"]');

// console.log(input1);

// lấy giá trị bên trong thẻ input khi mỗi lần thay đổi

input1.oninput=function(e){
    console.log(e.target.value);
}

//muốn kiểm tra xem đag chekc hay ko
//trả về true or false
var input2=document.querySelector('input[type="checkbox"]');

input2.onchange=function(e){
    console.log(e.target.checked);
}

//lấy giá trị của value select
var input3=document.querySelector('select');

input3.onchange=function(e){
    console.log(e.target.value);
};

//onkeyup, onkeydown





