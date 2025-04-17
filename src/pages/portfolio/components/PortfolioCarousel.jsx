import { useState } from "react";
import { portfolio } from "../../../data/portfolio.js";
import Carousel from "./Carousel";
import PortfolioCarouselItem from "./PortfolioCarouselItem.jsx";

export default function PortfolioCarousel() {
  const [isDragging, setIsDragging] = useState(false);

  return (
    <Carousel slidesToShow={5} clickable onScrollChanged={setIsDragging}>
      {portfolio.map((item) => (
        <PortfolioCarouselItem
          key={`portfolio_${item.id}`}
          to={`${item.id}`}
          isDragging={isDragging}
        >
          <img src={item.imgUrl} />
        </PortfolioCarouselItem>
      ))}
    </Carousel>
  );
}
