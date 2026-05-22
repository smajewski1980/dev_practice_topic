import styles from "./WebDesSignUp.module.css";
import { useState } from "react";

const WebDesSignUp = () => {
  const [email, setEmail] = useState("");

  function handleInput(e) {
    setEmail(e.target.value);
  }

  return (
    <section className={styles.webDesSignUpSection}>
      <div className={styles.webDesSignUp}>
        <div>
          <img
            src='/images/rear-view-young-college-student.jpg'
            alt='rear view young college student using computer'
          />
        </div>
        <div className={styles.signUpContent}>
          <h3>Get Newsletter</h3>

          <input
            value={email}
            onChange={handleInput}
            type='email'
            name='email'
            id='email'
            placeholder='Email Address'
          />

          <button
            onClick={() => {
              console.log(email);
            }}
          >
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default WebDesSignUp;
