import styles from "../assests/css/BiodataRequirement.module.css";
import React from "react";

const BiodataRequirement = () => {
  return (
    <div className={styles.requirementsContainer}>
      <div className={styles.requirementsWrapper}>
        <div className={styles.requirementsTitle}>
          <h1>জীবনসাথীতে বায়োডাটা জমা দেওয়ার নূন্যতম আবশ্যকতা</h1>
        </div>
        <div className={styles.generalReqContainer}>
          <h2>সাধারণ বায়োডাটা</h2>
        </div>
        <div className={styles.islamicReqContainer}>
          <h2>ইসলামিক বায়োডাটা</h2>
        </div>
      </div>
    </div>
  );
};

export default BiodataRequirement;
