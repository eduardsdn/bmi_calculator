import React from "react";

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

  const limitationCards = [
    {
      img: limitationsGenderImg,
      title: "Gender",
      text: "The development and body fat composition of girls and boys vary with age. Consequently, a child's age and gender are considered when evaluating their BMI."
    },
    {
      img: limitationsAgeImg,
      title: "Age",
      text: "In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content."
    },
    {
      img: limitationsMuscleImg,
      title: "Muscle",
      text: "BMI may misclassify muscular individuals as overweight or obese, as it doesn't differentiate muscle from fat."
    },
    {
      img: limitationsPregnancyImg,
      title: "Pregnancy",
      text: "Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy BMI is advisable to minimise health risks for both mother and child."
    },
    {
      id: 5,
      img: limitationsRaceImg,
      title: "Race",
      text: "Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss this with your GP or practice nurse."
    },
  ]

  const [screenSize, setScreenSize] = React.useState(getCurrentDimension());

  	function getCurrentDimension(){
    	return {
      		width: window.innerWidth,
      		height: window.innerHeight
    	}
  	}
  
  	React.useEffect(() => {
    		const updateDimension = () => {
      			setScreenSize(getCurrentDimension())
            console.log(screenSize.width)
    		}
    		window.addEventListener('resize', updateDimension);
    
    		return(() => {
        		window.removeEventListener('resize', updateDimension);
    		})
  	}, [screenSize])

  return (
    <div className={AppCSS.app} >
      <div className={AppCSS.hero}>
        <Hero></Hero>
        {/* <Calculator></Calculator> */}
      </div>
      <div className={AppCSS.resultDesctiptionHolder}>
        <ResultDescription></ResultDescription>
        {/* <img src={decorationLineLeft} alt="" className={AppCSS.decorLineLeft} /> */}
      </div>
      <div className={AppCSS.adviceCardsHolder}>
        <AdviceCards></AdviceCards>
      </div>
      <div className={AppCSS.limitationsHolder}>

        {screenSize.width > 820 ? 
          <div className={AppCSS.limitations}>
            <div className={AppCSS.rowOne}>
              <div className={AppCSS.limitationsTextContent}>
                <h1 className={AppCSS.limitationsTitle}>Limitations of BMI</h1>
                <p className={AppCSS.limitationsText}>Although BMI is often a practical indicator of healthy weight, it is not suited for every person. Specific groups should carefully consider their BMI outcomes, and in certain cases, the measurement may not be beneficial to use.</p>
              </div>
                <LimitationsCard limitationsCardIcon={limitationCards[0].img} limitationsCardTitle={limitationCards[0].title} limitationsCardText={limitationCards[0].text}/>
            </div>
            <div className={AppCSS.rowTwo}>
              <LimitationsCard limitationsCardIcon={limitationCards[1].img} limitationsCardTitle={limitationCards[1].title} limitationsCardText={limitationCards[1].text}/>
              <LimitationsCard limitationsCardIcon={limitationCards[2].img} limitationsCardTitle={limitationCards[2].title} limitationsCardText={limitationCards[2].text}/>
            </div>
            <div className={AppCSS.rowThree}>
              <LimitationsCard limitationsCardIcon={limitationCards[3].img} limitationsCardTitle={limitationCards[3].title} limitationsCardText={limitationCards[3].text}/>
              <LimitationsCard limitationsCardIcon={limitationCards[4].img} limitationsCardTitle={limitationCards[4].title} limitationsCardText={limitationCards[4].text}/>
            </div>
          </div> : 
      
          <div className={AppCSS.limitations}>
              <div className={AppCSS.limitationsTextContent}>
                <h1 className={AppCSS.limitationsTitle}>Limitations of BMI</h1>
                <p className={AppCSS.limitationsText}>Although BMI is often a practical indicator of healthy weight, it is not suited for every person. Specific groups should carefully consider their BMI outcomes, and in certain cases, the measurement may not be beneficial to use.</p>
              </div>
              
              <div className={AppCSS.limitationsCards}>
                {[limitationCards[0], limitationCards[1], limitationCards[2], limitationCards[3],].map((limitationCard) => {
                  return <LimitationsCard limitationsCardIcon={limitationCard.img} limitationsCardTitle={limitationCard.title} limitationsCardText={limitationCard.text}/>
                })}
                
              </div>
              <div className={AppCSS.fifthLimitationCardHolder}>
                <LimitationsCard limitationsCardIcon={limitationCards[4].img} limitationsCardTitle={limitationCards[4].title} limitationsCardText={limitationCards[4].text}/>
                </div>
          </div> }
      </div>
    </div>
  );
}

export default App;




