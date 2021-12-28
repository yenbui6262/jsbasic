


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

function courseHandler(course, index){
    //console.log(course);
    return{
        id: course.id,
        name: `Khoa hoc : ${course.name}`,
        coin: course.coin,
        coinText: `Gia: ${course.coin}`,
        index: index,
    };
}

var newCourses=courses.map(courseHandler);

console.log(newCourses);
