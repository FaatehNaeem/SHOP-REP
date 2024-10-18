import Footer from "./components/common/footer";
import Header from "./components/common/header";
import HeroSection from "./components/hero-section";

function App() {

  return (
    <>
      <div className="flex min-h-screen flex-col bg-background">
        <Header />
        <HeroSection/>
        <Footer/>
      </div>
    </>
  );
}

export default App
