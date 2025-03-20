import { Outlet } from "react-router-dom";
import BreadCrumbs from "../../components/BreadCrumbs";

export default function PortfolioPageRootLayout() {
  return (
    <>
      <BreadCrumbs />
      <Outlet />
    </>
  );
}
