import { useState } from "react";
import GaugeChart from "react-gauge-chart";

export default function DisplayComponent(props: { bmi: number }) {
  const [percent, setPercent] = useState(0);

  function calculation(bmi: number) {
    if (!bmi) {
      return;
    }
    if (bmi < 18.5) {
      setPercent(.20);
      return `Your BMI is ${bmi} , you are underweight.`;
    }
    if (bmi >= 18.5 && bmi < 25) {
      setPercent(.40);
      return `Your BMI is ${bmi}, you have a normal weight.`;
    }

    if (bmi >= 25 && bmi < 30) {
      setPercent(.60);
      return `Your BMI is ${bmi}, you are slightly overweight.`;
    }
    if (bmi >= 30 && bmi < 35) {
      setPercent(.80);
      return `Your BMI is ${bmi}, you are obese.`;
    } else {
      setPercent(1);
      return `Your BMI  ${bmi}, you are clinically obese.`;
    }
  }

  return (
    <div className="bmi-indicator">
      <GaugeChart
        id="gauge-chart2"
        nrOfLevels={3}
        percent={percent}
        formatTextValue={(value: string) => calculation(props.bmi)?? ''}
        textColor="black"
      />
    </div>
  );
}
