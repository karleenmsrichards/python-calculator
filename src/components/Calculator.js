import React, { useEffect, useState } from "react";

export const Calculator = () => {

  const [isClicked, setIsClicked] = useState(false);
  const [display, setDisplay] = useState("");
  const [expression, setExpression] = useState("")
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState("");
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");

  const clear = () => {
    setDisplay("");
    setResult("");
    setOperator("");
  }

  const handleClick = (e) => {
    if (operator === "" && !isClicked) {
      setExpression(prevExpression => prevExpression.concat(e.target.name));
    } 
    if (operator !== "" && !isClicked) {
      setExpression(prevExpression => prevExpression.concat(e.target.name));
    } 
  }
  
  useEffect(() => {
    setDisplay(expression);
  }, [expression]); 

  const handleOperatorClick = (e) => {
    setNum1(expression);
    setExpression("");
    setOperator(e.target.name);
  }

  useEffect(() => {
}, [num1, display, operator]);

  const calculate = (e) => {
    setNum2(display);
    setDisplay("");
  }

    return (
        <div className="calculator">
        <input type="text" value={display} readOnly />
        <div className="keypad">
          <button className="clear-btn" onClick={clear}>Clear</button>
          <button name="/" onClick={handleOperatorClick}>/</button>
          <button name="7" onClick={handleClick}>7</button>
          <button name="8" onClick={handleClick}>8</button>
          <button name="9" >9</button>
          <button name="*" >*</button>
          <button name="4" >4</button>
          <button name="5" >5</button>
          <button name="6" >6</button>
          <button name="-" >-</button>
          <button name="1" >1</button>
          <button name="2" >2</button>
          <button name="3" >3</button>
          <button name="+" >+</button>
          <button name="0" >0</button>
          <button name="." >.</button>
          <button className="equal-btn">=</button>
        </div>
      </div>
     )
}

