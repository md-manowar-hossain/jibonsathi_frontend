import * as React from "react";
import male from "../assests/images/male.svg";
import styles from "../assests/css/Working.module.css";

export default function Working() {

  return (
    <section>
      <div className={styles.CardContainer}>
        <div className={styles.card}>
          <div className={styles.title}>
            <div>
              <span>জীবনসাথী</span> যেভাবে কাজ করে
            </div>
          </div>
          <div className={styles.statisticsContainer}>
            <div className={styles.statistics}>
              <div className={styles.iconContainer}>
                <img src={male} width={80} />
              </div>
              <div className={styles.subTitle}>বায়োডাটা তৈরি করুন</div>
              <div className={styles.description}>
                খুব সহজেই বিনামূল্যে জীবনসাথীতে বায়োডাটা তৈরি করতে পারবেন।
              </div>
            </div>
            <div className={styles.statistics}>
              <div className={styles.iconContainer}>
                <img src={male} width={80} />
              </div>
              <div className={styles.subTitle}>বায়োডাটা খুঁজুন</div>
              <div className={styles.description}>
                বয়স, উপজেলা, পেশা, শিক্ষাগত যোগ্যতা সহ অনেক ফিল্টার ব্যবহার করে
                সহজেই বায়োডাটা খুঁজতে পারবেন।
              </div>
            </div>
            <div className={styles.statistics}>
              <div className={styles.iconContainer}>
                <img src={male} width={80} />
              </div>
              <div className={styles.subTitle}>যোগাযোগ করুন</div>
              <div className={styles.description}>
                আপনার বায়োডাটা কেউ পছন্দ করলে অথবা আপনি কারো বায়োডাটা পছন্দ করলে
                সরাসরি অভিভাবকের সাথে যোগাযোগ করতে পারবেন।
              </div>
            </div>
            <div className={styles.statistics}>
              <div className={styles.iconContainer}>
                <img src={male} width={80} />
              </div>
              <div className={styles.subTitle}>বিবাহ সম্পন্ন করুন</div>
              <div className={styles.description}>
                বায়োডাটা ও কথাবার্তা পছন্দ হলে নিজ দায়িত্বে ভালোভাবে খোঁজ নিয়ে
                সুন্নতি বিবাহ সম্পন্ন করুন।
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
