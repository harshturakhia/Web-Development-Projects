// document.querySelector("button").addEventListener("click", clicked);

// function clicked() {
//     alert("I got clicked!");
// }


//We can't use like this
/*
    document.querySelector("button").addEventListener("click", clicked());
*/


//We can use like this
/*
    document.querySelector("button").addEventListener("click",
        function () 
        { alert("I got clicked"); }
    );
*/


var lengthOfButton = document.querySelectorAll(".drum").length;

// for (var i = 0; i < lengthOfButton; i++) {
//     document.querySelectorAll(".drum")[i].addEventListener("click", function clicked() {
//         alert("I got clicked!");
//     });
// }


//Higher Order Function
//They take other functions as inputs

/*
for (var i = 0; i < lengthOfButton; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var audio = new Audio("sounds/tom-1.mp3");
        audio.play();
    }
    )
}
*/


//Checking of this keyword :-

/*
for (var i = 0; i < lengthOfButton; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        console.log(this);
        console.log(this.innerHTML);
        this.style.color = "white";
    })

}
*/

/*
    //Object example: -

var bellboy1 =
{
    name: "Harsh",
    age: 19,
    hasPermit: True,
    languages: ["English", "Hindi"]
}

alert("hello, my name is " = bellboy1.name);


-> We can create objects like this also if we have more number of objects
-> This is CONSTRUCTOR FUNCTION

function HouseKeeper(name, age, yearsOfExperience, languages) {
    this.name = name;
    this.age = age;
    this.yearsOfExperience = yearsOfExperience;
    this.languages = languages;
}

const houseKeeper1 = new HouseKeeper("Sheela", 39, 5, ["English", "Hindi"]);
const houseKeeper1 = new HouseKeeper("Manila", 29, 3, ["English", "Hindi"]);


-> We can also add function to objects like this...

var bellboy1 =
{
    name: "Harsh",
    age: 19,
    hasPermit: True,
    languages: ["English", "Hindi"],
    moveSuitcase: function () {
        alert("Suitcase moving...");
    }
}

-> 2nd way via this keywrod

function BellBoy(name, age, hasPermit, languages)
{
    this.name: "Harsh",
    this.age: 19,
    this.hasPermit: True,
    this.languages: ["English", "Hindi"],
    this.moveSuitcase: function () {
        alert("Suitcase moving...");
    }
}

*/

//Properties don't have paranthesis
//Methods do have parenthesis

//Detecting button press
for (var k = 0; k < lengthOfButton; k++) {
    document.querySelectorAll(".drum")[k].addEventListener("click", function () {

        var buttonChar = this.innerHTML;
        makeSound(buttonChar);
        buttonAnimation(buttonChar);

    })
}

//Detecting key press
document.addEventListener("keypress", function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});


//function to be pursued
function makeSound(key) {
    switch (key) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;

        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;

        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;

        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;

        case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;

        case "k":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;

        case "l":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;

    }
}


//Callback function:-
//  -> This callback function is not called by us, but its called 
//     by Object which expereiced the click...

// $0.addEventListener("click", function (event) {
//     console.log(event);
// });

function buttonAnimation(currentkey) {
    var activeButton = document.querySelector("." + currentkey);
    activeButton.classList.add("pressed");

    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);
}