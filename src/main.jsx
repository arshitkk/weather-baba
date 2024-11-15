import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { WeatherDescProvider } from "./context/WeatherDescContext.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  AboutWebsite,
  Container,
  Header,
  SearchWeather,
  YourWeather,
} from "./index.js";
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: (
        <Container >
          <Header />
          <YourWeather />
        </Container>
      ),
    },

    {
      path: "/about-website",
      element: (
        <Container>
          <Header />
          <AboutWebsite />
        </Container>
      ),
    },
    {
      path: "/search-weather",
      element: (
        <Container>
          <Header />
          <SearchWeather />
        </Container>
      ),
    },
  ],
  {
    future: {
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
);

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <WeatherDescProvider>
  <RouterProvider router={router}>
  </RouterProvider>
  </WeatherDescProvider>
  // </StrictMode>
);
