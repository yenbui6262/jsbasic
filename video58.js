


var courses=[
    'java',
    'php',
    'ruby'
];


Array.prototype.forEach2=function(callback){
    for (var index in this){
       // console.log('index',index); nó log ra cả foreach
       
       //làm như sau nó sẽ ko log ra foreach
       if(this.hasOwnProperty(index)){
          // console.log(index);
          callback(this[index],index,courses)
       }
    }
};


courses.forEach2(function(course, index, array){
    console.log(course, index, array);
});