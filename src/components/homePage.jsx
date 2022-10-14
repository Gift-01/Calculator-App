import React from "react";
import "./homePage.css";
import Button from "./button.jsx";
import Input from "./input.jsx";
import { useState } from "react";

const HomePage = () => {
  const [text, setText] = useState([]);
  const [result, setResult] = useState("");

  const symbols = ["*", ".", "%", "+", "-", "/"];

  const addToText = (val) => {
    if (
      (symbols.includes(val) && !symbols.includes(text[text.length - 1])) ||
      !symbols.includes(val)
    ) {
      setText((text) => [...text, val]);
    }
  };

  const reset = () => {
    setText("");
    setResult("");
  };

  const backSpace = () => {
    setText(text?.slice(0, -1));
  };

  const total = () => {
    if (text !== []) {
      if (!symbols.includes(text[text.length - 1])) {
        const input = text.join("");
        setResult(eval(input));
      } else {
        text.pop();
        const input = text.join("");
        setResult(eval(input));
      }
    }
  };

  return (
    <div className="container">
      <div className="main-container">
        <Input text={text} result={result} />
        <div className="button-container">
          <div className="left-button">
            <Button text="C" className="medium-btn" handleClick={reset} />
            <Button text="D" className="small-button" handleClick={backSpace} />
            <Button text="/" className="small-button" handleClick={addToText} />
            <Button text="7" handleClick={addToText} />
            <Button text="8" handleClick={addToText} />
            <Button text="9" handleClick={addToText} />
            <Button text="4" handleClick={addToText} />
            <Button text="5" handleClick={addToText} />
            <Button text="6" handleClick={addToText} />
            <Button text="1" handleClick={addToText} />
            <Button text="2" handleClick={addToText} />
            <Button text="3" handleClick={addToText} />
            <Button text="%" className="small-button" handleClick={addToText} />
            <Button text="0" handleClick={addToText} />
            <Button text="." className="small-button" handleClick={addToText} />
          </div>
          <div className="right-button">
            <Button text="*" className="small-button" handleClick={addToText} />
            <Button text="-" className="small-button" handleClick={addToText} />
            <Button text="+" className="small-button" handleClick={addToText} />
            <Button text="=" className="big-button" handleClick={total} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
