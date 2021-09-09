import React, { useRef, useState, useEffect } from "react";
import letters from "./Letters";

function InputBox() {
  const ref = useRef();
  const [state, setState] = useState({
    blankArray: [],
    answerArray: [],
  });

  useEffect(() => {
    /**
     * Create an empty array the same size as our answer
     * Create the answer array
     */
    //make an array to populate all the arrays into one
    //compare user's input
    let _blankArray = [];
    let _answerArray = [];

    for (let item of letters) {
      _answerArray.push(...item.letters);
      // Used to detect when we should break a word
      _answerArray.push("|");
    }
    //empty array that we are storing the guesses in
    _blankArray.fill("", 0, _answerArray.length - 1);

    setState({
      blankArray: _blankArray,
      answerArray: _answerArray,
    });
  }, []);

  /**
   * Compare and verify correct or incorrect guesses
   * @param {*} answer_id
   * @returns
   */
  const compareAnswers = (answer_id) => {
    let input = document.getElementById(answer_id); //element
    let input_index = answer_id.split("-")[1];
    console.log(input_index);
    let input_value = input.value;
    let rgx = /[a-zA-Z0-9]/;

    if (!input_value.match(rgx)) {
      console.log("Err: no input");
      return false;
    }

    // Normalize and compare
    if (
      input_value.toLowerCase() === state.answerArray[input_index].toLowerCase()
    ) {
      input.style.border = "2px solid green";
      ref.current.innerText = "cool job";
      return true;
    } else {
      input.style.border = "2px solid red";
      ref.current.innerText = "pay the price";
      return false;
    }
  };

  /**
   * Input Event listener
   */
  const updateAnswer = (e) => {
    let copyArr = state.blankArray;
    // const input = e.currentTarget.value;
    // if (input === "") {
    //   e.currentTarget.style.border = "";
    // }
    if (e.currentTarget.value === "") {
      //set to a default color
      e.currentTarget.style.border = "none";
      ref.current.innerText = "";
    }

    let correct = compareAnswers(e.currentTarget.id); //id of whatever box is being typed in

    if (correct) {
      copyArr[Number(e.currentTarget.id.split("-")[1])] = e.currentTarget.value;
      setState({
        ...state,
        blankArray: copyArr,
      });
    }

    console.log(state);
  };

  //success function //check if blankArray includes all letters in answer

  return (
    <>
      <h2>type each letter as you see it in the art to de-encrypt it</h2>
      <div className="art_container">
        <img
          src="https://cdna.artstation.com/p/assets/images/images/040/070/750/large/nynblyvynyss-asset.jpg?1627774358"
          alt=""
        />
        <div className="letter_graph">
          <h3>each input box is for each line of the art</h3>
          <div className="line_one">
            <h4>Enter the letters for each line</h4>
            <h4 ref={ref} className="message" if="message">
              &nbsp;
            </h4>
            <div className="word_one">
              {state.answerArray.map((lett, i) => {
                if (lett === "|") {
                  return <br key={i} />;
                }
                return (
                  <input
                    key={i}
                    onChange={updateAnswer}
                    className="input"
                    id={"letter-" + String(i)}
                    type="text"
                    name="word_four"
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default React.memo(InputBox);
