import { useState } from "react";
import GaugeChart from "react-gauge-chart";
import "../css/DisplayComponent.css";

export default function DisplayComponent(props: { bmi: number }) {
  const [percent, setPercent] = useState(0);

  function calculation(bmi: number) {
    if (!bmi) {
      return;
    }
    if (bmi < 18.5) {
      return `BMI: ${bmi}`;
    }
    if (bmi >= 18.5 && bmi < 25) {
      return `BMI: ${bmi}`;
    }

    if (bmi >= 25 && bmi < 30) {
      return `BMI: ${bmi}`;
    }
    if (bmi >= 30 && bmi < 35) {
      return `BMI: ${bmi}`;
    } else {
      return `BMI: ${bmi}`;
    }
  }

  const gageCalc = () => {
    const bmi = props.bmi;
    var result = 0;
    if (bmi >= 16 && bmi <= 18.5) {
      result = getPercentage(bmi, 16, 18.5, 0);
    } else if (bmi > 18.5 && bmi < 25) {
      result = getPercentage(bmi, 18.5, 25, 0.33);
    } else if (bmi >= 25 && bmi <= 30) {
      result = getPercentage(bmi, 25, 30, 0.66);
    }
    return result;
  };

  function getPercentage(bmi:number, lowerBound:number, upperBound:number, segmentAdjustment:number){
    return (
      (bmi - lowerBound) / (upperBound - lowerBound) / 3 + segmentAdjustment
    );
  }

  return (
    <div className="bmi-indicator">
      <h1>BMI Indicator</h1>
      <GaugeChart
        id="gauge-chart2"
        nrOfLevels={3}
        percent={gageCalc()}
        formatTextValue={(value: string) => calculation(props.bmi)?? ''}
        textColor="black"
        colors={["#FFFF00", "#228B22", "#FF0000"]}
      />
    </div>
  );
}
