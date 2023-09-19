import ResultDescriptionCSS from "../styles/ResultDescription.module.css";
import manEating from "../assets/images/image-man-eating.webp";

function ResultDescription() {
  return (
    <div className={ResultDescriptionCSS.resultDescription}>
      <img
        src={manEating}
        className={ResultDescriptionCSS.resultDescriptionImg}
        alt="A man eating sushi"
      />
      <div className={ResultDescriptionCSS.resultDescriptionTextContent}>
        <h1 className={ResultDescriptionCSS.resultDescriptionTitle}>
          What your BMI result means
        </h1>
        <p className={ResultDescriptionCSS.resultDescriptionText}>
          A BMI range of 18.5 to 24.9 is considered a 'healthy weight.'
          Maintaining a healthy weight may lower your chances of experiencing
          health issues later on, such as obesity and type 2 diabetes. Aim for a
          nutritious diet with reduced fat and sugar content, incorporating
          ample fruits and vegetables. Additionally, strive for regular physical
          activity, ideally about 30 minutes daily for five days a week.
        </p>
      </div>
    </div>
  );
}

export default ResultDescription;
