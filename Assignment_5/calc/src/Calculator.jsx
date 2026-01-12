import { useState } from "react";

export default function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh"
  };

  const boxStyle = {
    border: "2px solid #ccc",
    padding: "20px",
    borderRadius: "6px",
    textAlign: "center",
    minWidth: "320px"
  };

  const inputStyle = {
    width: "120px",
    padding: "6px",
    margin: "5px"
  };

  const buttonStyle = {
    border: "1px solid #999",
    backgroundColor: "#e0e0e0",
    padding: "6px 12px",
    margin: "5px",
    cursor: "pointer"
  };

  return (
    <div style={containerStyle}>
      <div style={boxStyle}>
        <h2>Calculator</h2>

        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          style={inputStyle}
        />

        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          style={inputStyle}
        />

        <div style={{ marginTop: "10px" }}>
          <button style={buttonStyle} onClick={() => setResult(Number(num1) + Number(num2))}>
            Add
          </button>

          <button style={buttonStyle} onClick={() => setResult(Number(num1) - Number(num2))}>
            Subtract
          </button>

          <button style={buttonStyle} onClick={() => setResult(Number(num1) * Number(num2))}>
            Multiply
          </button>

          <button
            style={buttonStyle}
            onClick={() =>
              setResult(num2 === "0" ? "Cannot divide by zero" : Number(num1) / Number(num2))
            }
          >
            Divide
          </button>
        </div>

        <p>
          Result: <strong>{result}</strong>
        </p>
      </div>
    </div>
  );
}
