import { useTranslation } from "react-i18next";
import ServicesGrid from "../../components/ServicesGrid";
import classes from "./InfluencersServicesSection.module.css";

export default function InfluencersServicesSection() {
  const { t } = useTranslation();
  const services = [
    {
      title: t("influ_service_strategic_social_growth_title"),
      description: t("influ_service_strategic_social_growth_description"),
      background: classes["strategic-social-growth"],
    },
    {
      title: t("influ_service_seo_optimization_title"),
      description: t("influ_service_seo_optimization_description"),
      background: classes["seo-optimization"],
    },
    {
      title: t("influ_service_regular_audits_title"),
      description: t("influ_service_regular_audits_description"),
      background: classes["regular-audits"],
    },
    {
      title: t("influ_service_paid_ads_assistance_title"),
      description: t("influ_service_paid_ads_assistance_description"),
      background: classes["paid-ads-assistance"],
    },
    {
      title: t("influ_service_platform_issue_resolution_title"),
      description: t("influ_service_platform_issue_resolution_description"),
      background: classes["platform-issue-resolution"],
    },
    {
      title: t("influ_service_visual_aesthetics_title"),
      description: t("influ_service_visual_aesthetics_description"),
      background: classes["visual-aesthetics"],
    },
    {
      title: t("influ_service_creative_strategy_support_title"),
      description: t("influ_service_creative_strategy_support_description"),
      background: classes["creative-strategy-support"],
    },
    {
      title: t("influ_service_monetization_optimization_title"),
      description: t("influ_service_monetization_optimization_description"),
      background: classes["monetization-optimization"],
    },
    {
      title: t("influ_service_one_to_one_consultations_title"),
      description: t("influ_service_one_to_one_consultations_description"),
      background: classes["one-to-one-consultations"],
    },
  ];
  return <ServicesGrid services={services} />;
}
