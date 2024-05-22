export default function DisplayComponent(props: {bmi:number}) {
  

  return (
    <div className="bmi-indicator">
       {calculation(props.bmi)}
    </div>
  );
}

function calculation(bmi: number) {
    if(!bmi){
        return;
    }
  if (bmi < 18.5) {
    return `Your BMI is ${bmi} , you are underweight.`;
  }
  if (bmi >= 18.5 && bmi < 25) {
    return `Your BMI is ${bmi}, you have a normal weight.`;
  }

  if (bmi >= 25 && bmi < 30) {
    return `Your BMI is ${bmi}, you are slightly overweight.`;
  }
  if (bmi >= 30 && bmi < 35) {
    return `Your BMI is ${bmi}, you are obese.`;
  } else {
    return `Your BMI is ${bmi}, you are clinically obese.`;
  }
}
