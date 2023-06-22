import * as React from "react";
import styles from "../assests/css/Limitation.module.css";
import { Link } from "react-router-dom";

export default function Limitation() {
  return (
    <section>
      <div className={styles.CardContainer}>
        <div className={styles.card}>
          <div>
            <span>বি. দ্রঃ </span>
            ব্যবহারকারীর তথ্যের প্রাইভেসির বিষয়টি বিবেচনা করে এই মুহূর্তে আমরা
            প্রত্যেক ব্যবহারকারীর জন্য প্রতি মাসে সর্বোচ্চ ১০ টি সিভি দেখার
            অনুমতি দিচ্ছি। যদি কারো একান্তই আরো বেশি সিভি দেখার প্রয়োজন হয়,
            তাহলে সরাসরি এডমিনের সাথে{" "}
            <Link to={"mailto:admin@gmail.com"}>যোগাযোগ</Link> করুণ। এজন্য
            সবাইকে বিনা প্রয়োজনে অন্যের সিভি দেখা এবং কাউকে বিরক্ত না করার জন্য
            বিশেষভাবে অনুরোধ করা হলো।
          </div>
        </div>
      </div>
    </section>
  );
}
