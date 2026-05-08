import { Outlet } from "react-router-dom";
import Navigation from "./Navigation/Navigation";

const Root = () => {
  return (
    <>
      <Navigation />
      <Outlet />
      {/* the footer will go here */}
    </>
  );
};

export default Root;
