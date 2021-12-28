// call back?

// là hàm được truyền qua đối số
// khi gọi hàm khác


// 1.là hàm
// 2.được truyền qua đối số

function myfuntion(param){
    param('hoc anh son');
}

//in ra dong chu hoc lap trinh web
//myfuntion('hoc lap trinh web');
//truyen j vao thi se nhan laj thu do

function mycallback(value){
    console.log('value' ,value);
}

myfuntion(mycallback);