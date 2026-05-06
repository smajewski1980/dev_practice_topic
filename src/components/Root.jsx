import { Outlet } from "react-router-dom";
import Navigation from "./Navigation/Navigation";

const Root = () => {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
};

export default Root;
