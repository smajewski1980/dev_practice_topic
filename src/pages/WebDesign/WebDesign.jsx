import styles from "./WebDesign.module.css";
import WebDesHero from "../../components/WebDesHero/WebDesHero";
import WebDesMain from "../../components/WebDesMain/WebDesMain";
import WebDesSignUp from "../../components/WebDesSignUp/WebDesSignUp";

const WebDesign = () => {
  return (
    <>
      <WebDesHero />
      <WebDesMain />
      <WebDesSignUp />
    </>
  );
};

export default WebDesign;
