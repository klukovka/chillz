import { useMediaQuery } from "@mui/material";
import PinAnimation from "../../../../components/PinAnimation";
import styles from "./PortfolioItemAdditionalImagesGrid.module.css";

function split(array, sublistSize) {
  const result = [];
  for (let i = 0; i < array.length; i += sublistSize) {
    result.push(array.slice(i, i + sublistSize));
  }
  return result;
}

const PortfolioItemAdditionalImagesGrid = ({ images = [] }) => {
  const matches = useMediaQuery("(min-width:850px)");
  images = images.map((image, index) => (
    <img
      key={`additional_images${index}`}
      src={image}
      alt={`Portfolio ${index + 1}`}
      className={styles.image}
    />
  ));

  if (matches) {
    return (
      <>
        {split(images, 3).map((innerImages) => {
          const first = innerImages[0];
          const last = innerImages.slice(1, 3);
          return (
            <>
              <PinAnimation>{first}</PinAnimation>
              <PinAnimation>
                <div className={styles["images-grid"]}>{last}</div>
              </PinAnimation>
            </>
          );
        })}
      </>
    );
  }

  return (
    <>
      {images.map((image, index) => (
        <PinAnimation key={`additional_images_pin_${index}`}>
          {image}
        </PinAnimation>
      ))}
    </>
  );
};

export default PortfolioItemAdditionalImagesGrid;
