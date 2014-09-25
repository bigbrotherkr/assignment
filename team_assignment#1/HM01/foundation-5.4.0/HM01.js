window.onload = function(){
	alert('merong');
  //navbarPosition();
  window.onscroll = navbarPosition;
}
function navbarPosition(){
  var bar = document.getElementById("navbar");
  if(window.pageYOffset >= 70) {
  	bar.style.position = "fixed";
  	bar.style.top = "0px";
  }
  else{
  	bar.style.position = "relative";
  }
}