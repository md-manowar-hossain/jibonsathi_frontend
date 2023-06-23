import styles from "../assests/css/pagecss/Dashboard.module.css";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import DashboardContent from "../components/DashboardContent";
import DashboardManuBar from "../components/DashboardManuBar";


export default function Dashboard() {

  return (
    <>
      <NavBar />
      <div className={styles.dashboardContainer}>
        <DashboardManuBar/>
        <DashboardContent />
        
      </div>
      <Footer />
    </>
  );
}
