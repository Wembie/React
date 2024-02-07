import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./styles.css";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleButtonClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleCalculate = () => {
    try {
      setResult(eval(input).toString());
    } catch (error) {
      setResult("Error");
    }
  };

  const handleClear = () => {
    setInput("");
    setResult("");
  };

  return (
    <Container className="calculator-container mt-5">
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <div className="calculator">
            <div className="input">{input}</div>
            <div className="result">{result}</div>
            <div className="buttons">
              {[7, 8, 9, "/", 4, 5, 6, "*", 1, 2, 3, "-", 0, ".", "+", "="].map(
                (value) => (
                  <Button
                    key={value}
                    variant="light"
                    onClick={() => {
                      if (value === "=") {
                        handleCalculate();
                      } else {
                        handleButtonClick(value);
                      }
                    }}
                  >
                    {value}
                  </Button>
                ),
              )}
              <Button variant="outline-danger" onClick={handleClear}>
                C
              </Button>
            </div>
            <div className="created-by">By: Wembie</div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Calculator;
