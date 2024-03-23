import React, { useState } from "react";
import Calculator from "./components/Calculator";
import "./App.css";

function App() {
  const [result, setResult] = useState("");

  const calculate = async (num1, num2, operator) => {

    const data = {
      num1,
      num2,
      operator,
    };

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to send data to the server");
      }

      const responseData = await response.json();
      setResult(responseData.result); 
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return (
    <div>
      <Calculator onCalculate={calculate} />
      {result && <div>Result: {result}</div>}
    </div>
  );
}

export default App;
