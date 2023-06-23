import { Link, NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import Avater from "../assests/images/contact.svg";
import icon from "../assests/images/checkMark.svg";
import styles from "../assests/css/ManuBar.module.css";
import { useContext } from "react";
import { AuthContext } from "./AuthContext";

export default function ManuBar({ show }) {
  const { logout } = useContext(AuthContext);

  const Status = false;

  return (
    <div
      className={
        show
          ? `${styles.dashboardManuBar} ${styles.show}`
          : styles.dashboardManuBar
      }
    >
      <div className={styles.dashboardManuBarWrapper}>
        <div className={styles.dashboardManuBarTopSec}>
          <div className={styles.avaterContainer}>
            <img src={Avater} width={80} alt="Avater"/>
          </div>
          <div>Biodata Status</div>
          <div
            className={
              Status
                ? `${styles.biodataStatus} ${styles.published}`
                : styles.biodataStatus
            }
          >
            incomplete
          </div>
          <div className={styles.biodataBtnContainer}>
            <Link>My Biodata</Link>
          </div>
        </div>
        <div className={styles.dashboardManuBarBottomSec}>
          <ul className={styles.ManuBarLinkContainer}>
            <li>
              <NavLink to={"/dashboard"}>
                <FaHome className={styles.FaIcon} />
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/"}
                className={(navInfo) => (navInfo.isActive ? styles.active : "")}
              >
                <img src={icon} width={20} alt="Icon"/>
                Edit Biodata
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/dashboard/choice-list"}
                className={(navInfo) => (navInfo.isActive ? styles.active : "")}
              >
                <img src={icon} width={20} alt="Icon"/>
                Choice List
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/dashboard/seen-list"}
                className={(navInfo) => (navInfo.isActive ? styles.active : "")}
              >
                <img src={icon} width={20} alt="Icon"/>
                My Seen
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/dashboard/support-report"}
                className={(navInfo) => (navInfo.isActive ? styles.active : "")}
              >
                <img src={icon} width={20} alt="Icon"/>
                Support & Report
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/dashboard/settings"}
                className={(navInfo) => (navInfo.isActive ? styles.active : "")}
              >
                <img src={icon} width={20} alt="Icon"/>
                Settings
              </NavLink>
            </li>
            <li>
              <NavLink onClick={logout}>
                <img src={icon} width={20} alt="Icon"/>
                Logout
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
