
var name = prompt("Type your name")
alert("Welcome to our website"+ name)

var GG = prompt("pleas enter 1.Space 2.Animals")

if(GG === "Space"){
document.write(
  "<p>Understanding space and how it works will make us achive great things </p>"+
  
  "<div> <h3>"+ GG +"</h3>"+ " <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW5K_7GSTw4f5zsC-smAsGlpn040b_fXPndQ&usqp=CAU' />  </div>")

}
else if(GG === "Animals"){
  document.write(
  "<p>Understanding the animals would help us interacting with nature better</p>"+
    "<div> "+
      "<img src='https://i.pinimg.com/originals/3d/25/db/3d25dbb646dad29a418d2a2863acd328.jpg' alt='Animals'>"+
        "<h4>Animals</h4>"+
    "</div>"
  )
}
else{
document.write("pleas input the correct input")
}
