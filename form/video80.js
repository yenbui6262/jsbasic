

    let taikhoan=document.getElementById("taikhoan");
    let email=document.getElementById("email");
    let matkhau=document.getElementById("matkhau");
    let matkhau2=document.getElementById("matkhau2");


    let tk=document.getElementById("messagetk");
    let mail=document.getElementById("messagemail");
    let mk=document.getElementById("messagemk");
    let mk2=document.getElementById("messagemk2");

function submit_hand(){

    let check=true;
    if(taikhoan.value.length <= 6){
        check=false;
        tk.innerHTML="Tài khoản không được rỗng và phải lớn hơn 6 kí tự";
    }else{
        tk.innerHTML="";
    }

    if(matkhau.value.length <= 6){
        check=false;
        mk.innerHTML="Mật khẩu phải lớn hơn 6 kí tự";
    }else{
        mk.innerHTML="";
    }

    if(matkhau2.value.length != matkhau.value.length){
        check=false;
        mk2.innerHTML="Mật khẩu ko khớp";
    }else{
        mk2.innerHTML="";
    }

    return check;
};