
var hello = document.createElement("h1");
hello.innerHTML = "Hello World";
document.body.appendChild(hello);


var names = ["steve", "larry", "joe", "shirley", "steph", "nate", "rick", "emily"];
var namesList = names.length;
for (i = 0; i < 8; i++) {
   var namesList = document.createElement("h1")
   namesList.innerHTML = names[i]
   document.body.appendChild(namesList);
}


/*var h1Element = getElementsByTagName("h1");
for (var z = 0; z < h1Elements.length; i++) {
   h1Elements[z].style.color = "#fff";
}

var x = document.getElementById("body");
for ( var z = 0; z <= x.length; z++) {
   z.getElementsByTagName("H1")[1].style.backgroundColor = "red";
}*/
hello.style.textAlign = "center";  
document.body.style.backgroundColor = "burlywood"


