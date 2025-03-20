import { useParams } from "react-router-dom";
import PinAnimation from "../../../components/PinAnimation";
import WidthDimensionsContainer from "../../../components/WidthDimensionsContainer";
import { portfolio } from "../../../data/portfolio";
import classes from "./PortfolioItemDetailsPage.module.css";
import PortfolioItemTextContent from "./PortfolioItemTextContent";

export default function PortfolioItemDetailsPage() {
  const { id } = useParams();
  const item = portfolio.find((value) => value.id == id);

  return (
    <WidthDimensionsContainer>
      <div className={classes["portfolio-page"]}>
        <PinAnimation>
          <h1>{item.name}</h1>
        </PinAnimation>
        <PinAnimation>
          <img src={item.imgUrl} className={classes["main-image"]} />
        </PinAnimation>
        {item.textContent.map((content, index) => (
          <PortfolioItemTextContent
            key={`text_content_${index}`}
            title={content.title}
            description={content.description}
          />
        ))}
      </div>
    </WidthDimensionsContainer>
  );
}
