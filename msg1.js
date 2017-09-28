//alert( parseFloat("12Hello :)"));
      
var p = document.getElementById("banner");
            setInterval(function() {
                if (p.style.fontSize != "2em") {
                    p.style.fontSize = "2em";
                } else {
                    p.style.fontSize = "3em";
                }
            }, 2000);