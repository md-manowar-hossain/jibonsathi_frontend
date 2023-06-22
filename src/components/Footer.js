import * as React from "react";
import styles from "../assests/css/Footer.module.css";
import Facebook from "../assests/images/facebook.svg"
import Youtube from "../assests/images/youtube.svg"
import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className={styles.container}>
        <div className={styles.terms}>
          <div><Link to={"/privacy"}>Privacy Policy</Link></div>
          <div><Link to={"/terms"}>Terms &amp; Conditions</Link></div>
          <div><Link to={"/donate"}>Donation</Link></div>
        </div>
        <div className={styles.socialIconContainer}>
          <div className={styles.icon}><Link to={"https://www.facebook.com"}><img src={Facebook} width={25}/></Link></div>
          <div className={styles.icon}><Link to={"https://www.youtube.com"}><img src={Youtube} width={25}/></Link></div>
        </div>
        <div className={styles.copyright}>Copyright &copy; {`${year}`} JibonSathi All Rights Reserved.</div>
      </div>
    </footer>
  );
}
