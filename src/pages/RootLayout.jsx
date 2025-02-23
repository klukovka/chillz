import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import MainNavigationBar from "../components/MainNavigationBar";
import PinAnimation from "../components/PinAnimation";

export default function RootLayout() {
  return (
    <>
      <MainNavigationBar />
      <main>
        <Outlet />
      </main>
      <PinAnimation>
        <Footer />
      </PinAnimation>
    </>
  );
}
