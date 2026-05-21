import { Outlet, ScrollRestoration } from "react-router-dom";
import Navigation from "./Navigation/Navigation";
import Footer from "./Footer/Footer";

const Root = () => {
  return (
    <>
      <Navigation />
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </>
  );
};

export default Root;
