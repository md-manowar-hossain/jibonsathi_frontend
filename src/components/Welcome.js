import * as React from "react";
import styles from "../assests/css/Welcome.module.css";

export default function Welcome() {
  return (
    <section>
      <div className={styles.CardContainer}>
        <div className={styles.card}>
          <div className={styles.ContentTitle}>
          বাংলাদেশী মুসলিম<span> ম্যাট্রিমনি</span>
          </div>
          <div className={styles.ContentSubtitle}>
           সমগ্র বাংলাদেশে এমনকি নিজ উপজেলায় পাত্রপাত্রী খোঁজা এখন সহজ
          </div>
        </div>
      </div>
    </section>
  );
}
