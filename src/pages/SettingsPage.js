import styles from "../assests/css/pagecss/Dashboard.module.css";

import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import DashboardManuBar from "../components/DashboardManuBar";
import { Outlet } from "react-router-dom";
import ReportList from "../components/ReportList";
import ChangePassword from "../components/ChangePassword";

export default function SettingsPage() {
  return (
    <>
      <NavBar />
      <div className={styles.dashboardContainer}>
        <DashboardManuBar />
        <ChangePassword />
      </div>
      <Footer />
    </>
  );
}
