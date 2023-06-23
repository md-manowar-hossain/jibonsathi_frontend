import React, { useState, useEffect } from "react";
import GoToTop from "../assests/images/gototop.svg"
import styles from "../assests/css/GoToTopButton.module.css"; 

const GoToTopButton = () => {
  const [isScroll, setScroll] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Attach scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", ()=> {
      if (window.scrollY > 200) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  }, []);

  return (
   <>
    {isScroll && ( <button
      className={styles.goToTopButton}
      onClick={scrollToTop}
    >
      <img src={GoToTop} width={30} alt="Icon"/>
    </button>)  
    }
   </>
   
  );
};

export default GoToTopButton;
