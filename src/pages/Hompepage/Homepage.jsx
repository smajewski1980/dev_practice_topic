import styles from "./Homepage.module.css";
import Hero from "../../components/Hero/Hero";
import Browse from "../../components/Browse/Browse";
import How from "../../components/How/How";
import Faqs from "../../components/Faqs/Faqs";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";

const Homepage = () => {
  return (
    <>
      <Hero />
      <Browse />
      <How />
      <Faqs />
      <Contact />
      <Footer />
    </>
  );
};

export default Homepage;
