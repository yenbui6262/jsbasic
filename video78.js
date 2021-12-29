
var a=document.links;

for(var i=0;i<a.length; ++i){
    a[i].onclick=function(e){
       // console.log(e.target.href);
       //kiểm tra xem có phải là f8 ko thì mới cho chuyển trang

       if(!e.target.href.startsWith('https://f8.edu.vn')){
           e.preventDefault();//ngăn chặn
       }
    }
}


//ngăn chặn hành vi mặc định
//khi focus vẫn có thể lấy thẻ li

var ul=document.querySelector('ul');

ul.onmousedown=function(e){
    e.preventDefault();
}

ul.onclick=function(e){
    console.log(e.target);
}

//------

document.querySelector('div').onclick=function(){
    console.log('div');
}

document.querySelector('button').onclick=function(e){
    e.stopPropagation();//xóa nổi bọt
    console.log('click');
}