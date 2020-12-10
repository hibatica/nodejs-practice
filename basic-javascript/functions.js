
// basic function, passing 2 variables
let logText = "this is some text";
let logRepeat = 3;

function log(text, repeat) {
  // the for loop below isn't related to functions
  // its just here for the purpose of the second object passed in the function
  for (let i = 1; i <= repeat; i++) {
    console.log(text);
  }
}

log(logText, logRepeat);

// assigning an object to the value of
// the returned data of a function

function createNumber() {
  // return can be used simply to
  // end the function, but it's main purpose
  // is to return a result where the function
  // is called
  return(Math.random());
}

// number will be equal to whatever the function returns
let number = createNumber();
console.log(`returned ${number}`);

// advanced option passing
// used to pass a large amount of data to a function
// or to choose a specific options

function advancedOptions(options) {
  if(options.someNumber) console.log(options.someNumber);
  if(options.anArray) console.log(options.anArray);
  if(options.randomWord) console.log(options.randomWord);
  
  //if you didn't specify an option:
  if(options.value) {
    console.log("A value was passed");
  } else {
    console.log("No value was passed");
  }
}

advancedOptions({
  someNumber: 4,
  randomWord: "delivery",
  anArray: ["one", "two"]
});