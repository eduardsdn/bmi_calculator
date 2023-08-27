import Hero from "./components/Hero";
import AppCSS from "./styles/App.module.css"
import Calculator from "./components/Calculator";
import ResultDescription from "./components/ResultDescription";
import AdviceCards from "./components/AdviceCards";
import LimitationsCard from "./components/LimitationsCard";

import limitationsGenderImg from "./assets/images/icon-gender.svg"
import limitationsAgeImg from "./assets/images/icon-age.svg"
import limitationsMuscleImg from "./assets/images/icon-muscle.svg"
import limitationsPregnancyImg from "./assets/images/icon-pregnancy.svg"
import limitationsRaceImg from "./assets/images/icon-race.svg"

import decorationLineLeft from "./assets/images/pattern-curved-line-left.svg"
import decorationLineRight from "./assets/images/pattern-curved-line-right.svg"

function App() {
  return (
    <div className={AppCSS.app} >
      <div className={AppCSS.hero}>
        <Hero></Hero>
        <Calculator></Calculator>
      </div>
      <div className={AppCSS.resultDesctiptionHolder}>
        <ResultDescription></ResultDescription>
        {/* <img src={decorationLineLeft} alt="" className={AppCSS.decorLineLeft} /> */}
      </div>
      <div className={AppCSS.adviceCardsHolder}>
        <AdviceCards></AdviceCards>
      </div>
      <div className={AppCSS.limitationsHolder}>
        <div className={AppCSS.limitations}>
          <div className={AppCSS.rowOne}>
            <div className={AppCSS.limitationsTextContent}>
              <h1 className={AppCSS.limitationsTitle}>Limitations of BMI</h1>
              <p className={AppCSS.limitationsText}>Although BMI is often a practical indicator of healthy weight, it is not suited for every person. Specific groups should carefully consider their BMI outcomes, and in certain cases, the measurement may not be beneficial to use.</p>
            </div>
            <LimitationsCard limitationsCardIcon={limitationsGenderImg} limitationsCardTitle={"Gender"} limitationsCardText={"The development and body fat composition of girls and boys vary with age. Consequently, a child's age and gender are considered when evaluating their BMI."}/>
          </div>
          <div className={AppCSS.rowTwo}>
            <LimitationsCard limitationsCardIcon={limitationsAgeImg} limitationsCardTitle={"Age"} limitationsCardText={"In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content."}/>
            <LimitationsCard limitationsCardIcon={limitationsMuscleImg} limitationsCardTitle={"Muscle"} limitationsCardText={"BMI may misclassify muscular individuals as overweight or obese, as it doesn't differentiate muscle from fat."}/>
          </div>
          <div className={AppCSS.rowThree}>
            <LimitationsCard limitationsCardIcon={limitationsPregnancyImg} limitationsCardTitle={"Pregnancy"} limitationsCardText={"Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy BMI is advisable to minimise health risks for both mother and child."}/>
            <LimitationsCard limitationsCardIcon={limitationsRaceImg} limitationsCardTitle={"Race"} limitationsCardText={"Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss this with your GP or practice nurse."}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
