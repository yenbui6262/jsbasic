
//dom style

var box=document.querySelector('.box');
console.log(box);

//chinh css: chinh tung dong
// box.style.width="100px";
// box.style.height="100px";
// box.style.backgroundColor="red";


//chinh theo object
Object.assign(box.style, {
    width :"100px",
    height:"100px",
    backgroundColor:"#017fff"
});

