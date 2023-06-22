import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

export default function ContactPage() {
  const styles = {
    backgroundColor: 'white',
    padding: '25px',
    textAlign: 'center',
    fontSize: '32px'
}
  return (
    <>
      <NavBar />
      <h2 style={styles}>আমাদের সাথে যোগাযোগ করুন</h2>
      <ContactUs/>
      <Footer/>
    </>
  );
}