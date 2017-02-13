// Name Property
// Age Property
// Hunger Value Property
// Happiness Property
// Sleeping Property (boolean)
// Eat Method
// Morph Method
// Go To Sleep Method

var tomagotchi = {
  name: "Snookems",
  age: 0,
  hunger: 10, // 1 to 10 scale 10 being hungriest
  happiness: 0, //0 to 10 scale 0 being the least happy
  isSleeping: false,
  currentForm: "Baby",
  life: true,
  eat: function(){
    this.hunger -= 3;
    hungerMeter.innerHTML = "Hunger Meter: " + tomagotchi.hunger;
  },
  checkMorph: function(){
    if(this.age === 0){
      this.currentForm = "Baby";
    }else if(this.age <= 5){
      this.currentForm = "Kiddo";
    }else if(this.age === 15){
      this.currentForm = "Teen";
    }else if(this.age === 30)
      this.currentForm = "GrownAssMan";
  },
  gainAge: function(){
    this.age += 1;
    this.checkDeathByAging();
    this.checkMorph();
  },
  checkDeathByAging: function(){
    if(this.age > 50){
      this.die();
    }
  },
  die: function(){
    this.life = false;
    console.log("RIP " + this.name + " is Dead");
  },
  sleep: function(){
    this.isSleeping = true;
  }
}
 var counter = 0;
// create a variable to grab the element
var feed = document.getElementById("feed-button");
var hungerMeter = document.getElementsByTagName("h2")[0];
// Add event listener/manipulate the element
feed.addEventListener('click', function(e){
  tomagotchi.eat();
})

var sleep = document.getElementById("lightsOut");
// var body = document.getElementById("parent").style.background = ('black');

sleep.addEventListener('click', function(e){
   counter++
  tomagotchi.sleep();
  // body = document.getElementById("parent").style.background = ('black');
  var body = document.getElementsByTagName('body')[0];
  if(counter % 2 === 0){
    body.style.backgroundColor = "white";
  }
  else {
    body.style.backgroundColor = "black";
  }
  // window.alert('Snookems is asleep, turn lights back on')
})

var i = 1;

setInterval(function(){
  var firstDiv = document.getElementById(i);
    firstDiv.classList.add('hidden');
  if(i % 4 === 0){
    i = 1;
  }else{
    i += 1;
  }
  var secondDiv = document.getElementById(i);
      secondDiv.classList.remove('hidden');
}, 1000)


// Add a Label for Happiness

// Change Images when tomagotchi Morphs

// Update age using the setTimeOut function

// Add a button to "Turn out the lights", which changes background color to 
// black, and sets the isSleeping Property to true. Click the button again 
// should flip the lights back on.

// Sent an alert when the tomagotchi dies, and stop moving the tomagotchi

// Increase hunger using 









