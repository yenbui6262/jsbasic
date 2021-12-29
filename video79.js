// 1.event listenner
// 2.json
// 2.fetech
// 4.dom location
// 5.locoal

var btn=document.getElementById('btn');
console.log(btn);

//lam 3 viec mot luc
// btn.onclick=function(){
//     console.log('viec 1');

//     console.log('viec 2');

//     alert('viec 3');
// }


//sau 3 s moi lam 
// setTimeout(function(){
//     btn.onclick=function(){
//         console.log('viec 1');
    
//         console.log('viec 2');
    
//         alert('viec 3');
//     }
// }, 3000);

btn.addEventListener('click',function(){
    console.log(Math.random());
})




