import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HeroesFilterPage from "./HeroesFilterPage/HeroesFilterPage";
import HeroPage from "../pages/HeroPage/HeroPage";

export const router = createBrowserRouter([ // здесь мы определяем структуры маршрутиризации нашего приложения
  {
    path: "/",
    element: <HeroesFilterPage />,
  },
  {
    path: "hero/:heroName",
    element: <HeroPage />,
  },
]);


// потом мы можем из пути мы можем вытащить heroId с помощью const { heroId } = useParams();