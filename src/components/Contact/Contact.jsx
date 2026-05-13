import styles from "./Contact.module.css";
import ContactCard from "../ContactCard/ContactCard";

const Contact = () => {
  return (
    <section
      className={styles.contactSection}
      id='contact'
    >
      <h2>Get In Touch</h2>
      <div className={styles.contactGrid}>
        <iframe
          className={styles.iframe}
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000.5069299029865!2d-122.42443402444813!3d37.80458201044298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808580e72d1249ab%3A0xd972a3e90bb24603!2sBay%20St%20%26%20Larkin%20St%2C%20San%20Francisco%2C%20CA%2094109!5e1!3m2!1sen!2sus!4v1778690543335!5m2!1sen!2sus'
          width='400'
          height='300'
          style={{ border: 0 }}
          allowFullScreen=''
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
        ></iframe>
        <ContactCard
          title='Head Office'
          addressLine1='Bay St & Larkin St'
          addressLine2='San Francisco, CA 94109'
          addressLine3='United States'
          phone='305-240-9671'
          email='info@company.com'
        />
        <ContactCard
          title='Dubai Office'
          addressLine1='Burj Park'
          addressLine2='Downtown Dubai'
          addressLine3='United Arab Emirates'
          phone='110-220-3400'
          email='info@company.com'
        />
      </div>
    </section>
  );
};

export default Contact;
