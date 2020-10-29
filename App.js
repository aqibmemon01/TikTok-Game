var one=prompt("Player 1 Please Enter Your Name");
var two=prompt("Player 2 Please Enter Your Name");
var color="green";
var counter=1;

function clickme(z){
  if(document.getElementById(z).innerText==one || document.getElementById(z).innerText==two)
   {}
  else{
	if( counter==1 || counter==3 || counter==5 || counter==7 || counter==9)
		{
 document.getElementById(z).innerText=one;
 counter++;
 }
 else if ( counter==2 || counter==4 || counter==6 || counter==8)
		{
 document.getElementById(z).innerText=two;
 counter++;
 };
 
 
  if(document.getElementById("a").innerText==document.getElementById("b").innerText &&
  	document.getElementById("b").innerText==document.getElementById("c").innerText
  ){
   document.getElementById("a").style.backgroundColor=color;
   document.getElementById("b").style.backgroundColor=color;
   document.getElementById("c").style.backgroundColor=color;}
 else if(document.getElementById("d").innerText==document.getElementById("e").innerText &&
  	document.getElementById("e").innerText==document.getElementById("f").innerText
  ){
   document.getElementById("d").style.backgroundColor=color;
   document.getElementById("e").style.backgroundColor=color;
   document.getElementById("f").style.backgroundColor=color;}
 else if(document.getElementById("g").innerText==document.getElementById("h").innerText &&
  	document.getElementById("h").innerText==document.getElementById("i").innerText
  ){
   document.getElementById("g").style.backgroundColor=color;
   document.getElementById("h").style.backgroundColor=color;
   document.getElementById("i").style.backgroundColor=color;}
 else if(document.getElementById("a").innerText==document.getElementById("d").innerText &&
  	document.getElementById("d").innerText==document.getElementById("g").innerText
  ){
   document.getElementById("a").style.backgroundColor=color;
   document.getElementById("d").style.backgroundColor=color;
   document.getElementById("g").style.backgroundColor=color;}
 else if(document.getElementById("b").innerText==document.getElementById("e").innerText &&
  	document.getElementById("e").innerText==document.getElementById("h").innerText
  ){
   document.getElementById("b").style.backgroundColor=color;
   document.getElementById("e").style.backgroundColor=color;
   document.getElementById("h").style.backgroundColor=color;}
 else if(document.getElementById("c").innerText==document.getElementById("f").innerText &&
  	document.getElementById("f").innerText==document.getElementById("i").innerText
  ){
   document.getElementById("c").style.backgroundColor=color;
   document.getElementById("f").style.backgroundColor=color;
   document.getElementById("i").style.backgroundColor=color;}
 else if(document.getElementById("a").innerText==document.getElementById("e").innerText &&
  	document.getElementById("e").innerText==document.getElementById("i").innerText
  ){
   document.getElementById("a").style.backgroundColor=color;
   document.getElementById("e").style.backgroundColor=color;
   document.getElementById("i").style.backgroundColor=color;}
 else if(document.getElementById("c").innerText==document.getElementById("e").innerText &&
  	document.getElementById("e").innerText==document.getElementById("g").innerText
  ){
   document.getElementById("c").style.backgroundColor=color;
   document.getElementById("e").style.backgroundColor=color;
   document.getElementById("g").style.backgroundColor=color;}
 }
 }