import { Outlet } from "react-router-dom";
import WidthDimensionsContainer from "../../components/WidthDimensionsContainer";

export default function ArticlesPageRootLayout() {
  return (
    <WidthDimensionsContainer>
      <Outlet />
    </WidthDimensionsContainer>
  );
}
