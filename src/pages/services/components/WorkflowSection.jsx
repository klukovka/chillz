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
      className: "deep_dive",
    },
    {
      title: t("shell_and_tell_title"),
      subtitle: t("shell_and_tell_subtitle"),
      description: t("shell_and_tell_description"),
      className: "shell_and_tell",
    },
    {
      title: t("lets_get_crackin_title"),
      subtitle: t("lets_get_crackin_subtitle"),
      description: t("lets_get_crackin_description"),
      className: "lets_get_crackin",
    },
    {
      title: t("tide_guide_title"),
      subtitle: t("tide_guide_subtitle"),
      description: t("tide_guide_description"),
      className: "tide_guide",
    },
    {
      title: t("crab_check_title"),
      subtitle: t("crab_check_subtitle"),
      description: t("crab_check_description"),
      className: "crab_check",
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
