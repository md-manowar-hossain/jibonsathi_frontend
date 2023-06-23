import * as React from "react";
import styles from "../assests/css/ContactUs.module.css"
import { useNavigate } from "react-router-dom";

export default function ContactUs() {
  const navigate = useNavigate();

  const login = () => {
    navigate("");
  };
  return (
    <section>
      <div className={styles.CardContainer}>
        <div className={styles.card}>
          <div className={styles.title}>
            <div>Contact Us</div>
          </div>
          <div>
            <label>Name:</label>
            <input type="text" name="name" placeholder="Enter Your Full Name" />
          </div>
          <div>
            <label>Email:</label>
            <input type="email" name="email" placeholder="example@gmail.com" />
          </div>
          <div>
            <label>Subject:</label>
            <input type="text" name="subject" placeholder="Enter Your Email Subject" />
          </div>
          <div className={styles.messageTextArea}>
            <label>Message:</label>
            <textarea name="message" placeholder="Type Your Message Here..." />
          </div>
          
          <div className={styles.login}>
            <button onClick={login}>Send</button>
          </div>
          
        </div>
      </div>
    </section>
  );
}
