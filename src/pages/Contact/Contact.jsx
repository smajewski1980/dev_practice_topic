import styles from "./Contact.module.css";
import ContactHero from "../../components/ContactHero/ContactHero";
import ContactForm from "../../components/ContactForm/ContactForm";

const Contact = () => {
  return (
    <section>
      <ContactHero />
      <ContactForm />
    </section>
  );
};

export default Contact;
