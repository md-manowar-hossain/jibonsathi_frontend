import { useNavigate } from "react-router-dom";
import styles from "../assests/css/BiodataIntro.module.css";
import icon from "../assests/images/male.svg";

export default function BiodataIntro({ records, loading }) {
  const navigate = useNavigate();
  const viewDetail = () => {
    navigate("/biodata");
  };

  return (
    <>
    {records.map((data, i) => (

    <div key={i} className={styles.card}>
      <div className={styles.top}>
        <div className={styles.iconContainer}>
          <img src={icon} width={60} />
        </div>
        <div>বায়োডাটা নং</div>
        <div>{data.id}</div>
      </div>
      <div className={styles.middle}>
        <div className={styles.dataContainer}>
          <div className={`${styles.left} ${styles.borderTop}`}>জন্মসাল</div>
          <div className={`${styles.right} ${styles.borderTop}`}>June 25, 1998</div>
        </div>
        <div className={styles.dataContainer}>
          <div className={styles.left}>উচ্চতা</div>
          <div className={styles.right}>5' 6"</div>
        </div>
        <div className={styles.dataContainer}>
          <div className={styles.left}>ওজন</div>
          <div className={styles.right}>60 KG</div>
        </div>
        <div className={styles.dataContainer}>
          <div className={styles.left}>পেশা</div>
          <div className={styles.right}>শিক্ষক</div>
        </div>
      </div>
      <div className={styles.bottom}>
        <button onClick={viewDetail}>সম্পূর্ণ বায়োডাটা দেখুন</button>
      </div>
    </div>

 ))}
</>

  );
}
