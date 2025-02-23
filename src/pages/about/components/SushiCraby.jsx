import craby from "../../../assets/craby_sushi.svg";
import AboutFlexContainer from "./AboutFlexContainer";
import classes from "./SushiCraby.module.css";

export default function SushiCraby() {
  return (
    <AboutFlexContainer className={classes["sushi-craby-section"]}>
      <section className={classes["craby-section"]}>
        <h2>
          <span style={{ color: "#FFD766" }}>fresh</span> ideas
        </h2>
        <h2>
          <span style={{ color: "#9B4DFF" }}>real</span> impact
        </h2>
        <h2>
          <span style={{ color: "#EF4B8D" }}>zero</span> stress
        </h2>
      </section>
      <img src={craby} alt="Chillz Logo" className={classes["rotated-craby"]} />
    </AboutFlexContainer>
  );
}
