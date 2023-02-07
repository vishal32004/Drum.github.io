//Detecting Button Press

var numberOfDrums = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfDrums; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonHTML = this.innerHTML;

    makeSound(buttonHTML);

    buttonAnimation(buttonHTML);

  });

}

//Detecting keyboard press


document.addEventListener("keypress", function(event) {
  makeSound(event.key)
  buttonAnimation(event.key);
})


/*function makeSound(key) {
  switch (key) {
    case "w":
      var crash = new Audio("sounds/saji.mp3");
      crash.play();
      break;

    case "a":
      var kickbass = new Audio("sounds/Chopper.mp3");
      kickbass.play();
      break;

    case "s":
      var snare = new Audio("sounds/jimbei.mp3");
      snare.play();
      break;


    case "d":
      var tom1 = new Audio("sounds/luffy.mp3");
      tom1.play();
      break;

    case "j":
      var tom2 = new Audio("sounds/zor.mp3");
      tom2.play();
      break;

    case "k":
      var tom3 = new Audio("sounds/Brok.mp3");
      tom3.play();
      break;

    case "l":
      var tom4 = new Audio("sounds/usop.mp3");
      tom4.play();
      break;


    default:
      console.log(buttonHTML);

  }
}

*/


let audioElements = [];

function makeSound(key) {
  let crash, kickbass, snare, tom1, tom2, tom3, tom4;
  
  switch (key) {
    case "w":
      crash = new Audio("sounds/saji.mp3");
      audioElements.push(crash);
      break;

    case "a":
      kickbass = new Audio("sounds/Chopper.mp3");
      audioElements.push(kickbass);
      break;

    case "s":
      snare = new Audio("sounds/jimbei.mp3");
      audioElements.push(snare);
      break;

    case "d":
      tom1 = new Audio("sounds/luffy.mp3");
      audioElements.push(tom1);
      break;

    case "j":
      tom2 = new Audio("sounds/zor.mp3");
      audioElements.push(tom2);
      break;

    case "k":
      tom3 = new Audio("sounds/Brok.mp3");
      audioElements.push(tom3);
      break;

    case "l":
      tom4 = new Audio("sounds/usop.mp3");
      audioElements.push(tom4);
      break;

    default:
      console.log(key);
  }

  audioElements.forEach(audio => audio.pause());
  audioElements[audioElements.length - 1].play();
}
function buttonAnimation(currentkey) {
  var activeButton = document.querySelector("." + currentkey)
  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}




