import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import MainNavigationBar from "../components/MainNavigationMenu/MainNavigationBar";

export default function RootLayout() {
  return (
    <>
      <MainNavigationBar />

      <div className="site">
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}
