import AboutFlexContainer from "./AboutFlexContainer";

export default function AboutUsSection() {
  return (
    <>
      <AboutFlexContainer>
        <h3>who we are?</h3>
        <p>
          We’re chi_illz — a young, indie agency on a mission to make
          complicated stuff simple and simple stuff unforgettable
        </p>
      </AboutFlexContainer>
      <AboutFlexContainer>
        <p>
          Growth should be a thrill, not a grind. We turn strategy into a clear
          roadmap, marketing into impact, and stress into chill
        </p>
        <h3 style={{ textAlign: "end" }}>
          in <span style={{ color: "#9B4DFF" }}>simplicity</span> we believe
        </h3>
      </AboutFlexContainer>
      <AboutFlexContainer>
        <h3>there’s always a way</h3>
        <p>
          That’s what our mascot, Crayby, taught us. If somebody says, “That’s
          impossible,” we find a smarter route. No guesswork, just strategy. No
          nonsense, just results.
        </p>
      </AboutFlexContainer>
    </>
  );
}
