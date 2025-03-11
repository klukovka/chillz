import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import AboutPage from "./pages/about/AboutPage";
import ArticlesPage from "./pages/articles/ArticlesPage";
import ArticlesPageRootLayout from "./pages/articles/ArticlesPageRootLayout";
import CategoryArticlesPage from "./pages/articles/pages/CategoryArticlesPage";
import ContactUsPage from "./pages/contact-us/ContactUsPage";
import BrandsContactUsPage from "./pages/contact-us/pages/BrandsContactUsPage";
import InfluContactUsPage from "./pages/contact-us/pages/InfluContactUsPage";
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
        element: <ArticlesPageRootLayout />,
        children: [
          {
            index: true,
            element: <ArticlesPage />,
          },
          {
            path: ":category",
            element: <CategoryArticlesPage />,
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
]);

export default function App() {
  return <RouterProvider router={router} />;
}
