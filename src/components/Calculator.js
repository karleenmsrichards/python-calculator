import React, { useEffect, useState } from "react";
import "../App.css";

const Calculator = ({ onCalculate }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [display, setDisplay] = useState("");
  const [expression, setExpression] = useState("");
  const [operator, setOperator] = useState("");
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");

  const clear = () => {
    setDisplay("");
    setOperator("");
  };

  const handleClick = (e) => {
    if (!isClicked) {
      setExpression((prevExpression) => prevExpression.concat(e.target.name));
    }
  };

  useEffect(() => {
    setDisplay(expression);
  }, [expression]);

  const handleOperatorClick = (e) => {
    setNum1(display);
    setExpression("");
    setOperator(e.target.name);
  };

  const calculate = () => {
    const newNum2 = parseFloat(display);
    setNum2(newNum2);
    onCalculate(parseFloat(num1), newNum2, operator);
  };
  
  return (
    <div className="calculator">
      <div className="brand-info">
        <h1>Lee</h1>
        <h2>fx-345</h2>
      </div>
      <div className="display">{display}</div>
      <div className="keypad">
        <button className="clear-btn light-grey-btn" onClick={clear}>
          AC
        </button>
        <button className="light-grey-btn" name="%" onClick={handleOperatorClick}>
          %
        </button>
        <button className="main-operator-btn" name="/" onClick={handleOperatorClick}>
          ÷
        </button>
        <button name="7" onClick={handleClick}>
          7
        </button>
        <button name="8" onClick={handleClick}>
          8
        </button>
        <button name="9" onClick={handleClick}>
          9
        </button>
        <button className="main-operator-btn" name="*" onClick={handleOperatorClick}>
          ×
        </button>
        <button name="4" onClick={handleClick}>
          4
        </button>
        <button name="5" onClick={handleClick}>
          5
        </button>
        <button name="6" onClick={handleClick}>
          6
        </button>
        <button className="main-operator-btn" name="-" onClick={handleOperatorClick}>
          -
        </button>
        <button name="1" onClick={handleClick}>
          1
        </button>
        <button name="2" onClick={handleClick}>
          2
        </button>
        <button name="3" onClick={handleClick}>
          3
        </button>
        <button className="main-operator-btn" name="+" onClick={handleOperatorClick}>
          +
        </button>
        <button className="zero-btn" name="0" onClick={handleClick}>
          0
        </button>
        <button name="." onClick={handleClick}>
          .
        </button>
        <button className="equal-btn" onClick={calculate}>
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
