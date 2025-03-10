import { useInput } from "../../../hooks/useInput";
import { isEmail, isNotEmpty, isNotEmptyList } from "../../../util/validation";
import ContactUsDivider from "../components/ContactUsDivider";
import ContactUsCheckboxSet from "../components/ContactUseCheckboxSet";
import ContactUsFormBackground from "../components/ContactUsFormBackground";
import ContactUsInput from "../components/ContactUsInput";

export default function InfluContactUsPage() {
  const nameField = useInput("", isNotEmpty);
  const emailField = useInput(
    "",
    (value) => isNotEmpty(value) ?? isEmail(value)
  );
  const instalinkField = useInput("", isNotEmpty);
  const servicesField = useInput([], isNotEmptyList);
  const commentField = useInput("");

  function handleSubmit(event) {
    event.preventDefault();

    const fd = new FormData(event.target);
    const services = fd.getAll("services");

    const data = Object.fromEntries(fd.entries());
    data.services = services;

    nameField.onSubmit();
    emailField.onSubmit();
    instalinkField.onSubmit();
    servicesField.onSubmit();
    commentField.onSubmit();

    console.log(data);
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
        Tell us what's on your mind, and we'll make it happen
      </p>

      <form onSubmit={handleSubmit}>
        <ContactUsDivider bold>
          <ContactUsInput
            label="your name"
            id="name"
            name="name"
            value={nameField.value}
            error={nameField.errorText}
            onChange={nameField.handleChange}
          />
          <ContactUsInput
            label="email"
            id="email"
            name="email"
            type="email"
            value={emailField.value}
            error={emailField.errorText}
            onChange={emailField.handleChange}
          />
        </ContactUsDivider>
        <ContactUsDivider>
          <ContactUsInput
            label="your channel link"
            id="instalink"
            name="instalink"
            value={instalinkField.value}
            error={instalinkField.errorText}
            onChange={instalinkField.handleChange}
          />
        </ContactUsDivider>
        <ContactUsDivider>
          <ContactUsCheckboxSet
            name={"services"}
            label="choose a service"
            value={servicesField.value}
            error={servicesField.errorText}
            onChange={(value) =>
              servicesField.handleChange({ target: { value: value } })
            }
            items={[
              {
                id: "sm_strategy",
                value: "sm_strategy",
                label: "SM strategy",
              },
              {
                id: "promo",
                value: "promo",
                label: "promo",
              },
              {
                id: "counsalting",
                value: "counsalting",
                label: "counsalting",
              },
              {
                id: "visual",
                value: "visual",
                label: "visual",
              },
            ]}
          />
        </ContactUsDivider>
        <ContactUsDivider>
          <ContactUsInput
            label="comment (optional)"
            id="comment"
            name="comment"
            textarea
            value={commentField.value}
            error={commentField.errorText}
            onChange={commentField.handleChange}
          />
        </ContactUsDivider>
        <button type="submit" className="button">
          Sign up
        </button>
      </form>
    </ContactUsFormBackground>
  );
}
