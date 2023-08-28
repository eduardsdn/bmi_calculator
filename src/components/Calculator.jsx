import CalculatorCSS from "../styles/Calculator.module.css"

function Calculator() {
    return(
        <div className={CalculatorCSS.calculator}>
            <h1 className={CalculatorCSS.title}>Enter your details below</h1>
            <div className={CalculatorCSS.radioInputs}>
                <div className={CalculatorCSS.radioInputHolder}>
                    <input type="radio" name="measurment" className={CalculatorCSS.radioInput}/>
                    <label htmlFor="metric" className={CalculatorCSS.radioInputLabel}>Metric</label>
                </div>
                <div className={CalculatorCSS.radioInputHolder}>
                    <input type="radio" name="measurment"className={CalculatorCSS.radioInput}/>
                    <label htmlFor="metric" className={CalculatorCSS.radioInputLabel}>Imperic</label>
                </div>
            </div>
            <div className={CalculatorCSS.numericInputs}>
                <div className={CalculatorCSS.numericInputHolder}>
                    <label htmlFor="height" className={CalculatorCSS.numericInputLabel}>Height</label>
                    <input type="number" name="height"/>
                </div>
                <div className={CalculatorCSS.numericInputHolder}>
                    <label htmlFor="weight" className={CalculatorCSS.numericInputLabel}>Weight</label>
                    <input type="number" name="weight"/>
                </div>
            </div>
            <div className={CalculatorCSS.result}>
                <p className={CalculatorCSS.greetingWelcome}>Welcome!</p>
                <p className={CalculatorCSS.greetingText}>Enter your height and weight and you’ll see your BMI result here</p>
            </div>
        </div>
    )
}

export default Calculator