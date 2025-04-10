import { useParams } from "react-router-dom";
import PinAnimation from "../../../components/PinAnimation";
import WidthDimensionsContainer from "../../../components/WidthDimensionsContainer";
import { portfolio } from "../../../data/portfolio";
import classes from "./PortfolioItemDetailsPage.module.css";
import PortfolioItemAdditionalImagesGrid from "./components/PortfolioItemAdditionalImagesGrid";
import PortfolioItemImagesContent from "./components/PortfolioItemImagesContent";
import PortfolioItemTextContent from "./components/PortfolioItemTextContent";

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
        <div className={classes["portfolio-page-content"]}>
          {item.textContent.map((content, index) => (
            <PortfolioItemTextContent
              key={`text_content_${index}`}
              title={content.title}
              description={content.description}
            />
          ))}
        </div>

        <PinAnimation>
          <h2>{item.imageContent.title}</h2>
        </PinAnimation>
        {item.imageContent.content.map((content, index) => (
          <PortfolioItemImagesContent
            key={`images_content_${index}`}
            description={content.description}
            images={content.imageUrls}
            reversed={index % 2 == 1}
          />
        ))}

        <PortfolioItemAdditionalImagesGrid images={item.additionalImages} />
      </div>
    </WidthDimensionsContainer>
  );
}
