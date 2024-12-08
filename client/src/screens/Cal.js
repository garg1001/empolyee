import React, { useState } from "react";
import Swal from "sweetalert2";

function Cal() {
  const [number1, setNumber1] = useState(""); 
  const [number2, setNumber2] = useState(""); 
  const [result, setResult] = useState(0);
  const [operation, setOperation] = useState("");

  const [sumCount, setSumCount] = useState(0);
  const [mulCount, setMulCount] = useState(0);
  const [divCount, setDivCount] = useState(0);
  const [minCount, setMinCount] = useState(0);

  const changeHandler = (e) => {
    const { name, value } = e.target;

    
    if (value === "" || /^[0-9]*$/.test(value)) {
      if (name === "num1") {
        setNumber1(value);
      } else {
        setNumber2(value);
      }
    }
  };

  function validateInputs() {
    if (number1 === "" || number2 === "") {
      Swal.fire("Validation Error", "Both numbers are required!", "warning");
      return false;
    }
    return true;
  }

  function sumClick() {
    if (!validateInputs()) return;
    setResult((Number(number1) || 0) + (Number(number2) || 0));
    
    setSumCount(sumCount + 1);
  }

  function mulClick() {
    if (!validateInputs()) return;
    setResult((Number(number1) || 0) * (Number(number2) || 0));
    setOperation("*");
    setMulCount(mulCount + 1);
  }

  function divClick() {
    if (!validateInputs()) return;
    if (number2 === "0") {
      Swal.fire("Error", "Division by zero is not allowed", "error");
      return;
    }
    setResult((Number(number1) || 0) / Number(number2));
    setOperation("/");
    setDivCount(divCount + 1);
  }

  function minClick() {
    if (!validateInputs()) return;
    setResult((Number(number1) || 0) - (Number(number2) || 0));
    setOperation("-");
    setMinCount(minCount + 1);
  }

  function clearClick() {
    setNumber1(""); 
    setNumber2(""); 
    setResult(0);
    setOperation("");
    setSumCount(0);
    setMulCount(0);
    setDivCount(0);
    setMinCount(0);
    Swal.fire("Cleared", "All values are clear", "info");
  }

  const totalCount = sumCount + mulCount + divCount + minCount;

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
          marginBottom: "20px",
        }}
      >
        <b className="text-info">Enter First Number:</b>
        <input
          type="text"
          name="num1"
          onChange={changeHandler}
          value={number1}
          style={{
            width: "100px",
            height: "40px",
            textAlign: "center",
            fontSize: "16px",
          }}
        />
        <div
          style={{
            width: "40px",
            height: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "24px",
            fontWeight: "bold",
            border: "1px solid #ccc",
            borderRadius: "5px",
            backgroundColor: "#f9f9f9",
          }}
        >
          {operation}
        </div>
        <b className="text-primary">Enter Second Number:</b>
        <input
          type="text"
          name="num2"
          onChange={changeHandler}
          value={number2}
          style={{
            width: "100px",
            height: "40px",
            textAlign: "center",
            fontSize: "16px",
          }}
        />
      </div>

      <div style={{ marginBottom: "20px" }}>
        <button className="btn btn-info" onClick={sumClick}>
          Sum
        </button>
        <button className="btn btn-success p-2 m-2" onClick={mulClick}>
          Mul
        </button>
        <button className="btn btn-danger m-2" onClick={divClick}>
          Div
        </button>
        <button className="btn btn-success" onClick={minClick}>
          Min
        </button>
        <br />
        <button className="btn btn-primary m-2" onClick={clearClick}>
          Clear All
        </button>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <b>Result:</b> {result}
      </div>

      <div>
        <b className="text-success">Sum Count= </b>
        <input type="number" className="m-2" value={sumCount} readOnly />

        <b className="text-info">Mul Count=</b>
        <input type="number" className="m-2" value={mulCount} readOnly />

        <b className="text-primary">Div Count=</b>
        <input type="number" className="m-2" value={divCount} readOnly />

        <b className="text-danger">Min Count=</b>
        <input type="number" className="m-2" value={minCount} readOnly />

        <br />
        <br />
        <b className="text-primary">Total Count=</b>
        <input type="number" value={totalCount} readOnly />
        <br />
        <br />
      </div>
    </div>
  );
}

export default Cal;
