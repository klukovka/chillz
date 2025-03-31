import { Outlet } from "react-router-dom";
import BreadCrumbs from "../../components/BreadCrumbs";
import WidthDimensionsContainer from "../../components/WidthDimensionsContainer";

export default function ServicesPageRootLayout() {
  return (
    <>
      <WidthDimensionsContainer>
        <BreadCrumbs />
      </WidthDimensionsContainer>
      <Outlet />
    </>
  );
}
