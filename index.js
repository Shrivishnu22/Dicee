var randomNumber1 = Math.floor(6 * (Math.random()) + 1);
var randomImage1 = "dice" + randomNumber1 + ".png";
var imageSrc1 = "images/" + randomImage1;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", imageSrc1);

var randomNumber2 = Math.floor(6 * (Math.random()) + 1);
var randomImage2 = "dice" + randomNumber2 + ".png";
var imageSrc2 = "images/" + randomImage2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", imageSrc2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player1 wins!";
}
if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player2 Wins!";
}
if (randomNumber1 == randomNumber2) {
    document.querySelector("h1").innerHTML = "Draw";
}