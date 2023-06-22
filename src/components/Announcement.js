import * as React from "react";
import styles from "../assests/css/Announcement.module.css";

export default function Announcement() {
  return (
    <section>
      <div className={styles.CardContainer}>
        <div className={styles.card}>
          <div>
            জীবনসাথী একটি উন্মুক্ত প্লাটফর্ম। এখানে সিভি জমা দেওয়া এবং অন্যের সিভি দেখা সম্পূর্ণ ফ্রি। সাধারণ ও ইসলামিক উভয় ক্যাটাগরিতে সিভি জমা দেওয়া এবং অনুসন্ধান করা যাবে। সেক্ষেত্রে কোনো প্রকার খরচ বহন করতে হবেনা। 
          </div>
        </div>
      </div>
    </section>
  );
}
