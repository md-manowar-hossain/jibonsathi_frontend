import "./assests/css/globals.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import AllBiodata from "./pages/AllBiodata";
import SinglePageBiodata from "./pages/SinglePageBiodata";
import Dashboard from "./pages/Dashboard";
import ChoiceListPage from "./pages/ChoiceListPage";
import SeenListPage from "./pages/SeenListPage";
import ReportListPage from "./pages/ReportListPage";
import SettingsPage from "./pages/SettingsPage";
import FaqAccordion from "./pages/FaqPage";
import ContactPage from "./pages/ContactPage";
import InstructionsPage from "./pages/InstructionsPage";
import BiodataRequirementPage from "./pages/BiodataRequirementPage";
import PrivateOutlet from "./components/PrivateOutlet";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<AboutPage />} />
      <Route path="/faq" element={<FaqAccordion />} />
      <Route path="/instructions" element={<InstructionsPage />} />
      <Route path="/contact-us" element={<ContactPage />} />
      <Route path="/login" element={<Signin />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/donate" element={<Terms />} />

      <Route path="/allbiodata" element={<AllBiodata />} />
      <Route path="/biodata" element={<SinglePageBiodata />} />

      <Route path="/dashboard" element={<PrivateOutlet />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/choice-list" element={<ChoiceListPage />} />
        <Route path="/dashboard/seen-list" element={<SeenListPage />} />
        <Route path="/dashboard/support-report" element={<ReportListPage />} />
        <Route path="/dashboard/settings" element={<SettingsPage />} />
        <Route path="/dashboard/promise" element={<BiodataRequirementPage />} />
      </Route>

      {/* <Route path="/dashboard" element={<Dashboard />}>
        <Route path="choice-list" element={<ChoiceList/>} />
      </Route> */}
    </Routes>
  );
}

export default App;
