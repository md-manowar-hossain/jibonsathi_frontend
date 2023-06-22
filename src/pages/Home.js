import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Welcome from "../components/Welcome";
import Hadith from "../components/Hadith";
import Search from "../components/Search";
import CvCard from "../components/CvCard";
import Statistics from "../components/Statistics";
import Working from "../components/Working";
import Announcement from "../components/Announcement";
import Limitation from "../components/Limitation";
import GoToTopButton from "../components/GoToTopButton";
import { Donation } from "../components/Donation";

export default function Home() {
  return (
    <>
    <NavBar />
    <Welcome/>
    <Announcement/>
    <Hadith/>
    <Search/>
    <CvCard/>
    <Statistics/>
    <Working/>
    <Donation/>
    <Limitation/>
    <GoToTopButton/>
    <Footer/>
    </>
  );
}
