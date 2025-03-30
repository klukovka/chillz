import { useTranslation } from "react-i18next";
import ServicesGrid from "../../components/ServicesGrid";
import classes from "./BrandsServicesSection.module.css";

export default function BrandsServicesSection() {
  const { t } = useTranslation();
  const services = [
    {
      title: t("brands_service_tailored_growth_strategy_title"),
      description: t("brands_service_tailored_growth_strategy_description"),
      background: classes["tailored-growth-strategy"],
    },
    {
      title: t("brands_service_seo_ux_optimization_title"),
      description: t("brands_service_seo_ux_optimization_description"),
      background: classes["seo-ux-optimization"],
    },
    {
      title: t("brands_service_creative_strategy_title"),
      description: t("brands_service_creative_strategy_description"),
      background: classes["creative-strategy"],
    },
    {
      title: t("brands_service_paid_ads_management_title"),
      description: t("brands_service_paid_ads_management_description"),
      background: classes["paid-ads-management"],
    },
    {
      title: t("brands_service_brand_story_identity_title"),
      description: t("brands_service_brand_story_identity_description"),
      background: classes["brand-story-identity"],
    },
    {
      title: t("brands_service_influencer_marketing_title"),
      description: t("brands_service_influencer_marketing_description"),
      background: classes["influencer-marketing"],
    },
    {
      title: t("brands_service_ugc_igx_content_creation_title"),
      description: t("brands_service_ugc_igx_content_creation_description"),
      background: classes["ugc-igx-content-creation"],
    },
    {
      title: t("brands_service_competitive_analysis_insights_title"),
      description: t(
        "brands_service_competitive_analysis_insights_description"
      ),
      background: classes["competitive-analysis-insights"],
    },
    {
      title: t("brands_service_one_to_one_consultations_title"),
      description: t("brands_service_one_to_one_consultations_description"),
      background: classes["one-to-one-consultations"],
    },
  ];

  return <ServicesGrid services={services} />;
}
