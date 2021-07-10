var imgLink=[
"dice1.png",
"dice2.png",
"dice3.png",
"dice4.png",
"dice5.png",
"dice6.png",
];
document.querySelector




var lengthOfImg=imgLink.length;
var randomNumber= Math.random();
var value=Math.floor(randomNumber*lengthOfImg);
// document.querySelector(".p1").innerHTML=value;
document.querySelector(".player1").src=imgLink[value];
var randomNumber2=Math.random();
var value2=Math.floor(randomNumber2*lengthOfImg);
// document.querySelector(".p2").innerHTML=value2;
document.querySelector(".player2").src=imgLink[value2];
if (value>value2) {
    document.querySelector(".output").innerHTML="player1 Win";
}
else if (value==value2) {
	document.querySelector(".output").innerHTML="Match Draw";
}
else{
   document.querySelector(".output").innerHTML="player2 Win";
}