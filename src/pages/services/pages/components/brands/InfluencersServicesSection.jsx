import ServicesGrid from "../../components/ServicesGrid";
import classes from "./InfluencersServicesSection.module.css";

const services = [
  {
    title: "Strategic Social Growth",
    description: "Custom development plans to boost engagement and visibility.",
    background: classes["strategic-social-growth"],
  },
  {
    title: "SEO Optimization",
    description: "Your content, discoverable and ranking where it should.",
    background: classes["seo-optimization"],
  },
  {
    title: "Regular Audits",
    description: "Tailored check-ins to tweak, refine, and keep you on track.",
    background: classes["regular-audits"],
  },
  {
    title: "Paid Ads Assistance",
    description: "Ready to scale? We help with targeted ad campaigns.",
    background: classes["paid-ads-assistance"],
  },
  {
    title: "Platform Issue Resolution",
    description: "Shadowban? Monetization issues? We help fix it.",
    background: classes["platform-issue-resolution"],
  },
  {
    title: "Visual Aesthetics",
    description:
      "Grid, stories, post design, banner, thumbnails – cohesive, clean, on-brand.",
    background: classes["visual-aesthetics"],
  },
  {
    title: "Creative Strategy Support",
    description: "Struggling with content ideas? We got you.",
    background: classes["creative-strategy-support"],
  },
  {
    title: "Monetization Optimization",
    description:
      "We help you maximize revenue streams and give your content a second life.",
    background: classes["monetization-optimization"],
  },
  {
    title: "1:1 Consultations",
    description:
      "Ask anything about your growth, struggles, or worries—we’ve got the answers.",
    background: classes["one-to-one-consultations"],
  },
];

export default function InfluencersServicesSection() {
  return <ServicesGrid services={services} />;
}
