import { useState } from "react";
// import Data from "../assests/MOCK_DATA_QUESTION.json";
import styles from "../assests/css/FaqAccordion.module.css";
import { Link } from "react-router-dom";

export default function FaqAccordion() {
  const [selected, setSelecked] = useState(null);

  // const data = Data.slice(0, 18);
  const toggle = (index) => {
    if (selected === index) {
      setSelecked(null);
    } else {
      setSelecked(index);
    }
  };

  const data = [
    {
      id: 1,
      question: "১. জীবনসাথী কী? এটি কিভাবে কাজ করে?",
      answer: (
        <div>
          উত্তরঃ এটি একটি বাংলাদেশী মুসলিম ম্যাটরিমনি ওয়েবসাইট। এখানে উপজেলা
          ভিত্তিক মুসলিম পাত্রপাত্রীর বায়োডাটা খোঁজা ও অভিভাবকের সাথে যোগাযোগ
          করা যায়। একই সাথে পাত্র-পাত্রী চাইলে ওয়েবসাইটে বায়োডাটা তৈরি করে জমা
          দিতে পারে।
        </div>
      ),
    },
    {
      id: 2,
      question: "২. বায়োডাটা জমা দিতে কি কোনো টাকা দিতে হবে?",
      answer: (
        <div>
          উত্তরঃ না, কোনো টাকা দিতে হবে না। জীবনসাথীতে সিভি জমা দেওয়া এবং অন্যের
          সিভি দেখা সম্পূর্ণ ফ্রি।
        </div>
      ),
    },
    {
      id: 3,
      question: "৩. এই ওয়েবসাইট কি সবার জন্য উন্মুক্ত?",
      answer: (
        <div>
          উত্তরঃ না, এই ওয়েবসাইট সবার জন্য নয়, এই ওয়েবসাইট শুধুমাত্র বাংলাদেশী
          সকল মুসলিমদের জন্য।
        </div>
      ),
    },
    {
      id: 4,
      question: "৪. বায়োডাটা তৈরি করার কোনো বিশেষ শর্ত আছে?",
      answer: (
        <div>
          উত্তরঃ সাধারণ ক্যাটেগরিতে বায়োডাটা তৈরি করার ক্ষেত্রে অভিভাবকের অনুমতি
          ব্যতীত বিশেষ কোনো শর্ত নেই। তবে, ইসলামিক ক্যাটেগরিতে বায়োডাটা জমা
          দেওয়ার জন্য নূন্যতম আবশ্যকতা নিম্নরূপ। <br/><br/> ১. পাঁচ ওয়াক্ত নামাযী হতে হবে। <br/>
          ২. পুরুষের ক্ষেতে ওয়াজিব দাড়ি সুন্নতি পদ্ধতিতে বড় থাকতে হবে এবং টাখনুর
          উপর কাপড় পরতে হবে। <br/> ৩. নারীদের ক্ষেতে “নিকাব” সহ ফরজ পর্দানশীন হতে হবে। <br/>
          ৪. অবশ্যই অভিভাবকের অনুমতি নিতে হবে।
        </div>
      ),
    },
    {
      id: 5,
      question:
        "৫. জীবনসাথীতে বায়োডাটা জমা দিলে আমার তথ্য কতটুকু গোপন থাকবে? কতটুকু প্রকাশিত হবে?",
      answer: (
        <div>
          উত্তরঃ আপনার বায়োডাটা এপ্রুভ করা হলে আপনার ও আপনার পিতা-মাতার নাম,
          মোবাইল নাম্বার এবং ইমেইল এড্রেস গোপন রাখা হবে। বাকি সকল তথ্য সাধারণ
          ইউজাররা দেখতে পারবে। অর্থাৎ সাধারণ ইউজাররা আপনার বায়োডাটা পড়তে পারবে
          কিন্ত আপনার পরিচয় জানতে পারবে না। যদি কেউ বিয়ের জন্য যোগাযোগ করতে
          আগ্রহী হয় তাহলে পয়েন্ট ব্যবহার করে আপনার নাম, অভিভাবকের মোবাইল নাম্বার
          ও ইমেইল এড্রেস দেখতে পারবে এবং বিয়ের জন্য যোগাযোগ করতে পারবে।
        </div>
      ),
    },
    {
      id: 6,
      question: "৬. আমার বায়োডাটা এপ্রুভ হয় নি কেন?",
      answer: (
        <div>
          উত্তরঃ বিভিন্ন কারণে বায়োডাটা এপ্রুভ করা হয় না। তার মধ্যে কয়েকটি কারণ
          উল্লেখ করা হলো।<br/><br/> ১/ যদি অভিভাবককে না জানিয়ে আমাদের ওয়েবসাইটে বায়োডাটা
          জমা দেয়া হয়। <br/> ২/ অভিভাবকের নাম্বারের ঘরে নিজের নাম্বার লিখে রাখলে। <br/> ৩/
          পাঁচ ওয়াক্ত নামাযী না হলে। <br/> ৪/ পুরুষদের ক্ষেত্রে, ওয়াজিব দাঁড়ি সুন্নতি
          পদ্ধতীতে বড় না থাকলে। (প্রাকৃতিক কারণে যাদের দাঁড়ি বড় হয় না তারা
          ব্যতীত।) <br/> ৫/ পুরুষদের ক্ষেত্রে, টাখনুর উপর কাপড় না পরলে। <br/> ৬/ নারীদের
          ক্ষেত্রে, নিকাব সহ ফরজ পর্দা না করলে। <br/> ৭/ বায়োডাটাতে কোনো মিথ্যা তথ্য
          দিয়ে থাকলে। <br/> ৮/ বিশেষ প্রশ্নের উত্তর স্পষ্ট ভাবে না দিয়ে অন্য ভাবে
          দিলে। যেমনঃ অনেকেই শুধু “আলহামদুলিল্লাহ” বা “হুম” ইত্যাদি লিখেন, অথচ
          এটি দ্বারা হ্যাঁ/না স্পষ্টভাবে বোঝা যায় না। <br/> ৯/ ইসলামের সাথে সাংঘর্ষিক
          কোনো কিছু লিখলে।
        </div>
      ),
    },
    {
      id: 7,
      question:
        "৭. কিছু তথ্য সঠিকভাবে না দেয়ার কারণে আমার বায়োডাটা এপ্রুভ হয় নি, আমি কি আবার বায়োডাটা জমা দিতে পারবো?",
      answer: (
        <div>
          উত্তরঃ হ্যাঁ, পারবেন। যে ঘরে ভুল তথ্য দেয়ার জন্য আপনার বায়োডাটা এপ্রুভ
          করা হয়নি, সেই ঘরে সঠিক তথ্য দিয়ে বায়োডাটা সাবমিট করবেন তাহলে এপ্রুভ
          করা হবে ইন শা আল্লাহ। তবে জীবনসাথীর রুলস ফলো না করার কারণে যদি
          বায়োডাটা এপ্রুভ না হয় তাহলে আর এপ্রুভ হবে না।{" "}
        </div>
      ),
    },
    {
      id: 8,
      question:
        "৮. আমি ৫ ওয়াক্ত নামাযী, কিন্ত আমি সুন্নতী দাঁড়ি রাখি নি, আমি কি ইসলামিক ক্যাটেগরিতে বায়োডাটা আপলোড করতে পারবো?",
      answer: (
        <div>
          উত্তরঃ আপনার বায়োডাটা এপ্রুভ করা হবে না। তবে, আপনি সাধবরণ ক্যাটেগরিতে
          বায়োডাটা জমা দিতে পারবেন। যাদের বর্তমানে ওয়াজিব দাঁড়ি আছে শুধুমাত্র
          তাদের বায়োডাটা এপ্রুভ করা হবে। (প্রাকৃতিক কারণে যাদের দাঁড়ি বড় হয় না
          তারা ব্যতীত।)
        </div>
      ),
    },
    {
      id: 9,
      question:
        "৯. আমার একটি বায়োডাটা পছন্দ হয়েছে, আমি কি সরাসরি সেই পাত্র/পাত্রীর সাথে যোগাযোগ করতে পারবো?",
      answer: (
        <div>
          উত্তরঃ না। জীবনসাথী সরাসরি পাত্র/পাত্রীর মাঝে যোগাযোগ করাকে সমর্থন করে
          না। শুধুমাত্র পাত্র/পাত্রীর অভিভাবকের সাথেই যোগাযোগ করতে পারবেন।{" "}
        </div>
      ),
    },
    {
      id: 10,
      question:
        "১০. আমি ৫ ওয়াক্ত নামাযী, আমি বোরকা ও হিজাব পরি তবে নিকাব পরি না। আমি কি ইসলামিক ক্যাটেগরিতে বায়োডাটা আপলোড করতে পারবো?",
      answer: (
        <div>
          উত্তরঃ আপনার বায়োডাটা এপ্রুভ করা হবে না। তবে, আপনি সাধবরণ ক্যাটেগরিতে
          বায়োডাটা জমা দিতে পারবেন। যারা নিকাব সহ ফরজ পর্দানশীন শুধুমাত্র তাদের
          বায়োডাটা এপ্রুভ করা হয়।
        </div>
      ),
    },
    {
      id: 11,
      question:
        "১১. আমার অভিভাবক আমার বিয়েতে রাজি নয়, আমি কি বায়োডাটা জমা দিতে পারবো?",
      answer: (
        <div>
          উত্তরঃ আমাদের ওয়েবসাইটে বায়োডাটা তৈরি করতে হলে অবশ্যই পাত্র/পাত্রীর
          অভিভাবকের অনুমতি নিয়ে জমা দিতে হবে। অন্যথায় বায়োডাটা এপ্রুভ করা হয় না।
          তবে, শুধু পুরুষদের ক্ষেত্র যার মা-বাবা বা আইনত অভিভাবক নেই, তিনি জমা
          দিতে পারবেন।
        </div>
      ),
    },
    {
      id: 12,
      question:
        "১২. আমি একজন ছাত্র, আমার এখনো কোনো আয় নেই, আমি কি বায়োডাটা আপলোড করতে পারবো?",
      answer: (
        <div>
          উত্তরঃ হ্যাঁ, পারবেন। তবে অবশ্যই আপনার অভিভাবকের অনুমতি নিয়ে বায়োডাটা
          তৈরি করতে হবে।
        </div>
      ),
    },
    {
      id: 13,
      question:
        "১৩. বায়োডাটা জমা দেয়ার পর বিয়ে হয়ে গেলে বা অন্য কারণে বায়োডাটা ডিলিট করতে পারবো?",
      answer: (
        <div>
          উত্তরঃ হ্যাঁ, আপনার যখন ইচ্ছা তখন বায়োডাটা ডিলিট করতে পারবেন অথবা
          সাময়িক সময়ের জন্য বন্ধ রাখতে পবরবেন।
        </div>
      ),
    },
    {
      id: 14,
      question: "১৪. একজনের বায়োডাটা আরেকজন তৈরি করতে পারবে?",
      answer: (
        <div>
          উত্তরঃ আমাদের বায়োডাটা ফর্মে অনেক ব্যক্তিগত প্রশ্ন রয়েছে, যেগুলোর
          উত্তর একমাত্র পাত্র/পাত্রী নিজেই ভাল জানেন। অন্য কেউ যদি বায়োডাটা তৈরি
          করে দেয়, তাহলে সেই প্রশ্নগুলোর উত্তর বাহ্যিকভাবে সত্য হলেও কিছু ত্রুটি
          থেকে যেতে পারে। এজন্য যিনি পাত্র/পাত্রী তাকেই লিখতে হবে অথবা তাকে সাথে
          নিয়ে সঠিক তথ্য জেনে বায়োডাটা তৈরি করতে হবে, এমন শর্ত আবশ্যক করা হয়েছে।
        </div>
      ),
    },
    {
      id: 15,
      question:
        "১৫. আমি ইন্টারনেট ব্যবহারে দক্ষ নই। আমি কিভাবে বায়োডাটা তৈরি করবো?",
      answer: (
        <div>
          উত্তরঃ এক্ষেত্রে ইন্টারনেট ব্যবহারে দক্ষ এমন ব্যক্তিকে পাশে বসিয়ে আপনি
          বায়োডাটায় উল্লেখিত প্রশ্নগুলোর উত্তর বলে দিবেন। ঐ ব্যক্তি আপনার
          বায়োডাটার তথ্যগুলো টাইপ করে আপনার বায়োডাটা তৈরিতে সাহায্য করবে।
        </div>
      ),
    },
    {
      id: 16,
      question:
        "১৬. জীবনসাথীর মাধ্যমে বিয়ে করলে বিবাহ পরবর্তী কোনো সার্ভিস চার্জ পরিশোধ করতে হয়?",
      answer: (
        <div>
          উত্তরঃ না। জীবনসাথীর মাধ্যমে বিয়ে করলে বিবাহের পূর্বে বা পরে কোনো
          প্রকার চার্জ পরিশোধ করতে হবে না।
        </div>
      ),
    },
    {
      id: 17,
      question:
        "১৭. এখন জীবনসাথী সম্পূর্ণ ফ্রি থাকলেও পরবর্তীতে কোনো চার্জ ধার্য করার পরিকল্পনা আছে কিনা?",
      answer: (
        <div>
          উত্তরঃ অবশ্যই না। জীবনসাথী একটি অলাভজনক প্লাটফর্ম। এটি ডোনেশনের দ্বারা
          পরিচালিত হয়। তাই, জীবনসাথীতে <Link to={"/donate"}> ডোনেশন করুন </Link>, ইসলাম ও মানবতার কল্যানে
          অবদান রাখুন।
        </div>
      ),
    },
    {
      id: 18,
      question: "১৮. আমি বাংলাদেশী নই, আমি কি বায়োডাটা জমা দিতে পারবো?",
      answer: (
        <div>
          উত্তরঃ না, আপাতত জীবনসাথী শুধুমাত্র বাংলাদেশে কার্যক্রম পরিচালনা করছে। 
          অন্য কোনো দেশের নাগরিক জীবনসাথীর সেবা গ্রহণ করতে পারছে না।
        </div>
      ),
    },
  ];

  return (
    <>
      <div className={styles.faqContainer}>
        <div className={styles.faqWrapper}>
          {data.map((data, index) => (
            <div key={index} className={styles.faq}>
              <div onClick={() => toggle(index)} className={styles.faqTitle}>
                <h3>
                  {/* <span>{data.id}. </span> */}
                  {data.question}
                </h3>
                <span>{selected === index ? "-" : "+"}</span>
              </div>

              <div
                className={
                  selected === index
                    ? `${styles.FaqAnswerWrapper} ${styles.show}`
                    : styles.FaqAnswerWrapper
                }
              >
                <div className={styles.answer}>{data.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
