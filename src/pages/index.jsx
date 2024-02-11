import { createBrowserRouter } from "react-router-dom";
import HeroesFilterPage from "./HeroesFilterPage/HeroesFilterPage";
import HeroPage from "../pages/HeroPage/HeroPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HeroesFilterPage />,
  },
  {
    path: "hero/:heroName",
    element: <HeroPage />,
  },
]);
