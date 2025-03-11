import { Outlet } from "react-router-dom";
import BreadCrumbs from "../../components/BreadCrumbs";

export default function ArticlesPageRootLayout() {
  return (
    <>
      <BreadCrumbs />
      <Outlet />
    </>
  );
}
