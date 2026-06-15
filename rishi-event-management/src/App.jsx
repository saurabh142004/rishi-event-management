import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Packages from "./components/Packages";
import Areas from "./components/Areas";
import Contact from "./components/Contact";

function App(){
  return (
    <>
     <Navbar/>
     <Hero />
     <Services />
     <Packages />
     <Areas />
     <Contact />
    </>
  );
}
export default App;