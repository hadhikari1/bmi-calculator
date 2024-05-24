import { useState } from "react";
import ButtonComponent from "./ButtonComponent";
import DisplayComponent from "./DisplayComponent";
import LabelInputComponent from "./LabelInputComponent";
import "../css/UserInputComponent.css";

interface UserInput{
  feet: string | number; 
  inches: string | number;  
  weight: string | number; 
}

export default function UserInputComponent() {
  const [userInput, setUserInput] = useState<UserInput>({ feet: '', inches: '', weight: '' });
  const [showResult, setShowResult] = useState(false);
  const [errors, setErrors] = useState({ feet: false, inches: false, weight: false });

  const displayResult = () => {
    if(errors)
    setShowResult(true);
  };
 

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
   
    setShowResult(false);
    const key = e.target.name;
    const value = e.target.value;
   
    if(!value){
      setErrors({...errors, [key]: {message: `*${key} is required`}})
    }else if(isNaN(+value)){
      setErrors({...errors, [key]: {message: `*${key} must be a number`}})
    }
    else{
      setErrors({...errors, [key]: {message: null}})
    }
    setUserInput({
      ...userInput,
      [key]: value,
    });
  };


  const imperialSystemCalculation = () => {
    const weightInPounds = Number(userInput.weight);
    const feetToInches = Number(userInput.feet) * 12
    const incehsAsNumber = Number(userInput.inches)
    const heightInInches = feetToInches + incehsAsNumber;
    const bmi = (weightInPounds / heightInInches ** 2) * 703;
    return Number(bmi.toFixed(1));
  };

  

  return (
    <>
      
      <div className="users-inputs">

        <LabelInputComponent
          errors={errors}
          name="feet"
          // type="number"
          placeholder="Height in Feet"
          value={userInput?.feet}
          className="height-feet"
          onChange={handleChange}
          label="Height (ft)"
          
        />
      
        <LabelInputComponent
          errors={errors}
          name="inches"
          // type="number"
          placeholder="Height in Inches"
          value={userInput?.inches}
          className="height-inches"
          onChange={handleChange}
          label="Height (in)"
        />

        <LabelInputComponent
          errors={errors}
          name="weight"
          placeholder="Weight in Pounds"
          value={userInput?.weight}
          // type="number"
          className="weight-pounds"
          onChange={handleChange}
          label="Weight (lb)"
        />

        <ButtonComponent onClick={displayResult} errors={errors} title="Calculate" />
      </div>
      {showResult && <DisplayComponent bmi={imperialSystemCalculation()} />}
    </>
  );
}
