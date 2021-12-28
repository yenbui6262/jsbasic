
//some: tối thiểu 1 phần tử thỏa mãn ko...true false
//every ngược lại some: tất cả thảo mãn nó mới true thôi

Array.prototype.every2=function(callback){
    for(var index in this){
        if(this.hasOwnProperty(index)){
            var result =callback(this[index], index, this)
            if(!result){
                return false;
               
            }
            
        }
    }

    return true;
   
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



var result=courses.every2(function(course, index, array){
   return course.isFinish;
})

console.log(result);


