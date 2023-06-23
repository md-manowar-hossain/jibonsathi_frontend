import * as React from "react";
import styles from "../assests/css/Hadith.module.css";

export default function Hadith() {
  return (
    <section>
      <div className={styles.CardContainer}>
        <div className={styles.card}>
          <div>
          হে যুব সম্প্রদায়! তোমাদের মধ্যে যার বিবাহ করার সামর্থ্য আছে, সে যেন বিবাহ করে। কেননা তা দৃষ্টিশক্তি সংযতকারী এবং লজ্জাস্থানের হেফাজতকারী। আর যার এ সামর্থ্য নেই, সে যেন সিয়াম পালন করে। কেননা এটি তার জন্য জৈবিক উত্তেজনা প্রশমনকারী।
          </div>
          <span>(সহীহুল বুখারী-১৯০৫)</span>
        </div>
      </div>
    </section>
  );
}
