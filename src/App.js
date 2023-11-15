import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Tours from './components/Tours';
import Footer from './components/Footer';
import TroubleshootAbout from './components/TroubleshootAbout';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      {/* <TroubleshootAbout /> */}
      <About />
      <Services />
      <Tours />
      <Footer />
    </>
  );
}

export default App;
