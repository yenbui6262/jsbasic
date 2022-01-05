
//3.promise
// -sync : đồng bộ
// -async : bất đồng bộ

// setTimeout, setInterval, fetch

// -noi dau

//lý thuyết và cách hoạt động của promise

var promise =new Promise(
    function(resolve, reject){
         ///logic
         //thành công : resolve 
         //thất bạt : reject 
        // resolve();//in ra success

        
        resolve([
            {
                id: 1,
                name : 'java'
            }
        ]);

         //reject();//in ra fail
    }
);


promise 
//tra ve khoa hoc
    .then(function(course){
        console.log(course);
    })
    .catch(function(){
        console.log('fail');
    })
    .finally(function(){
        console.log('done');
    })



