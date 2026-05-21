import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Homepage from "./pages/Hompepage/Homepage";
import Root from "./components/Root";
import WebDesign from "./pages/WebDesign/WebDesign";
import {
  Route,
  Router,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path='/'
      element={<Root />}
    >
      <Route
        index
        element={<Homepage />}
      />
      <Route
        path='/web-design'
        element={<WebDesign />}
      />
    </Route>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
