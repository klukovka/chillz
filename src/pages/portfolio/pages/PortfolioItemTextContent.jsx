import { useMediaQuery } from "@mui/material";
import PinAnimation from "../../../components/PinAnimation";
import classes from "./PortfolioItemTextContent.module.css";

export default function PortfolioItemTextContent({ title, description }) {
  const matches = useMediaQuery("(min-width:850px)");

  if (matches) {
    return (
      <PinAnimation>
        <div className={classes["text-content"]}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </PinAnimation>
    );
  }

  return (
    <div className={classes["text-content"]}>
      <PinAnimation>
        <h2>{title}</h2>
      </PinAnimation>
      <PinAnimation>
        <p>{description}</p>
      </PinAnimation>
    </div>
  );
}
