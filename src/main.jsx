import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./style.scss";
import { router } from "./pages";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { StrictMode } from 'react';

const queryClient = new QueryClient(); // здесь основные настройки 

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
    <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  </StrictMode>
);

// QueryClientProvider нужен для входа в приложение 

// RouterProvider отвечает за рендеринг на странице, а router за настройку маршрутов
