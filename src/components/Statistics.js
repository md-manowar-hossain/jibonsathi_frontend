import * as React from "react";
import couple from "../assests/images/couple.svg";
import styles from "../assests/css/Statistics.module.css";

export default function Statistics() {

  return (
    <section>
      <div className={styles.CardContainer}>
        <div className={styles.card}>
          <div className={styles.title}>
            <div>
              <span>জীবনসাথীতে</span> সেবা গ্রহীতার পরিসংখ্যান
            </div>
          </div>
          <div className={styles.statisticsContainer}>
            <div className={styles.statistics}>
              <div className={styles.iconContainer}>
                <img src={couple} width={90}/>
              </div>
              <div>সর্বমোট পাত্র-পাত্রীর বায়োডাটা</div>
              <div>4790</div>
            </div>
            <div className={styles.statistics}>
              <div className={styles.iconContainer}>
                <img src={couple} width={90}/>
              </div>
              <div>সর্বমোট পাত্রের বায়োডাটা</div>
              <div>2180</div>
            </div>
            <div className={styles.statistics}>
              <div className={styles.iconContainer}>
                <img src={couple} width={90}/>
              </div>
              <div>সর্বমোট পাত্রীর বায়োডাটা</div>
              <div>2610</div>
            </div>
            <div className={styles.statistics}>
              <div className={styles.iconContainer}>
                <img src={couple} width={90}/>
              </div>
              <div>সর্বমোট বিবাহ সম্পন্ন</div>
              <div>1150</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
