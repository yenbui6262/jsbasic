

//Json

//1.là mọt ngôn ngữ định dạng dữ liệu chuỗi
//2.json: nuber, boolean, null, aray, object, string

//stringjfy : java->json/ parse : json->java

var json='1';
var json='["java","php"]';
var json='{"name":"Son dang","age":18}';


var a='{"name":"Son dang","age":18}';

console.log(JSON.parse(a));

console.log(JSON.stringify([
    'java',
    'php'
]));

console.log(JSON.stringify({
 name: 'sondang',
    age : 16
}
    
    
));



