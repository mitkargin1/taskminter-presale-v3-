import { Web3Provider } from "./context/Web3Context";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import PresaleSection from "./sections/PresaleSection";
import TokenomicsSection from "./sections/TokenomicsSection";
import RoadmapSection from "./sections/RoadmapSection";
import ChartsSection from "./sections/ChartsSection";
import CommunitySection from "./sections/CommunitySection";

function App() {
  return (
    <Web3Provider>
      <div className="min-h-screen bg-midnight text-white">
        <Navbar />

        <main>
          <HeroSection />
          <AboutSection />
          <PresaleSection />
          <TokenomicsSection />
          <RoadmapSection />
          <ChartsSection />
          <CommunitySection />
        </main>

        <Footer />
      </div>
    </Web3Provider>
  );
}

export default App;
