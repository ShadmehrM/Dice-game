var rndNumber1 = Math.floor(Math.random() * 6) + 1;
var rndImg = "dice" + rndNumber1 + ".png";

var tossOne = document.getElementsByClassName("img")[0];

tossOne.setAttribute("src", rndImg);

//************************************************************************************************ */

var rndNumber2 = Math.floor(Math.random() * 6) + 1;
var rndImg2 = "dice" + rndNumber2 + ".png";

var tossTwo = document.getElementsByClassName("img")[1];
tossTwo.setAttribute("src", rndImg2);

//************************************************************************************************ */

if (rndNumber1 > rndNumber2) {

    document.querySelector("h1").innerHTML = "🎉Player one WINS!";
} else if (rndNumber2 > rndNumber1) {

    document.querySelector("h1").innerHTML = "🎉Player two WINS!";
} else {

    document.querySelector("h1").innerHTML = "🤝🏼Draw!";
}
