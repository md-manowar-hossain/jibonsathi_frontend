import ChoiceList from "../components/ChoiceList";
import styles from "../assests/css/pagecss/Dashboard.module.css";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import DashboardManuBar from "../components/DashboardManuBar";
import { Outlet } from "react-router-dom";
import SeenList from "../components/SeenList";

export default function SeenListPage() {
  return (
    <>
      <NavBar />
      <div className={styles.dashboardContainer}>
        <DashboardManuBar/>
        <SeenList/>
      </div>
      <Footer />
    </>
  );
}
