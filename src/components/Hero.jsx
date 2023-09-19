import HeroCSS from "../styles/Hero.module.css";
import logo from "../assets/images/logo.svg";
import Calculator from "./Calculator";

function Hero() {
  return (
    <div className={HeroCSS.hero}>
      <img src={logo} className={HeroCSS.logo} alt="" />
      <h1 className={HeroCSS.title}>
        Body Mass <br /> Index Calculator
      </h1>
      <p className={HeroCSS.text}>
        Better understand your weight in relation to your height using our body
        mass index (BM) calculator. While BMI is not the sole determinant of a
        healthy weight, it offers a valuable starting point to evaluate your
        overall health and well-being.
      </p>
      <Calculator></Calculator>
    </div>
  );
}

export default Hero;
