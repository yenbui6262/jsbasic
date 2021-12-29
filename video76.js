

// var h1=document.querySelector('h1');

// console.log(h1);

// h1.onclick=function(e){
//     console.log(e);
// }


//nhieu the h1
var h1=document.querySelectorAll('h1');

for(var i=0;i<h1.length;i++){
    //console.log(h1[i]);
    h1[i].onclick=function(e){
    console.log(e.target);
    }
}
