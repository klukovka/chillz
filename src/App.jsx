import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import AboutPage from "./pages/about/AboutPage";
import ArticlesPage from "./pages/articles/ArticlesPage";
import ContactUsPage from "./pages/contact-us/ContactUsPage";
import FaqPage from "./pages/faq/FaqPage";
import PortfolioPage from "./pages/portfolio/PortfolioPage";
import ServicesPage from "./pages/services/ServicesPage";
import ServicesPageRootLayout from "./pages/services/ServicesPageRootLayout";
import BrandsServicesPage from "./pages/services/pages/BrandsServicesPage";
import InfluencersServicesPage from "./pages/services/pages/InfluencersServicesPage";
const router = createBrowserRouter([
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
        element: <PortfolioPage />,
      },
      {
        path: "articles",
        element: <ArticlesPage />,
      },
      {
        path: "faq",
        element: <FaqPage />,
      },
      {
        path: "contact-us",
        element: <ContactUsPage />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
