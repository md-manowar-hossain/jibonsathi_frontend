import { Link } from "react-router-dom";
import styles from "../assests/css/Donation.module.css";
import React from "react";

export const Donation = () => {
  return (
    <section>
      <div className={styles.donationSectionContainer}>
        <div>
            জীবনসাথী একটি অলাভজনক প্লাটফর্ম। এটি সম্পূর্ণ দানের দ্বারা পরিচালিত হয়। তাই, জীবনসাথীতে ডোনেশন করে এই প্লাটফর্মের উন্নয়নে সহযোগিতা করুন এবং বাংলাদেশী সকল মুসলিমদের কল্যানে অবদান রাখুন। 
        </div>
        <div>
          <Link to={"/donate"}>ডোনেশন করুন</Link>
        </div>
      </div>
    </section>
  );
};
