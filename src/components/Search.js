import * as React from "react";
import styles from "../assests/css/Search.module.css";
import { useNavigate } from "react-router-dom";

export default function Search() {
  const nevigate = useNavigate();
  const submit = () => {
    nevigate("/allbiodata");
  };
  return (
    <section>
      <div className={styles.CardContainer}>
        <div className={styles.card}>
          <div className={styles.selectWrapper}>
            <div className={styles.label}>আমি খুঁজছি</div>
            <select>
              <option value="no_selected">সকল</option>
              <option value="3">সাধারণ বায়োডাটা</option>
              <option value="4">ইসলামিক বায়োডাটা</option>
            </select>
          </div>
          <div className={styles.selectWrapper}>
            <div className={styles.label}>বায়োডাটার ধরন</div>
            <select>
              <option value="no_selected">সকল</option>
              <option value="3">পাত্রের বায়োডাটা</option>
              <option value="4">পাত্রীর বায়োডাটা</option>
            </select>
          </div>
          <div className={styles.selectWrapper}>
            <div className={styles.label}>বৈবাহিক অবস্থা</div>
            <select>
              <option value="no_selected">সকল</option>
              <option value="5">অবিবাহিত</option>
              <option value="6">বিবাহিত</option>
              <option value="7">ডিভোর্সড</option>
              <option value="8">বিধবা</option>
              <option value="9">বিপত্নীক</option>
            </select>
          </div>
          <div className={styles.selectWrapper}>
            <div className={styles.label}>স্থায়ী ঠিকানা</div>
            <select>
              <option value="no_selected"> ঠিকানা নির্বাচন করুন</option>
              <option value="3">বাংলাদেশ</option>
            </select>
          </div>
          <div className={styles.selectWrapper}>
            <div className={styles.label}>বর্তমান ঠিকানা</div>
            <select>
              <option value="no_selected"> ঠিকানা নির্বাচন করুন</option>
              <option value="3">বাংলাদেশ</option>
            </select>
          </div>
          <div className={styles.submit}>
            <button onClick={submit}>
              {/* <i class="fa fa-search"></i>&nbsp;  */}খুঁজুন
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
