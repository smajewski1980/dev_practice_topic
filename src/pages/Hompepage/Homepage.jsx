import styles from "./Homepage.module.css";
import Hero from "../../components/Hero/Hero";
import Browse from "../../components/Browse/Browse";
import How from "../../components/How/How";
import Faqs from "../../components/Faqs/Faqs";

const Homepage = () => {
  return (
    <>
      <Hero />
      <Browse />
      <How />
      <Faqs />
    </>
  );
};

export default Homepage;
