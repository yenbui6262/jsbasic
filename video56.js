var courses=[
    'java',
    'php',
    'ruby'
];

// dinh nghia cho map2
Array.prototype.map2=function(callback){
   // console.log(this);
   var arrayLength=this.length;

   for(var i=0; i<arrayLength; i++){
   var result= callback(this[i],i);
   console.log('result',result);
   }

}

//in ra tung phan tu trong mang
// courses.map(function(course){
//     console.log(course);
// });

var htmls= courses.map2(function(course){
   // console.log(index, course);
   return `<h2>${course}<h2>`;
});





