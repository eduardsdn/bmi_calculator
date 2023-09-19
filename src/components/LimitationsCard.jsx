import LimitationsCardCSS from "../styles/LimitationsCard.module.css";

function LimitationsCard(props) {
  return (
    <div className={LimitationsCardCSS.limitationsCard}>
      <div className={LimitationsCardCSS.top}>
        <img
          src={props.limitationsCardIcon}
          alt=""
          className={LimitationsCardCSS.icon}
        />
        <h1 className={LimitationsCardCSS.title}>
          {props.limitationsCardTitle}
        </h1>
      </div>
      <p className={LimitationsCardCSS.text}>{props.limitationsCardText}</p>
    </div>
  );
}

export default LimitationsCard;
