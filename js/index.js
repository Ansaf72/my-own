var randomNumber1= Math.floor(Math.random()*6)+1;
var randomImage1= "dice" + randomNumber1 + ".png";

var imageFullPath="images/"+randomImage1;
var player1Image = document.querySelector(".player1");
player1Image.setAttribute("src", imageFullPath);


var randomNumber2= Math.floor(Math.random()*6)+1;
var imageFullPath2="images/dice"+randomNumber2+".png";
document.querySelector(".player2").setAttribute("src",imageFullPath2);

if(randomNumber1>randomNumber2)
{
document.querySelector(".head").textContent="player1 won";
}
else if(randomNumber1<randomNumber2)
{
    document.querySelector(".head").textContent="player2 won";
}
else
{
    document.querySelector(".head").textContent="Match draw";
}