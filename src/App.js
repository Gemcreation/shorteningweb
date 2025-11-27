import Header from "./component/Header";
import HeroSection from "./component/HeroSection";
import ShortenLink from "./component/ShortenLink";
import Statistics from "./component/Statistics";
import Cta from "./component/Cta";
import Footer from "./component/Footer";
import './App.scss';

function App() {
  return (
    <>
      <Header/>
      <HeroSection/>
      <ShortenLink/>
      <Statistics/>
      <Cta/>
      <Footer/>
    </>
  );
}

export default App;
