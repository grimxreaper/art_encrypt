//if they have the correct letter, it displays small animation, randomize the confetti
//after each letter is successful, change the color of the box
//done with the whole word, then move to the next line

//change the box color to black and change letter to red once each letter is completed
//all caps
//display confetti when all done

console.log("hi");

const numberOfLettersWord1 = 7;
const numberOfLettersWord2 = 5;
const numberOfLettersWord3 = 11;

const line_one = document.getElementsByClassName("line_one")[0];
const line_two = document.getElementsByClassName("line_two")[0];
const line_three = document.getElementsByClassName("line_three")[0];

const word_one = document.getElementsByClassName("word_one")[0];
const word_two = document.getElementsByClassName("word_two")[0];
const word_three = document.getElementsByClassName("word_three")[0];
const word_four = document.getElementsByClassName("word_four")[0];

//query what is inside each input box
const valueOfBoxOne = document.getElementsByClassName("input_one")[0];
const button = document.getElementsByClassName("btn")[0];

const checkLetter = function check() {
  console.log("hello");
  if (valueOfBoxOne.value.includes("n")) {
    //do we need an event listener on this btn?
    console.log("he");
  }
  if (valueOfBoxOne === "n") {
    console.log("n");
    alert("good job");
  }
};

if (valueOfBoxOne) {
  checkLetter();
}


//when button is clicked
//check to see the value in each box
//make sure the value is the letter it should be


valueOfBoxOne.onClick = checkLetter;
button.onClick = checkLetter;
