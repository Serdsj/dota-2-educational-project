import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./style.scss";
import { router } from "./pages";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient(); // здесь основные настройки 

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
    </QueryClientProvider>
  </>
);

// QueryClientProvider нужен для входа в приложение 

// RouterProvider отвечает за рендеринг на странице, а router за настройку маршрутов
