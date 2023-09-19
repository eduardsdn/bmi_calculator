import React from "react";
import CalculatorCSS from "../styles/Calculator.module.css";

function Calculator() {
  const [formData, setFormData] = React.useState({
    weight: undefined,
    height: undefined,
  });
  const [formDataImperial, setFormDataImperial] = React.useState({
    weightImperialSt: undefined,
    weightImperialLb: undefined,
    heightImperialFt: undefined,
    heightImperialIn: undefined,
  });
  const [isMetric, setIsMetric] = React.useState(true);
  const [bmi, setBmi] = React.useState(undefined);

  function handleChangeMetric(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: parseInt(event.target.value),
      };
    });
  }

  function handleChangeImperial(event) {
    setFormDataImperial((prevFormDataImperial) => {
      return {
        ...prevFormDataImperial,
        [event.target.name]: parseInt(event.target.value),
      };
    });
  }

  React.useEffect(() => {
    calculateBMI();
  }, [formData]);

  React.useEffect(() => {
    setFormData(convertToMetric);
    calculateBMI();
  }, [formDataImperial]);

  function convertToMetric() {
    let convertedData = {
      weight: undefined,
      height: undefined,
    };
    convertedData.weight =
      (formDataImperial.weightImperialSt * 14 +
        formDataImperial.weightImperialLb) *
      0.45;
    convertedData.height =
      (formDataImperial.heightImperialFt * 12 +
        formDataImperial.heightImperialIn) *
      2.54;
    return convertedData;
  }

  function onOptionChange(event) {
    setBmi(undefined);
    if (event.target.id === "metric") {
      setIsMetric(true);
    } else if (event.target.id === "imperic") {
      setIsMetric(false);
    }
  }

  function calculateBMI() {
    setBmi(function (prevBmi) {
      return (prevBmi =
        Math.round(
          (formData.weight / Math.pow(formData.height / 100, 2)) * 10
        ) / 10);
    });
  }

  return (
    <div className={CalculatorCSS.calculator}>
      <h1 className={CalculatorCSS.title}>Enter your details below</h1>
      <div className={CalculatorCSS.radioInputs}>
        <div className={CalculatorCSS.radioInputHolder}>
          <input
            type="radio"
            id="metric"
            checked={isMetric === true ? true : false}
            onChange={onOptionChange}
            name="measurment"
            className={CalculatorCSS.radioInput}
          />
          <label htmlFor="metric" className={CalculatorCSS.radioInputLabel}>
            Metric
          </label>
        </div>
        <div className={CalculatorCSS.radioInputHolder}>
          <input
            type="radio"
            id="imperic"
            onChange={onOptionChange}
            name="measurment"
            className={CalculatorCSS.radioInput}
          />
          <label htmlFor="imperic" className={CalculatorCSS.radioInputLabel}>
            Imperial
          </label>
        </div>
      </div>
      {isMetric === true ? (
        <div className={CalculatorCSS.metricNumericInputs}>
          <div className={CalculatorCSS.numericInputHolder}>
            <label htmlFor="height" className={CalculatorCSS.numericInputLabel}>
              Height
            </label>
            <div className={CalculatorCSS.fakeInputHolder}>
              <input
                type="number"
                onChange={handleChangeMetric}
                name="height"
              />
              <span className={CalculatorCSS.fakeInputPlaceholder}>cm</span>
            </div>
          </div>
          <div className={CalculatorCSS.numericInputHolder}>
            <label htmlFor="weight" className={CalculatorCSS.numericInputLabel}>
              Weight
            </label>
            <div className={CalculatorCSS.fakeInputHolder}>
              <input
                type="number"
                onChange={handleChangeMetric}
                name="weight"
              />
              <span className={CalculatorCSS.fakeInputPlaceholder}>kg</span>
            </div>
          </div>
        </div>
      ) : (
        <div className={CalculatorCSS.imperialNumericInputs}>
          <div className={CalculatorCSS.numericInputHolder}>
            <label htmlFor="height" className={CalculatorCSS.numericInputLabel}>
              Height
            </label>
            <div className={CalculatorCSS.imperialHeightInputs}>
              <div className={CalculatorCSS.fakeInputHolder}>
                <input
                  type="number"
                  onChange={handleChangeImperial}
                  name="heightImperialFt"
                />
                <span className={CalculatorCSS.fakeInputPlaceholder}>ft</span>
              </div>
              <div className={CalculatorCSS.fakeInputHolder}>
                <input
                  type="number"
                  onChange={handleChangeImperial}
                  name="heightImperialIn"
                />
                <span className={CalculatorCSS.fakeInputPlaceholder}>in</span>
              </div>
            </div>
          </div>
          <div className={CalculatorCSS.numericInputHolder}>
            <label htmlFor="weight" className={CalculatorCSS.numericInputLabel}>
              Weight
            </label>
            <div className={CalculatorCSS.imperialWeightInputs}>
              <div className={CalculatorCSS.fakeInputHolder}>
                <input
                  type="number"
                  onChange={handleChangeImperial}
                  name="weightImperialSt"
                />
                <span className={CalculatorCSS.fakeInputPlaceholder}>st</span>
              </div>
              <div className={CalculatorCSS.fakeInputHolder}>
                <input
                  type="number"
                  onChange={handleChangeImperial}
                  name="weightImperialLb"
                />
                <span className={CalculatorCSS.fakeInputPlaceholder}>lb</span>
              </div>
            </div>
          </div>
        </div>
      )}
      {bmi === undefined || isNaN(bmi) === true ? (
        <div className={CalculatorCSS.greeting}>
          <p className={CalculatorCSS.greetingWelcome}>Welcome!</p>
          <p className={CalculatorCSS.greetingText}>
            Enter your height and weight and you’ll see your BMI result here
          </p>
        </div>
      ) : (
        <div className={CalculatorCSS.result}>
          <div className={CalculatorCSS.left}>
            <p className={CalculatorCSS.bmiIs}>Your BMI is...</p>
            <div className={CalculatorCSS.bmiResult}>{bmi}</div>
          </div>
          <div className={CalculatorCSS.right}>
            <p className={CalculatorCSS.classification}>
              Your BMI suggests you’re{" "}
              <span className={CalculatorCSS.classificationResult}>
                {bmi < 18.5
                  ? "underweight"
                  : bmi >= 18.5 && bmi < 24.9
                  ? "a healthy weight"
                  : bmi >= 25 && bmi <= 29.9
                  ? "overweight"
                  : "obese"}
              </span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Calculator;
