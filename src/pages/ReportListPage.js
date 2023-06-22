import styles from "../assests/css/pagecss/Dashboard.module.css";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import DashboardManuBar from "../components/DashboardManuBar";
import { Outlet } from "react-router-dom";
import ReportList from "../components/ReportList";

export default function ReportListPage() {
  return (
    <>
      <NavBar />
      <div className={styles.dashboardContainer}>
        <DashboardManuBar/>
        <ReportList/>
      </div>
      <Footer />
    </>
  );
}