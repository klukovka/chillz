import { Outlet } from "react-router-dom";
import MainNavigationBar from "../components/MainNavigationBar";

export default function RootLayout() {
  return (
    <>
      <MainNavigationBar />
      <main>
        <Outlet />
      </main>
    </>
  );
}
