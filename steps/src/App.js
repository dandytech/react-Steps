import { useState } from "react";
import "./index.css";

const messages = [
  "Learn React 💪",
  "Apply for Jobs 🤝",
  "Invest your Income 🏠",
];

export default function App() {
  const [step, setStep] = useState(1);

  function handlePrevious() {
    if (step > 1) setStep(step - 1);
    //alert("Previous");
  }

  function handleNext() {
    if (step < 3) setStep(step + 1);
    // alert("Next");
  }

  return (
    <div className="steps">
      <div className="numbers">
        <div className={step >= 1 ? "active" : ""}> 1 </div>
        <div className={step >= 2 ? "active" : ""}> 2 </div>
        <div className={step >= 3 ? "active" : ""}> 3 </div>
      </div>

      <StepMessage step={step}>{messages[step - 1]}</StepMessage>

      <div className="buttons">
        <Button
          // style={{ backgroundColor: "#7950f2", color: "fff" }}
          // onClick={handlePrevious}
          bgColor="#7950f2"
          textColor="fff"
          onClick={handlePrevious}
        >
          <span>👈</span>Previous
        </Button>
        <Button
          // style={{ backgroundColor: "#7950f2", color: "fff" }}
          // onClick={handleNext}
          bgColor="#7950f2"
          textColor="fff"
          onClick={handleNext}
        >
          Next<span>👉</span>
        </Button>
      </div>

      <StepMessage step={1}>
        <p>Child component practice: Pass in contents</p>
        <p>🫰</p>
      </StepMessage>
      <StepMessage step={2}>
        <p>Reusing Child component</p>
        <p>👌</p>
      </StepMessage>

      {/* We can pass child component in another child component */}
      <StepMessage step={3}>
        <p>Passing child component to child component</p>
        <div className="buttons">
          <Button
            textColor="#fff"
            bgColor="red"
            onClick={() =>
              alert(`We are children components:  ${messages[step - 1]}`)
            }
          >
            Click Me
          </Button>
        </div>
        <p>👌</p>
      </StepMessage>
    </div>
  );
}

//using children prop
function Button({ bgColor, textColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h3>Step: {step}</h3>
      {children}
    </div>
  );
}
