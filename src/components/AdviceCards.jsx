import AdviceCardsCSS from "../styles/AdviceCards.module.css";

import eatingImg from "../assets/images/icon-eating.svg";
import exerciseImg from "../assets/images/icon-exercise.svg";
import sleepImg from "../assets/images/icon-sleep.svg";

function AdviceCards(props) {
  return (
    <div className={AdviceCardsCSS.adviceCards}>
      <div className={AdviceCardsCSS.adviceCard}>
        <img src={eatingImg} className={AdviceCardsCSS.adviceCardImg} alt="" />
        <div className={AdviceCardsCSS.adviceCardTextHolder}>
          <h1 className={AdviceCardsCSS.title}>Healthy eating</h1>
          <p className={AdviceCardsCSS.text}>
            Healthy eating promotes weight control, disease prevention, better
            digestion, immunity, mental clarity, and mood.
          </p>
        </div>
      </div>
      <div className={AdviceCardsCSS.adviceCard}>
        <img
          src={exerciseImg}
          className={AdviceCardsCSS.adviceCardImg}
          alt=""
        />
        <div className={AdviceCardsCSS.adviceCardTextHolder}>
          <h1 className={AdviceCardsCSS.title}>Regular exercise</h1>
          <p className={AdviceCardsCSS.text}>
            Exercise improves fitness, aids weight control, elevates mood, and
            reduces disease risk, fostering wellness and longevity.
          </p>
        </div>
      </div>
      <div className={AdviceCardsCSS.adviceCard}>
        <img src={sleepImg} className={AdviceCardsCSS.adviceCardImg} alt="" />
        <div className={AdviceCardsCSS.adviceCardTextHolder}>
          <h1 className={AdviceCardsCSS.title}>Adequate sleep</h1>
          <p className={AdviceCardsCSS.text}>
            Sleep enhances mental clarity, emotional stability, and physical
            wellness, promoting overall restoration and rejuvenation.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AdviceCards;
//
