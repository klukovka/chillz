import ContactUsCheckboxSet from "../components/ContactUseCheckboxSet";
import ContactUsFormBackground from "../components/ContactUsFormBackground";
import ContactUsInput from "../components/ContactUsInput";

export default function BrandsContactUsPage() {
  return (
    <ContactUsFormBackground>
      <ContactUsInput
        label="your name"
        id="name"
        name="name"
        error="deewerwer"
        textarea
      />
      <ContactUsInput label="email" id="email" name="email" type="email" />
      <ContactUsCheckboxSet
        name={"service"}
        label="choose a service"
        values={[
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
            id: "influencer_marketing",
            value: "influencer_marketing",
            label: "influencer marketing",
          },
          {
            id: "brand_identity",
            value: "brand_identity",
            label: "brand identity",
          },
        ]}
      />
      <ContactUsCheckboxSet
        name={"service"}
        label="choose a service"
        error="dkmdslkmdflk"
        values={[
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
            id: "influencer_marketing",
            value: "influencer_marketing",
            label: "influencer marketing",
          },
          {
            id: "brand_identity",
            value: "brand_identity",
            label: "brand identity",
          },
        ]}
      />
    </ContactUsFormBackground>
  );
}
