import * as React from "react";
import styles from "../assests/css/CvCard.module.css";

export default function CvCard() {
  return (
    <section>
      <div className={styles.CardContainer}>
        <div className={styles.card}>
          <div className={styles.title}> 
            <span>জীবনসাথীতে</span> সম্পূর্ণ বিনামূল্যে বায়োডাটা তৈরি করা যায়
          </div>
          <div className={styles.btnContainer}>
            <button>Create Biodata</button>
            <button>Youtube</button>
          </div>
        </div>
      </div>
    </section>
  );
}
