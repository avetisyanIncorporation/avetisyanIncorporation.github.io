var ObjectFor = {

getRandomNumber: function(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
},

changeBackgroundImage: function(data, val){
	data.style.backgroundImage = val;
},

changeBackgroundColor: function(){
	var data=document.getElementsByTagName("body")[0];
	this.changeBackgroundImage(data, "inherit");
	var mas = ["aqua", "black", "blue", "fuchsia", "gray", "green", "lime", "maroon", "navy", "olive", "orange", "purple", "red", "silver", "teal", "white", "yellow"];
	data.style.backgroundColor = mas[ this.getRandomNumber(0, mas.length ) ] ;
},
	
};








