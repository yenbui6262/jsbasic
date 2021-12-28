
var courses =[
    {
        id:1,
        name:'javascrip',
        coin:200
    },

    {
        id:2,
        name:'HTML',
        coin:300
    },
    {
        id:3,
        name:'CSS',
        coin:200
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

var numbers=[200,300,200,250,550];

var totalCoin=numbers.reduce(function(curent,number){
    return curent +number;
})
console.log(totalCoin);

//làm phẳng mảng: làm cho các mảng ocn bên trong mảng tách ra bên ngoài thành mảng bình thường
var depthAraay=[1, 2, [3,4], 5, 6, [7, 8, 9]];

var flatArray=depthAraay.reduce(function(flatoutput, flatresult){
    return flatoutput.concat(flatresult);
}, []);
console.log(flatArray);
