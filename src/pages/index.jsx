import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HeroesFilterPage from "./HeroesFilterPage/HeroesFilterPage";
import Test from "../components/Testss/Test";
import HeroPage from "../pages/HeroPage/HeroPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HeroesFilterPage />,
  },
  {
    path: "hero/:heroId",
    element: <HeroPage />,
  },
]);
