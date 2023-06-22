import icon from "../assests/images/checkMark.svg";
import secondaryIcon from "../assests/images/hearts.svg";
import { Link } from "react-router-dom";
import styles from "../assests/css/DashboardContent.module.css";
import CvCard from "./CvCard";

export default function DashboardContent() {
  const haveCV = false;
  return (
    <div className={styles.dashboardContentArea}>
      {haveCV || <CvCard />}
      
      <div className={styles.dashboardAllContentContainer}>
        <div className={styles.dashboardContentContainer}>
          <div className={styles.dashboardContentCard}>
            <h1>10</h1>
            <h2>পয়েন্ট রয়েছে</h2>
            <div>
              প্রতিটি বায়োডাটার যোগাযোগের তথ্য দেখতে একটি পয়েন্ট প্রয়োজন
            </div>
            <div>
              <button>ফ্রিতে পয়েন্ট রিচার্জ করুন</button>
            </div>
          </div>

          <div className={styles.dashboardContentCardSecondary}>
            <h1>0</h1>
            <h3>বায়োডাটা ভিজিট সংখ্যা</h3>
            <div>আপনার বায়োডাটা যতবার ভিজিট করা হয়েছে </div>
            <div className={styles.viewHistoryContainer}>
              <div>
                <div className={styles.timeSpan}>শেষ ৩০ দিন</div>
                <div>0</div>
              </div>
              <div>
                <div className={styles.timeSpan}>শেষ ০৭ দিন</div>
                <div>0</div>
              </div>
              <div>
                <div className={styles.timeSpan}>আজকে</div>
                <div>0</div>
              </div>
            </div>
          </div>

          <div className={styles.dashboardContentCardSecondary}>
            <h1>0</h1>
            <h3>আপনার বায়োডাটা পছন্দের তালিকাভুক্ত হয়েছে</h3>
            <div>যতজন আপনার বায়োডাটা পছন্দের তালিকাভুক্ত রেখেছেন</div>
          </div>
        </div>
        <div className={styles.widthContentContainer}>
          <div className={styles.dashboardContentCardSecondaryWidth}>
            <div className={styles.secondaryIconWrapper}>
              <img src={secondaryIcon} width={40} />
            </div>
            <div>
              <h1>0</h1>
              <h3>পছন্দের তালিকা</h3>
              <div>আপনার পছন্দের তালিকাভুক্ত বায়োডাটা সমূহ</div>
            </div>
          </div>

          <div className={styles.dashboardContentCardSecondaryWidth}>
            <div className={styles.secondaryIconWrapper}>
              <img src={secondaryIcon} width={40} />
            </div>
            <div>
              <h1>0</h1>
              <h3>আমার দেখা বায়োডাটা সমূহ</h3>
              <div>আপনার দেখা সকল বায়োডাটার তালিকা</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
