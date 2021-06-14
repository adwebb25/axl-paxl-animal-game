// alert("hello world!");

var numberOfAnimalButtons = document.querySelectorAll(".animal").length;

for (var i = 0; i < numberOfAnimalButtons; i++) {

  document.querySelectorAll(".animal")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}

document.addEventListener("keypress", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});


function makeSound(key) {

  switch (key) {
    case "l":
      var lion = new Audio("sounds/lion.mp3");
      lion.play();
      break;

    case "e":
      var elephant = new Audio("sounds/Elefant.mp3");
      elephant.play();
      break;

    case "g":
      var gorilla = new Audio('sounds/Gorilla.mp3');
      gorilla.play();
      break;

    case "h":
      var horse = new Audio('sounds/Pony.mp3');
      horse.play();
      break;

    case "p":
      var pig = new Audio('sounds/pig-sound.mp3');
      pig.play();
      break;

    case "c":
      var cat = new Audio('sounds/cat-sound.mp3');
      cat.play();
      break;
      

    case "d":
      var dog = new Audio('sounds/dog-sound.mp3');
      dog.play();
      break;

    case "s":
      var sheep = new Audio('sounds/sheep.mp3');
      sheep.play();
      break;

    case "t":
      var tiger = new Audio('sounds/Tiger.mp3');
      tiger.play();
      break;

    case "a":
      var alligator = new Audio('sounds/alligator.mp3');
      alligator.play();
      break;

    case "w":
      var wolf = new Audio('sounds/wolf.mp3');
      wolf.play();
      break;  

    case "f":
      var frog = new Audio('sounds/frogs.mp3');
      frog.play();
      break; 

    case "o":
        var owl = new Audio('sounds/owl.mp3');
        owl.play();
        break;  


    default: console.log(key);

  }
}


function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}
