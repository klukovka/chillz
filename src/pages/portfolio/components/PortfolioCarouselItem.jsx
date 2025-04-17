import { NavLink } from "react-router-dom";

const PortfolioCarouselItem = ({ to, isDragging, children }) => {
  const handleClick = (e) => {
    if (isDragging) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  return (
    <NavLink to={to} onClick={handleClick}>
      {children}
    </NavLink>
  );
};

export default PortfolioCarouselItem;
