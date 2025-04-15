import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import AboutPage from "./pages/about/AboutPage";
import ArticlesPage from "./pages/articles/ArticlesPage";
import ArticlesPageRootLayout from "./pages/articles/ArticlesPageRootLayout";
import ContactUsPage from "./pages/contact-us/ContactUsPage";
import BrandsContactUsPage from "./pages/contact-us/pages/BrandsContactUsPage";
import InfluContactUsPage from "./pages/contact-us/pages/InfluContactUsPage";
import FaqPage from "./pages/faq/FaqPage";
import PortfolioPage from "./pages/portfolio/PortfolioPage";
import PortfolioPageRootLayout from "./pages/portfolio/PortfolioPageLayout";
import PortfolioItemDetailsPage from "./pages/portfolio/pages/PortfolioItemDetailsPage";
import ServicesPage from "./pages/services/ServicesPage";
import ServicesPageRootLayout from "./pages/services/ServicesPageRootLayout";
import BrandsServicesPage from "./pages/services/pages/BrandsServicesPage";
import InfluencersServicesPage from "./pages/services/pages/InfluencersServicesPage";
import { applyZoomBasedOnScreenWidth } from "./util/applyZoomBasedOnScreenWidth.js";
const router = createBrowserRouter(
  [
    {
      path: "",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <AboutPage />,
        },
        {
          path: "services",
          element: <ServicesPageRootLayout />,
          children: [
            {
              index: true,
              element: <ServicesPage />,
            },
            {
              path: "brands",
              element: <BrandsServicesPage />,
            },
            {
              path: "influencers",
              element: <InfluencersServicesPage />,
            },
          ],
        },
        {
          path: "portfolio",
          element: <PortfolioPageRootLayout />,
          children: [
            {
              index: true,
              element: <PortfolioPage />,
            },
            {
              path: ":id",
              element: <PortfolioItemDetailsPage />,
            },
          ],
        },
        {
          path: "articles",
          element: <ArticlesPageRootLayout />,
          children: [
            {
              path: "",
              element: <ArticlesPage />,
            },
            {
              path: ":category",
              element: <ArticlesPage />,
            },
          ],
        },
        {
          path: "faq",
          element: <FaqPage />,
        },
        {
          path: "contact-us",
          element: <ContactUsPage />,
          children: [
            {
              index: true,
              path: "brands",
              element: <BrandsContactUsPage />,
            },
            {
              path: "influencers",
              element: <InfluContactUsPage />,
            },
          ],
        },
      ],
    },
  ],
  {
    basename: import.meta.env.BASE_URL,
  }
);

export default function App() {
  useEffect(() => {
    applyZoomBasedOnScreenWidth();

    window.addEventListener("resize", applyZoomBasedOnScreenWidth);

    return () => {
      window.removeEventListener("resize", applyZoomBasedOnScreenWidth);
    };
  }, []);
  return <RouterProvider router={router} />;
}
