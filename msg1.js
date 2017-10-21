//alert( parseFloat("12Hello :)"));
      
var p = document.getElementById("banner");

setInterval(function() {
    if (p.style.fontSize != "2em") {
        p.style.fontSize = "2em";
    } else {
        p.style.fontSize = "3em";
    }
}, 2000);
			
document.getElementsByTagName('title')[0].text = "Training2";

var ObjectForButton = {
	
sayHello: function(){
	alert("Hello!");
},

getRandomNumber: function(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
},

changeBackgroundImage: function(data, val){
	data.style.backgroundImage = val;
},

changeBackgroundColor: function(){
	var data=document.getElementsByTagName("html")[0];
	this.changeBackgroundImage(data, "inherit");
	var mas = ["aqua", "black", "blue", "fuchsia", "gray", "green", "lime", "maroon", "navy", "olive", "orange", "purple", "red", "silver", "teal", "white", "yellow"];
	data.style.backgroundColor = mas[ this.getRandomNumber(0, mas.length ) ] ;
},

changePhoto: function(){
	var data = document.getElementById("photoForChange");
	data.src = this.getRandomNumber(0, 6 ) + ".jpg";
},
	
};








