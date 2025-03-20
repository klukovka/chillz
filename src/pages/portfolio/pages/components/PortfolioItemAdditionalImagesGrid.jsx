import styles from "./PortfolioItemAdditionalImagesGrid.module.css";

const PortfolioItemAdditionalImagesGrid = ({ images = [] }) => {
  return (
    <>
      {images.map((image, index) => (
        <img
          key={`additional_images${index}`}
          src={image}
          alt={`Portfolio ${index + 1}`}
          className={styles.image}
        />
      ))}
    </>
  );
};

export default PortfolioItemAdditionalImagesGrid;
