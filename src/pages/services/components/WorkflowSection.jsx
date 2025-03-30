import { useTranslation } from "react-i18next";
import PinAnimation from "../../../components/PinAnimation";
import WorkflowItem from "./WorkflowItem";

export default function WorkflowSection() {
  const { t } = useTranslation();
  const steps = [
    {
      title: t("deep_dive_title"),
      subtitle: t("deep_dive_subtitle"),
      description: t("deep_dive_description"),
      style: { color: "#7DC8F7" },
    },
    {
      title: t("shell_and_tell_title"),
      subtitle: t("shell_and_tell_subtitle"),
      description: t("shell_and_tell_description"),
      primary: true,
    },
    {
      title: t("lets_get_crakin_title"),
      subtitle: t("lets_get_crakin_subtitle"),
      description: t("lets_get_crakin_description"),
      style: { color: "#F94C29" },
    },
    {
      title: t("tide_guide_title"),
      subtitle: t("tide_guide_subtitle"),
      description: t("tide_guide_description"),
      style: { color: "#9B4DFF" },
    },
    {
      title: t("crab_check_title"),
      subtitle: t("crab_check_subtitle"),
      description: t("crab_check_description"),
      style: { color: "#EF4B8D" },
    },
  ];
  return (
    <>
      <PinAnimation>
        <h1>{t("our_workflow")}</h1>
      </PinAnimation>
      {steps.map((item, index) => (
        <PinAnimation key={`workflow_item_${index}`}>
          <WorkflowItem item={item} />
        </PinAnimation>
      ))}
    </>
  );
}
