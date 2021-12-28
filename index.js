// var fisrtName="yen";
// var lastName="bui";

// console.log(fisrtName+lastName);

// var a=1;  video18
// var b="1";

// console.log(a===b);

// var a=1;
// var b=2;

// var result ='a' && 'b' && 'd';

// console.log(result);//chạy ra giá trị cuối cùng ...nếu thay bằng or(||) thì nó sẽ lấy giá trị đầu tiên
//--------------------
//video 25-26

            // function writeLog(){
            //     myString="";
            //     for (var param of arguments){
            //         myString+=`${param} - `;
            //     }
            //     console.log(myString);
            // }
        
            // writeLog('log1','log2');


//confirm('messager');

            // function cong(a,b){
            //     return a+b;
            // }

            // var result = cong(2,8);
            // console.log(result);


//video 32: object cóntructor 

function User(firstName, lastName, avata){
    this.firstName=firstName;
    this.lastName=lastName;
    this.avata=avata;

}

var author=new User('yen','bui','anh');
var user=new User('anh','hoang','anh');
console.log(author);
console.log(user);



