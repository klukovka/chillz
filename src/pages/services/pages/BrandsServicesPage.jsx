import PinAnimation from "../../../components/PinAnimation";
import WidthDimensionsContainer from "../../../components/WidthDimensionsContainer";
import ServicesGrid from "./components/ServicesGrid";
import classes from "./NestedServicesPage.module.css";

const services = [
  {
    title: "Tailored Growth Strategy",
    description: "Deep dive into your brand, audience, and competitors",
    background: "",
  },
  {
    title: "SEO & UX Optimization",
    description:
      "Your online presence, structured for maximum reach & engagement",
    background: "",
  },
  {
    title: "Creative Strategy",
    description: "Strong content direction to connect with your audience",
    background: "",
  },
  {
    title: "Paid Ads Management",
    description: "Targeted campaigns for lead generation & sales.",
    background: "",
  },
  {
    title: "Brand Story & Identity",
    description: "Cohesive storytelling that defines your brand",
    background: "",
  },
  {
    title: "Influencer Marketing",
    description: "We help you find the perfect creators for your campaigns",
    background: "",
  },
  {
    title: "UGC & IGC Content Creation",
    description: "Authentic content that resonates with your audience",
    background: "",
  },
  {
    title: "Competitive Analysis & Insights",
    description: "Stay ahead with key market insights and growth strategies",
    background: "",
  },
  {
    title: "1:1 Consultations",
    description:
      "Expert advice on strategy, growth, and overcoming digital roadblocks",
    background: "",
  },
];

export default function BrandsServicesPage() {
  return (
    <WidthDimensionsContainer>
      <div className={classes["nested-services-page"]}>
        <PinAnimation>
          <h1 style={{ textAlign: "center" }}>for brands</h1>
        </PinAnimation>
        <ServicesGrid services={services} />
      </div>
    </WidthDimensionsContainer>
  );
}
