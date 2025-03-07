import ServicesGrid from "../../components/ServicesGrid";
import classes from "./BrandsServicesSection.module.css";

const services = [
  {
    title: "Tailored Growth Strategy",
    description: "Deep dive into your brand, audience, and competitors",
    background: classes["tailored-growth-strategy"],
  },
  {
    title: "SEO & UX Optimization",
    description:
      "Your online presence, structured for maximum reach & engagement",
    background: classes["seo-ux-optimization"],
  },
  {
    title: "Creative Strategy",
    description: "Strong content direction to connect with your audience",
    background: classes["creative-strategy"],
  },
  {
    title: "Paid Ads Management",
    description: "Targeted campaigns for lead generation & sales.",
    background: classes["paid-ads-management"],
  },
  {
    title: "Brand Story & Identity",
    description: "Cohesive storytelling that defines your brand",
    background: classes["brand-story-identity"],
  },
  {
    title: "Influencer Marketing",
    description: "We help you find the perfect creators for your campaigns",
    background: classes["influencer-marketing"],
  },
  {
    title: "UGC & IGC Content Creation",
    description: "Authentic content that resonates with your audience",
    background: classes["ugc-igx-content-creation"],
  },
  {
    title: "Competitive Analysis & Insights",
    description: "Stay ahead with key market insights and growth strategies",
    background: classes["competitive-analysis-insights"],
  },
  {
    title: "1:1 Consultations",
    description:
      "Expert advice on strategy, growth, and overcoming digital roadblocks",
    background: classes["one-to-one-consultations"],
  },
];

export default function BrandsServicesSection() {
  return <ServicesGrid services={services} />;
}
