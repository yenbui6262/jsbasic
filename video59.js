
//filter 

//hay quá
//code phức tạp hơn để nó trả về mảng có phần tử thỏa mãn
Array.prototype.filter2 =function(callback){
    var output =[];

    for (var index in this){
        if(this.hasOwnProperty(index)){
          var result =  callback(this[index], index, this)
          if(result){
                output.push(this[index]);//thêm vào output
          }
        }
    }
    return output;
}


var courses=[
    {
        name: 'java',
        coin: 680
    },
    {
        name: 'php',
        coin: 880
    },
    {
        name: 'ruby',
        coin: 580
    },
    {
        name: 'pyhton',
        coin: 780
    }
];

var filterCoures=courses.filter2(function(course, index, array){
  //  console.log(course, index, array);
    return course.coin >700;
})

console.log(filterCoures);
