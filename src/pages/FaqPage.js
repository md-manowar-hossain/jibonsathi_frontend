import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import FaqAccordion from "../components/FaqAccordion";
import GoToTopButton from "../components/GoToTopButton";

export default function FaqPage() {
    const styles = {
        backgroundColor: 'white',
        padding: '25px',
        textAlign: 'center',
        fontSize: '32px'
    }
  return (
    <>
      <NavBar />
      <h2 style={styles}>সচরাচর জিজ্ঞাসিত প্রশ্ন</h2>
      <FaqAccordion/>
      <GoToTopButton/>
      <Footer/>
    </>
  );
}
