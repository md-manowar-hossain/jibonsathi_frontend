import icon from "../assests/images/male.svg";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import styles from "../assests/css/pagecss/SinglePageBiodata.module.css";
import GoToTopButton from "../components/GoToTopButton";


export default function SinglePageBiodata() {
  return (
    <>
      <NavBar />
      <div className={styles.fullBiodataContainer}>
        <div className={styles.shortDescriptionContainer}>
          <div className={styles.shortDescriptionWrapper}>
            <div className={styles.shortDescription}>
              <div className={styles.shortDesHeadSec}>
                <img src={icon} width={80} alt="Male-Avatar" />
                <h3>
                  Biodata No: <span>JSM-7817</span>
                </h3>
              </div>
              <div className={styles.shortDesMainSec}>
                <div className={styles.shortBiodataItem}>
                  <label>বায়োডাটার ধরন</label>
                  <p id={styles.center}>পাত্রের বায়োডাটা</p>
                </div>
                <div className={styles.shortBiodataItem}>
                  <label>বৈবাহিক অবস্থা</label>
                  <p id={styles.center}>বিপত্নীক</p>
                </div>
                <div className={styles.shortBiodataItem}>
                  <label>জন্মসন</label>
                  <p id={styles.center}>December, 1963</p>
                </div>
                <div className={styles.shortBiodataItem}>
                  <label>উচ্চতা</label>
                  <p id={styles.center}>৫′ ৩″</p>
                </div>
                <div className={styles.shortBiodataItem}>
                  <label>গাত্রবর্ণ</label>
                  <p id={styles.center}>শ্যামলা</p>
                </div>
                <div className={styles.shortBiodataItem}>
                  <label>ওজন</label>
                  <p id={styles.center}>৬১ কেজি</p>
                </div>
                <div className={styles.shortBiodataItem}>
                  <label>রক্তের গ্রুপ</label>
                  <p id={styles.center}>জানা নেই</p>
                </div>
                <div className={styles.shortBiodataItem}>
                  <label>জাতীয়তা</label>
                  <p id={styles.center}>বাংলাদেশী</p>
                </div>
              </div>
              <div className={styles.shortListButtonContainer}>
                <button>Shortlist</button>
                <button>Copy Link</button>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.fullDescriptionContainer}>
          <div className={styles.fullDescription}>
            {/* Address Section  */}
            <div className={styles.commonInfoContainer}>
              <h3>ঠিকানা</h3>
              <div className={styles.commonInfoWrapper}>
                <div className={styles.commonInfoItem}>
                  <label>স্থায়ী ঠিকানা</label>
                  <p>
                    <span>ঢাকা উত্তর সিটি কর্পোরেশন, ঢাকা, ঢাকা, বাংলাদেশ</span>
                    <br />
                    <span>
                      <b>এলাকার নাম: &nbsp;</b>
                      সাইনবোর্ড, ডেমরা, ঢাকা।
                    </span>
                  </p>
                </div>
                <div className={styles.commonInfoItem}>
                  <label>বর্তমান ঠিকানা</label>
                  <p>
                    <span>ঢাকা উত্তর সিটি কর্পোরেশন, ঢাকা, ঢাকা, বাংলাদেশ</span>
                    <br />
                    <span>
                      <b>এলাকার নাম: &nbsp;</b>
                      সাইনবোর্ড, ডেমরা, ঢাকা।
                    </span>
                  </p>
                </div>
                <div className={styles.commonInfoItem}>
                  <label>কোথায় বড় হয়েছেন?</label>
                  <p>কুমিল্লা এবং নারায়ণগঞ্জ</p>
                </div>
              </div>
            </div>
            {/* Academic Section  */}
            <div className={styles.commonInfoContainer}>
              <h3>শিক্ষাগত যোগ্যতা</h3>
              <div className={styles.commonInfoWrapper}>
                <div className={styles.commonInfoItem}>
                  <label>আপনার শিক্ষা মাধ্যম</label>
                  <p>জেনারেল</p>
                </div>
                <div className={styles.commonInfoItem}>
                  <label>এস.এস.সি / দাখিল / সমমান পাসের সন</label>
                  <p>1975</p>
                </div>
                <div className={styles.commonInfoItem}>
                  <label>বিভাগ</label>
                  <p>ব্যবসা বিভাগ</p>
                </div>
                <div className={styles.commonInfoItem}>
                  <label>ফলাফল</label>
                  <p>A</p>
                </div>
                <div className={styles.commonInfoItem}>
                  <label>এইচ.এস.সি/আলিম/সমমান কোন বর্ষে পড়ছেন ?</label>
                  <p>SSC এর পর আর পড়াশোনা করা হয় নি</p>
                </div>
              </div>
            </div>
            {/* Family Section  */}
            <div className={styles.commonInfoContainer}>
              <h3>পারিবারিক তথ্য</h3>
              <div className={styles.commonInfoWrapper}>
                <div className={styles.commonInfoItem}>
                  <label>আপনার পিতা কি জীবিত?</label>

                  <p>না, মৃত</p>
                </div>

                <div className={styles.commonInfoItem}>
                  <label>পিতার পেশার বিবরণ</label>

                  <p>কৃষক, গৃহস্থ করতেন।</p>
                </div>

                <div className={styles.commonInfoItem}>
                  <label>আপনার মাতা কি জীবিত?</label>

                  <p>না, মৃত</p>
                </div>

                <div className={styles.commonInfoItem}>
                  <label>মাতার পেশার বিবরণ</label>

                  <p>গৃহিণী</p>
                </div>

                <div className={styles.commonInfoItem}>
                  <label>আপনার কতজন ভাই আছে?</label>

                  <p>৩</p>
                </div>

                <div className={styles.commonInfoItem}>
                  <label>ভাইদের তথ্য</label>

                  <p>
                    ভাইয়েরা সবাই আলাদা থাকে নিজেদের পরিবার নিয়ে। বড় ভাই
                    সেনাবাহিনীতে এবং ছোট ভাই বিজেবিতে এবং শেষজন ব্যবসা বাণিজ্য
                    করছে।
                  </p>
                </div>

                <div className={styles.commonInfoItem}>
                  <label>আপনার কতজন বোন আছে?</label>

                  <p>বোন নেই</p>
                </div>

                <div className={styles.commonInfoItem}>
                  <label>চাচা মামাদের পেশা</label>

                  <p>তারা বেঁচে নেই।</p>
                </div>

                <div className={styles.commonInfoItem}>
                  <label>পারিবারিক অর্থনৈতিক অবস্থা</label>

                  <p>উচ্চ মধ্যবিত্ত</p>
                </div>

                <div className={styles.commonInfoItem}>
                  <label>অর্থনৈতিক অবস্থার বর্ণনা</label>

                  <p>
                    নিজেদের ফ্ল্যাট আছে সেখানে থাকা হয়। এবং কিছু টাকা ব্যবসা
                    খাটানো আছে তা দিয়ে সংসার চলে।
                  </p>
                </div>

                <div className={styles.commonInfoItem}>
                  <label>পারিবারিক দ্বীনি পরিবেশ কেমন?</label>

                  <p>
                    দ্বীনি পরিবেশ সর্বোচ্চ। পর্দা পুশিদা ইত্যাদি বাধ্যতামূলক।
                  </p>
                </div>
              </div>
            </div>
            {/* Personal Section  */}
            <div className={styles.commonInfoContainer}>
              <h3>ব্যক্তিগত তথ্য</h3>
              <div className={styles.commonInfoWrapper}>
                <div className={styles.commonInfoItem}>
                  <label>ঘরের বাহিরে সাধারণত কি ধরণের পোষাক পরেন?</label>

                  <p>জুব্বা ও পাঞ্চাবী</p>
                </div>

                <div className={styles.commonInfoItem}>
                  <label>সুন্নতি দাড়ি আছে কি না? কবে থেকে রেখেছেন?</label>

                  <p>অবশ্যই রয়েছে এবং আগ থেকেই রয়েছে</p>
                </div>

                <div className={styles.commonInfoItem}>
                  <label>টাখনুর উপরে কাপড় পরেন?</label>

                  <p>জি আলহামদুলিল্লাহ</p>
                </div>

                <div className={styles.commonInfoItem}>
                  <label>
                    প্রতিদিন পাঁচ ওয়াক্ত নামাজ পড়েন কি? কবে থেকে পড়ছেন?
                  </label>

                  <p>জি আলহামদুলিললাহ। অনেক আগ থেকেই</p>
                </div>

                <div className={styles.commonInfoItem}>
                  <label>সাধারণত সপ্তাহে কত ওয়াক্ত নামায আপনার কাযা হয়?</label>

                  <p>হয় না</p>
                </div>

                <div className={styles.commonInfoItem}>
                  <label>মাহরাম/নন-মাহরাম মেনে চলেন কি?</label>

                  <p>জি</p>
                </div>

                <div className={styles.commonInfoItem}>
                  <label>শুদ্ধভাবে কুরআন তিলওয়াত করতে পারেন?</label>

                  <p>৭০ ভাগ পারি</p>
                </div>

                <div className={styles.commonInfoItem}>
                  <label>কোন ফিকহ অনুসরণ করেন?</label>

                  <p>হানাফি</p>
                </div>

                <div className={styles.commonInfoItem}>
                  <label>
                    নাটক / সিনেমা / সিরিয়াল / গান এসব দেখেন বা শুনেন?
                  </label>

                  <p>জি না</p>
                </div>

                <div className={styles.commonInfoItem}>
                  <label>আপনার মানসিক বা শারীরিক কোনো রোগ আছে?</label>

                  <p>ডায়াবেটিস</p>
                </div>

                <div className={styles.commonInfoItem}>
                  <label>দ্বীনের কোন বিশেষ মেহনতে যুক্ত আছেন?</label>

                  <p>জি না</p>
                </div>

                <div className={styles.commonInfoItem}>
                  <label>মাজার সম্পর্কে আপনার ধারণা বা বিশ্বাস কি?</label>

                  <p>জিয়ারত ছাড়া অন্যান্য কাজ পরিত্যাজ্য ও অপ্রয়োজনীয়</p>
                </div>

                <div className={styles.commonInfoItem}>
                  <label>
                    আপনার পড়া হয়েছে এমন অন্তত ৩ টি ইসলামি বই এর নাম লিখুন
                  </label>

                  <p>
                    ইসলামকে জানতে হলে, বাইতুলল্লহার মুসাফির, আল কাউসার ও
                    অন্যান্য ইসলামী পত্র পত্রিকা।
                  </p>
                </div>

                <div className={styles.commonInfoItem}>
                  <label>আপনার পছন্দের অন্তত ৩ জন আলেমের নাম লিখুন</label>

                  <p>
                    আবু তাহের মিসবাহ হাফিজাহুল্লাহ, আব্দুল মালেক হাফিজাহুল্লাহ
                  </p>
                </div>

                <div className={styles.commonInfoItem}>
                  <label>নিজের সম্পর্কে কিছু লিখুন</label>

                  <p>
                    আমি একজন পরিশ্রমী সৎ ও দ্বীনদার জীবন যাপন করেছি এবং করতে
                    চাই। আমি স্ত্রী নিয়ে বাহিরে যাওয়া পছন্দ করিনা। স্ত্রী বাহিরে
                    দোকানে মার্কেটে যাওয়া পছন্দ করি না। অযথা কথা বার্তা গিবত
                    শেকায়েত পছন্দ করি না। অবসর সময়ে ইসলামী বই পড়া, কোরআন
                    তেলাওয়াত করা বা শোনা পছন্দ করি। রাতে তাড়াতাড়ি ঘুমাতে এবং
                    ফজরের আগে তাড়াতাড়ি উঠতে পছন্দ করি। আমি বিনম্র সরল অনুগত
                    স্বামীভক্ত সেবাপরায়ন একজন স্ত্রী অন্বেষণ করছি। আমি অতিরিক্ত
                    কোথাও বেড়াতে যাওয়া পছন্দ করি না। ঘর এবং মসজিদে বেশী থাকতে
                    পছন্দ করি। সবকাজ সময়মতো করতে পছন্দ করি। 
                  </p>
                </div>
              </div>
            </div>
            {/* Occupational Section  */}
            <div className={styles.commonInfoContainer}>
              <h3>পেশাগত তথ্য</h3>
              <div className={styles.commonInfoWrapper}>
                <div className={styles.commonInfoItem}>
                  <label>পেশা</label>
                  <p>ব্যবসায়ী</p>
                </div>
                <div className={styles.commonInfoItem}>
                  <label>পেশার বিস্তারিত বিবরণ</label>
                  <p>
                    আমি এবজন হুশিয়ারি ব্যবসায়ী ছিলাম। নারায়ণগঞ্জ নয়ামাটি আমার
                    কারখানা ছিলো। এই ব্যবসা পরিচালনা করে আমি আমার ছেলে মেয়েদের
                    লেখাপড়া সব করিয়েছি।
                  </p>
                </div>
                <div className={styles.commonInfoItem}>
                  <label>মাসিক আয়</label>
                  <p>২০০০০</p>
                </div>
              </div>
            </div>
            {/* Marrital Section */}
            <div className={styles.commonInfoContainer}>
              <h3>বিবাহ সম্পর্কিত তথ্য</h3>
              <div className={styles.commonInfoWrapper}>
                <div className={styles.commonInfoItem}>
                  <label>আপনার স্ত্রী কবে, কিভাবে মারা গিয়েছিলেন?</label>
                  <p>
                    অসুস্থ ছিলো দীর্ঘদিন। এক পর্যায়ে চূড়ান্ত একটা সময়ের মধ্যদিয়ে
                    তার জীবন অধ্যায়ের ইতি ঘটে। তিন ছেলে দুই মেয়ে বড় ছেলে বয়স ৩৫
                    মেজ ছেলে ৩২ বড় মেয়ে ৩০ ছোট মেয়ে ২৭ ছোট ছেলে ২৩
                  </p>
                </div>
                <div className={styles.commonInfoItem}>
                  <label>অভিভাবক আপনার বিয়েতে রাজি কি না?</label>
                  <p>জি</p>
                </div>
                <div className={styles.commonInfoItem}>
                  <label>বিয়ের পর স্ত্রীকে পর্দায় রাখতে পারবেন?</label>

                  <p>জি</p>
                </div>
                <div className={styles.commonInfoItem}>
                  <label>বিয়ের পর স্ত্রীকে পড়াশোনা করতে দিতে চান?</label>
                  <p>জি না</p>
                </div>
                <div className={styles.commonInfoItem}>
                  <label>বিয়ের পর স্ত্রীকে চাকরী করতে দিতে চান?</label>
                  <p>জি না</p>
                </div>
                <div className={styles.commonInfoItem}>
                  <label>বিয়ের পর স্ত্রীকে কোথায় নিয়ে থাকবেন?</label>
                  <p>আমার বাসায় সাইনবোর্ড ডেমরা ঢাকা</p>
                </div>
                <div className={styles.commonInfoItem}>
                  <label>
                    আপনি বা আপনার পরিবার পাত্রীপক্ষের কাছে কোনো উপহার আশা করবেন
                    কি না?
                  </label>
                  <p>জি না</p>
                </div>
                <div className={styles.commonInfoItem}>
                  <label>কেন বিয়ে করছেন? বিয়ে সম্পর্কে আপনার ধারণা কি?</label>
                  <p>
                    আমার শেষ জীবনে একজন সেবাপরায়ন স্ত্রী দরকার। যে আমার একাকিত্ব
                    দূর করবে। সেবা করবে। আর ইসলাম একপুরুষকে বিবাহিত অবস্থায়
                    পছন্দ করে।
                  </p>
                </div>
              </div>
            </div>
            {/* Desire Life Partner Section  */}
            <div className={styles.commonInfoContainer}>
              <h3>প্রত্যাশিত জীবনসঙ্গী</h3>
              <div className={styles.commonInfoWrapper}>
                <div className={styles.commonInfoItem}>
                  <label>বয়স</label>
                  <p>40-70</p>
                </div>
                <div className={styles.commonInfoItem}>
                  <label>গাত্রবর্ণ</label>
                  <p>শ্যামলা, উজ্জল শ্যামলা, ফর্সা</p>
                </div>
                <div className={styles.commonInfoItem}>
                  <label>উচ্চতা</label>
                  <p>৫ ফিট</p>
                </div>
                <div className={styles.commonInfoItem}>
                  <label>শিক্ষাগত যোগ্যতা</label>
                  <p>কোরআন ও বাংলা পড়তে পারা</p>
                </div>
                <div className={styles.commonInfoItem}>
                  <label>জেলা</label>
                  <p>যেকোন অঞ্চলের কিন্তু গ্রাম্যভাবমুক্ত</p>
                </div>
                <div className={styles.commonInfoItem}>
                  <label>বৈবাহিক অবস্থা</label>
                  <p>ডিভোর্সড, বিধবা</p>
                </div>
                <div className={styles.commonInfoItem}>
                  <label>পেশা</label>
                  <p>গৃহিণী</p>
                </div>
                <div className={styles.commonInfoItem}>
                  <label>অর্থনৈতিক অবস্থা</label>
                  <p>মধ্যবিত্ত</p>
                </div>
                <div className={styles.commonInfoItem}>
                  <label>
                    জীবনসঙ্গীর যেসব বৈশিষ্ট্য বা গুণাবলী প্রত্যাশা করেন
                  </label>
                  <p>
                    সহীভাবে কোরআন পড়তে পারা। কথা আঞ্চলকিতা মুক্ত হওয়া। সরল সহজ
                    উদার । অন্যের বিষয় উপেক্ষা করা। অবসর সময়ে যিকির আযকার করা।
                    স্বামীর প্রতি যত্নবান হওয়া। কর্মঠ হওয়া। সংসারী হওয়া। ভালো
                    গৃহিণী হওয়া। স্বামীকে রেখে কোথাও যেতে না চাওয়া।
                  </p>
                </div>
              </div>
            </div>
            {/* Commitment Section  */}
            <div className={styles.commonInfoContainer}>
              <h3>অঙ্গীকারনামা</h3>
              <div className={styles.commonInfoWrapper}>
                <div className={styles.commonInfoItem}>
                  <label>
                    OrdhekDeen.com ওয়েবসাইটে বায়োডাটা জমা দিচ্ছেন, তা আপনার
                    অভিভাবক জানেন?
                  </label>
                  <p>হ্যাঁ</p>
                </div>
                <div className={styles.commonInfoItem}>
                  <label>
                    আল্লাহ&#039;র শপথ করে সাক্ষ্য দিন, যে তথ্যগুলো দিয়েছেন সব
                    সত্য?
                  </label>
                  <p>হ্যাঁ</p>
                </div>
                <div className={styles.commonInfoItem}>
                  <label>
                    কোনো মিথ্যা তথ্য প্রদান করলে দুনিয়াবী আইনগত এবং আখিরাতের
                    দায়ভার OrdhekDeen.com কর্তৃপক্ষ নিবে না। আপনি কি সম্মত?
                  </label>
                  <p>হ্যাঁ</p>
                </div>
              </div>
            </div>
            {/* Contact Info Section  */}
            <div className={styles.commonInfoContainer}>
              <h3>যোগাযোগ</h3>
              <div className={styles.contactInfoSection}>
                <div>
                  সতর্কতা - বিয়ের সিদ্ধান্ত নেয়ার পূর্বে স্থানীয়ভাবে খোঁজ নিয়ে
                  বায়োডাটার সমস্ত তথ্য যাচাই করবেন।
                </div>
                <span>
                  এই বায়োডাটার অভিভাবকের যোগাযোগের তথ্য দেখতে আপনার ১টি পয়েন্ট
                  খরচ হবে।
                </span>
                <div >
                  <button >যোগাযোগের তথ্য দেখুন</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <GoToTopButton/>
      <Footer />
    </>
  );
}
