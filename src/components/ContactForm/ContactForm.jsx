import styles from "./ContactForm.module.css";

const ContactForm = () => {
  return (
    <main className={styles.contactMain}>
      <div className={styles.contentWrapper}>
        <div className={styles.formWrapper}>
          <h2>We'd love to hear from you</h2>
          <form action=''>
            <input
              type='text'
              name='name'
              id='name-field'
              placeholder='Name'
            />
            <input
              type='email'
              name='email'
              id='email-field'
              placeholder='Email Address'
            />
            <input
              type='text'
              name='subject'
              id='subject-field'
              placeholder='Subject'
            />
            <textArea placeholder='Tell me about the project...'></textArea>
            <button onClick={(e) => e.preventDefault()}>Submit</button>
          </form>
        </div>
        <div className={styles.iframeWrapper}>
          <iframe
            className={styles.iframe}
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000.5069299029865!2d-122.42443402444813!3d37.80458201044298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808580e72d1249ab%3A0xd972a3e90bb24603!2sBay%20St%20%26%20Larkin%20St%2C%20San%20Francisco%2C%20CA%2094109!5e1!3m2!1sen!2sus!4v1778690543335!5m2!1sen!2sus'
            width='500'
            height='250'
            style={{ border: 0 }}
            allowFullScreen=''
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          ></iframe>
          <p>Topic Listing Center</p>
          <p>
            Bay St & Larkin St, San Francisco, CA 94109
            <br />
            United States
          </p>
        </div>
      </div>
    </main>
  );
};

export default ContactForm;
