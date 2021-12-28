

var courses =[
    {
        id:1,
        name:'javascrip',
        coin:200
    },

    {
        id:2,
        name:'HTML',
        coin:0
    },
    {
        id:3,
        name:'CSS',
        coin:0
    },
    {
        id:4,
        name:'ruby',
        coin:250
    },
    {
        id:5,
        name:'ruby',
        coin:550
    },

];

//cách đơn giản là cách này
// var sumcoin=0;
// for (var course of courses){
//     sumcoin+=course.coin;}
// console.log(sumcoin);

//dùng reduce
//hàm này có 2 tham số

//2 đối số hàm và giá trị khởi tạo
var sum=courses.reduce((bienluutru,giatrihientai)=>bienluutru+giatrihientai.coin, 0);
console.log(sum);

