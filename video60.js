
//some: tối thiểu 1 phần tử thỏa mãn ko...true false


 Array.prototype.some2=function(callback){
     for(var index in this){
         if(this.hasOwnProperty(index)){
             
             if(callback(this[index], index, this)){
                 return true;
             }
         }
     }
     return false;
 }

var courses=[
    {
        name: 'java',
        coin: 680,
        isFinish: true
    },
    {
        name: 'php',
        coin: 880,
        isFinish: false
    },
    {
        name: 'ruby',
        coin: 580,
        isFinish: true
    },
    {
        name: 'pyhton',
        coin: 780,
        isFinish: false
    }
];



var result=courses.some2(function(course, index, array){
    return course.isFinish;
})

console.log(result);


