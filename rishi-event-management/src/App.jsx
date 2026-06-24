import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Packages from "./components/Packages";
import Areas from "./components/Areas";
import Contact from "./components/Contact";
import BookingForm from "./components/BookingForm";
function App() {
  const [selectedPackage, setSelectedPackage] = useState("");

  return (
    <>
      <Navbar />
      <Hero />
      <Services />

       <Packages
      selectedPackage={selectedPackage}
      setSelectedPackage={setSelectedPackage}
    />
      <Areas />

      <BookingForm
        selectedPackage={selectedPackage}
        setSelectedPackage={setSelectedPackage}
      />

      <Contact />
    </>
  );
}
export default App;