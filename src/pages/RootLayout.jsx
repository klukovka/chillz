import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import MainNavigationBar from "../components/MainNavigationMenu/MainNavigationBar";

export default function RootLayout() {
  return (
    <>
      <MainNavigationBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
