
var hello = document.createElement("h1");
hello.innerHTML = "Hello World";
document.body.appendChild(hello);


var names = ["steve", "larry", "joe", "shirley", "steph", "nate", "rick", "emily"];
var namesList = names.length;
for (i = 0; i < 8; i++) {
   var namesList = document.createElement("h1")
   namesList.innerHTML = names[i]
   document.body.appendChild(namesList);
   namesList.style.textAlign = "center"
   namesList.style.color = "red"
}


hello.style.textAlign = "center";  
document.body.style.backgroundColor = "burlywood"


