function onClickMenu(){
	document.getElementById("menu").classList.toggle("change");
	document.getElementById("nav").classList.toggle("change");
	
	document.getElementById("menu-bg").classList.toggle("change-bg");
}
console.log("script");
var pos;
pos=0;
var x = document.getElementById("img1");



window.addEventListener('load',function(){
  
 var Position=["./img/blue.png", "./img/water.png"];
 console.log(Position.length);
 x.style.backgroundImage=`url(${Position[pos]})`;
  x//.style.backgroundImage=Position[0].
setInterval(function(){ 
  console.log(pos);
  
     pos=pos+1;
     x.style.backgroundImage=`url(${Position[pos]})`;
  
     if (pos>=Position.length) {
      pos=0;
      x.style.backgroundImage=`url(${Position[pos]})`;
     }
   
   
   
   //if (pos==1){
   //  pos=pos-1;
  //   x.style.backgroundImage=`url(${Position[pos]})`;
  // }
  
   
  
}
, 5000);
});