
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

//in ra từng phần tử của mảng, index là tham số thứ 2, index:số thứ tự từng phần trong mảng
        // courses.forEach(function(course, index){
        //     console.log(index,course);
        // });


//every: kiếm tra tất cả các phần tử của mảng có thỏa mãn điều kiều kiện nào đó ko
//trả về true hoặc false
    // var isFree=  courses.every(function(course, index){
    //     console.log(index);
    //         return course.coin===0;
    //     });

    //     console.log(isFree);


//some: ngược lại every, chỉ cần một phần tử thoẳ mãn điều kiện là trả về true
        // var isFree=  courses.some(function(course, index){
        //     console.log(index);
        //         return course.coin===0;
        //     });

        //     console.log(isFree);


//find: tìm kiếm phần tử trong mảng: find chỉ duyệt một lần...nếu thấy một phần tử nào đó thỏa mãn..nó sẽ dừng
        // var course=  courses.find(function(course, index){
        //         return course.name==='ruby';
        //     });

        //     console.log(course);

//filter: ngược với find: nó sẽ trả về nhiều phần tử thỏa mãn
        var course=  courses.filter(function(course, index){
                return course.name==='ruby';
            });

            console.log(course);
