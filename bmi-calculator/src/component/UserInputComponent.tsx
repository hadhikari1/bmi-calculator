import { useState } from "react";
import ButtonComponent from "./ButtonComponent";
import DisplayComponent from "./DisplayComponent";
import LabelInputComponent from "./LabelInputComponent";
import "../css/UserInputComponent.css";

export default function UserInputComponent() {
  const [userInput, setUserInput] = useState({ feet: 0, inches: 0, weight: 0 });
  const [showResult, setShowResult] = useState(false);

  const displayResult = () => {
    setShowResult(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShowResult(false);
    const key = e.target.name;
    const value = Number(e.target.value);
    setUserInput({
      ...userInput,
      [key]: value,
    });
  };

  const imperialSystemCalculation = () => {
    const weightInPounds = userInput.weight;
    const heightInInches = userInput.feet * 12 + userInput.inches;
    const bmi = (weightInPounds / heightInInches ** 2) * 703;
    return Number(bmi.toFixed(1));
  };

  return (
    <>
      <div className="users-inputs">
        <LabelInputComponent
          name="feet"
          type="number"
          placeholder="Height in Feet"
          value={userInput?.feet > 0 ? userInput.feet : ""}
          className="height-feet"
          onChange={handleChange}
          label="Height (ft)"
        />

        <LabelInputComponent
          name="inches"
          type="number"
          placeholder="Height in Inches"
          value={userInput?.inches > 0 ? userInput.inches : ""}
          className="height-inches"
          onChange={handleChange}
          label="Height (in)"
        />

        <LabelInputComponent
          name="weight"
          placeholder="Weight in Pounds"
          value={userInput?.weight > 0 ? userInput.weight : ""}
          type="number"
          className="weight-pounds"
          onChange={handleChange}
          label="Weight (lb)"
        />

        <ButtonComponent onClick={displayResult} />
      </div>
      {showResult && <DisplayComponent bmi={imperialSystemCalculation()} />}
    </>
  );
}
