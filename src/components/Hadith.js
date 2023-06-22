import * as React from "react";
import styles from "../assests/css/Hadith.module.css";

export default function Hadith() {
  return (
    <section>
      <div className={styles.CardContainer}>
        <div className={styles.card}>
          <div>
            যে ব্যক্তি বিয়ে করলো সে তার অর্ধেক দ্বীন পূর্ণ করে ফেললো। বাকি
            অর্ধেকের জন্য সে আল্লাহকে ভয় করুক।
          </div>
          <span>(বায়হাকী, শু’আবুল ঈমান –৫৪৮৬)</span>
        </div>
      </div>
    </section>
  );
}
