import { useTranslation } from "react-i18next";
import useHttp from "../../../hooks/useHttp";
import { useInput } from "../../../hooks/useInput";
import { isEmail, isNotEmpty, isNotEmptyList } from "../../../util/validation";
import ContactUsDivider from "../components/ContactUsDivider";
import ContactUsCheckboxSet from "../components/ContactUseCheckboxSet";
import ContactUsFormBackground from "../components/ContactUsFormBackground";
import ContactUsInput from "../components/ContactUsInput";
import ContactUsSubmitButton from "../components/ContactUsSubmitButton";
import ContactUsSubmitMovingButton from "../components/ContactUsSubmitMovingButton";
import classes from "../ContactUsPage.module.css";

const requestConfig = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};

export default function InfluContactUsPage() {
  const { t } = useTranslation();
  const { error, isLoading, submitted, sendRequest } = useHttp(
    //TODO: Use another request
    "https://www.random.org/quota/?format=plain",
    requestConfig
  );
  const nameField = useInput("", (value) =>
    isNotEmpty(value, t("field_required"))
  );
  const emailField = useInput(
    "",
    (value) =>
      isNotEmpty(value, t("field_required")) ??
      isEmail(value, t("enter_valid_email"))
  );
  const instalinkField = useInput("", (value) =>
    isNotEmpty(value, t("field_required"))
  );
  const servicesField = useInput([], (value) =>
    isNotEmptyList(value, t("select_at_least_one_option"))
  );
  const projectBudgetField = useInput("", (value) =>
    isNotEmpty(value, t("field_required"))
  );
  const commentField = useInput("");

  async function handleSubmit(event) {
    event.preventDefault();

    // Trigger validation and collect results
    const isNameValid = nameField.onSubmit();
    const isEmailValid = emailField.onSubmit();
    const isInstalinkValid = instalinkField.onSubmit();
    const isServicesValid = servicesField.onSubmit();
    const isBudgetValid = projectBudgetField.onSubmit();

    const isFormValid =
      isNameValid &&
      isEmailValid &&
      isInstalinkValid &&
      isServicesValid &&
      isBudgetValid;

    if (!isFormValid) {
      console.log("Form has validation errors. Submission stopped.");
      return;
    }

    // Proceed with form submission if no errors
    const fd = new FormData(event.target);
    const services = fd.getAll("services");

    const data = Object.fromEntries(fd.entries());
    data.services = services;

    console.log(data);

    await sendRequest(JSON.stringify(data));
  }

  return (
    <ContactUsFormBackground>
      <p
        style={{
          padding: 0,
          margin: 0,
          fontSize: "2rem",
          color: "black",
          fontWeight: "600",
        }}
      >
        {t("contact_us_form_title")}
      </p>

      <form onSubmit={handleSubmit}>
        <ContactUsDivider bold>
          <ContactUsInput
            label={t("your_name")}
            id="name"
            name="name"
            value={nameField.value}
            error={nameField.errorText}
            onChange={nameField.handleChange}
            placeholder="Crayby The Red Crab"
          />
          <ContactUsInput
            label={t("email")}
            id="email"
            name="email"
            type="email"
            value={emailField.value}
            error={emailField.errorText}
            onChange={emailField.handleChange}
            placeholder="crayby@mail.com"
          />
        </ContactUsDivider>
        <ContactUsDivider>
          <ContactUsInput
            label={t("your_channel_link")}
            id="instalink"
            name="instalink"
            value={instalinkField.value}
            error={instalinkField.errorText}
            onChange={instalinkField.handleChange}
            placeholder="instagram.com/chi_illz"
          />
        </ContactUsDivider>
        <ContactUsDivider>
          <ContactUsInput
            label={t("project_budget")}
            id="project_budget"
            name="project_budget"
            value={projectBudgetField.value}
            error={projectBudgetField.errorText}
            onChange={projectBudgetField.handleChange}
            placeholder="1000$"
          />
        </ContactUsDivider>
        <ContactUsDivider>
          <ContactUsCheckboxSet
            name={"services"}
            label={t("choose_service")}
            value={servicesField.value}
            error={servicesField.errorText}
            onChange={(value) =>
              servicesField.handleChange({ target: { value: value } })
            }
            items={[
              {
                id: "sm_strategy",
                value: "sm_strategy",
                label: t("sm_strategy"),
              },
              {
                id: "promo",
                value: "promo",
                label: t("promo"),
              },
              {
                id: "counsalting",
                value: "counsalting",
                label: t("counsalting"),
              },
              {
                id: "visual",
                value: "visual",
                label: t("visual"),
              },
            ]}
          />
        </ContactUsDivider>
        <ContactUsDivider>
          <ContactUsInput
            label={t("comment_optional")}
            id="comment"
            name="comment"
            textarea
            value={commentField.value}
            error={commentField.errorText}
            onChange={commentField.handleChange}
            placeholder={t("comment_hint")}
          />
        </ContactUsDivider>
        <div id={classes["submit-tablet-button"]}>
          <ContactUsSubmitMovingButton
            isLoading={isLoading}
            moved={submitted && !error}
            error={error}
          />
        </div>
        <div id={classes["submit-mobile-button"]}>
          <ContactUsSubmitButton
            isLoading={isLoading}
            submitted={submitted && !error}
            error={error}
          />
        </div>
      </form>
    </ContactUsFormBackground>
  );
}
