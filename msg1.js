function showMessage(){

	 function show() {
  alert("Hello, " + userYear + " years old human");
}

var userYear = prompt("How are you old?","1");
if(userYear == 19){
alert("My admin of your age");
var isAdmin = confirm("Are you admin?");

//isAdmin ? var pass = prompt("Enter password","") : pass == "qwe" ? alert("Hello, my lovely admin") : alert("Do not lie me. You didn't my admin. Fuck you!");

if(isAdmin){
var pass = prompt("Enter password","");

if(pass == "qwe"){
alert("Hello, my lovely admin");
}
else{
alert("Do not lie me. You didn't my admin. Fuck you!");
}	

}
else{
show();
}

}else if(userYear == null){}
else{
show();
}

}