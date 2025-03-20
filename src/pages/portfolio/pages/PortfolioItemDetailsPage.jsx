import { useParams } from "react-router-dom";
import WidthDimensionsContainer from "../../../components/WidthDimensionsContainer";
import { portfolio } from "../../../data/portfolio";

export default function PortfolioItemDetailsPage() {
  const { id } = useParams();
  const item = portfolio.find((value) => value.id == id);

  return <WidthDimensionsContainer>{id}</WidthDimensionsContainer>;
}
