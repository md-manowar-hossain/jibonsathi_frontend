import ChoiceList from "../components/ChoiceList";
import styles from "../assests/css/pagecss/Dashboard.module.css";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import DashboardManuBar from "../components/DashboardManuBar";
import { Outlet } from "react-router-dom";

export default function ChoiceListPage() {
  return (
    <>
      <NavBar />
      <div className={styles.dashboardContainer}>
        <DashboardManuBar/>
        <ChoiceList/>
      </div>
      <Footer />
    </>
  );
}
