import styles from "../assests/css/HeadTitle.module.css";

export default function HeadTitle() {
  return (
    <div className={styles.CardContainer}>
      <h1>বায়োডাটা সমূহ</h1>
      <div>180 টি বায়োডাটা পাওয়া গেছে</div>
    </div>
  );
}
