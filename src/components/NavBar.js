import Logo from "../assests/images/tweeter.svg";
import Bars from "../assests/images/menuBar.svg";
import Man from "../assests/images/whiteman.svg";
import Close from "../assests/images/close.svg";
import styles from "../assests/css/Nav.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import ManuBar from "../components/ManuBar";
import { useContext } from "react";
import { AuthContext } from "./AuthContext";

export default function NavBar() {
  const { isLoggedIn } = useContext(AuthContext);

  console.log(isLoggedIn);

  const [isClicked, setClicked] = useState(false);
  const [isToggled, setToggled] = useState(false);

  // const [isVisible, setIsVisible] = useState(false);
  // const componentRef = useRef(null);

  // useEffect(() => {
  //   const handleOutsideClick = (event) => {
  //     if (
  //       componentRef.current &&
  //       !componentRef.current.contains(event.target)
  //     ) {
  //       setIsVisible(false);
  //     }
  //   };

  //   document.addEventListener("click", handleOutsideClick);
  //   return () => {
  //     document.removeEventListener("click", handleOutsideClick);
  //   };
  // }, []);

  // const visiblityhandler = () => {
  //   setIsVisible(!isVisible);
  // };

  
  const navigate = useNavigate();

  const show = () => {
    setToggled(!isToggled);
  };

  const handleClick = () => {
    setClicked(!isClicked);
  };
  const login = () => {
    navigate("/login");
  };
  return (
    <section>
      <nav className={`${styles.NavContainer} ${styles.gradient}`}>
        <div className={styles.barBtnContainer}>
          <button onClick={handleClick}>
            <img
              src={isClicked ? Close : Bars}
              width={30}
              height={30}
              alt="Icon"
            />
          </button>
        </div>
        <div className={styles.logoContainer}>
          <img src={Logo} className={styles.logo} height={30} alt="Icon" />
        </div>
        <div
          className={isClicked ? `${styles.nav} ${styles.toggle}` : styles.nav}
        >
          <NavLink
            to="/"
            className={(navInfo) =>
              navInfo.isActive
                ? `${styles.navLink} ${styles.active}`
                : styles.navLink
            }
          >
            হোম
          </NavLink>
          <NavLink
            to="/about-us"
            className={(navInfo) =>
              navInfo.isActive
                ? `${styles.navLink} ${styles.active}`
                : styles.navLink
            }
          >
            আমাদের সম্পর্কে
          </NavLink>
          <NavLink
            to="/faq"
            className={(navInfo) =>
              navInfo.isActive
                ? `${styles.navLink} ${styles.active}`
                : styles.navLink
            }
          >
            জিজ্ঞাসা
          </NavLink>
          <NavLink
            to="/instructions"
            className={(navInfo) =>
              navInfo.isActive
                ? `${styles.navLink} ${styles.active}`
                : styles.navLink
            }
          >
            নির্দেশনা
          </NavLink>
          <NavLink
            to="/contact-us"
            className={(navInfo) =>
              navInfo.isActive
                ? `${styles.navLink} ${styles.active}`
                : styles.navLink
            }
          >
            যোগাযোগ
          </NavLink>
        </div>
        <div className={styles.logInContainer}>
          {isLoggedIn ? (
            <>
              <img onClick={show} src={Man} width={30} alt="Man" />
              <ManuBar show={isToggled} />

            </>
          ) : (
            <button onClick={login}>লগইন</button>
          )}
        </div>
      </nav>
    </section>
  );
}
