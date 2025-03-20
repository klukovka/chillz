import { useMediaQuery } from "@mui/material";
import PinAnimation from "../../../components/PinAnimation";
import Carousel from "../components/Carousel";
import classes from "./PortfolioItemImagesContent.module.css";

export default function PortfolioItemImagesContent({
  description,
  images = [],
  reversed,
}) {
  const matches = useMediaQuery("(min-width:850px)");

  const className =
    classes["images-content"] + " " + (reversed ? classes["reversed"] : "");
  const carousel = (
    <div className={classes["carousel"]}>
      <Carousel slidesToShow={1}>
        {images.map((image, index) => (
          <img src={image} key={`${image}_${index}`} />
        ))}
      </Carousel>
    </div>
  );

  const paragraph = <p>{description}</p>;

  if (matches) {
    return (
      <PinAnimation>
        <div className={className}>
          {paragraph}
          {carousel}
        </div>
      </PinAnimation>
    );
  }

  return (
    <div className={className}>
      <PinAnimation>{paragraph}</PinAnimation>
      <PinAnimation> {carousel}</PinAnimation>
    </div>
  );
}
