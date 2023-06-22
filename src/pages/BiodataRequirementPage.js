import styles from "../assests/css/pagecss/Dashboard.module.css";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import DashboardManuBar from "../components/DashboardManuBar";
import BiodataRequirement from "../components/BiodataRequirement";

export default function BiodataRequirementPage() {
  return (
    <>
      <NavBar />
      <div className={styles.dashboardContainer}>
        <DashboardManuBar />
        <BiodataRequirement />
      </div>
      <Footer />
    </>
  );
}
