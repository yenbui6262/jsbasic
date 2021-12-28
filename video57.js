var courses =[
    'java',
    'php'
];

// chỉ có 2 phần tử thực....8 phần tử trống...nếu đặt length bằng 10
courses.length=10;

//cách này nó sẽ duyệt cả phần tử trống
// for (i=0;i<courses.length;i++){
//     console.log(courses[i]);
// };

courses.push('abc','khgf');

console.log(courses);

// thêm 2 phần tử thì có 4 phần tử...nhưng độ dài là sẽ là 12 vì gán trên là 10
// dùng cách sau thì nó chỉ duyệt 4 mà thôi..

//cách này sẽ đúng hơn vì nó ko duyệt qua phần tử trống
for(var index in courses){
    console.log(courses[index]);
}