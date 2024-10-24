import '../App.css';
import About from '../components/about';
import Articles from '../components/articles';
import Footer from '../components/footer';
import Header from '../components/header';
import Photoes from '../components/photoes';
import Services from '../components/services';
import SuccessfulCases from '../components/successfulCases';
import Universities from '../components/universities';
import Videos from '../components/videos';
import poster from "../assets/poster-about.png"

function App() {
  return (
    <div style={{ width: "100vw" }}>
      <Header />
      <img src={poster} />
      <About />
      <Universities />
      <Services />
      <SuccessfulCases />
      <Articles />
      <div style={{ display: "flex" }}>
        <Videos />
        <Photoes />
      </div>
      <Footer />

    </div>
  );
}

export default App;
