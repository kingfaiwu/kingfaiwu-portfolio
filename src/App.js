import "./App.css";
import Header from "./header/Header";
import HomeBody from "./HomeBody";
import Demo from "./demo";
import { gsap, Power3 } from "gsap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./Footer";
import Weather from "./weather/weather";
import LorIpMain from "./LoremIpsum/lorIpMain";
import Movie from "./movie/movie";
import WildFire from "./wildFire/wildFire";

function App() {
  //gsap
  let tl = new gsap.timeline();
  let ease = Power3.easeOut();
  return (
    <div className="App">
      <Header></Header>
      {/* <Header timeline={tl} ease={ease}></Header> */}
      {/* <HomeBody timeline={tl}></HomeBody> */}
      <Router>
        <Routes>
          <Route exact path="/" element={<HomeBody timeline={tl} ease={ease} />} />
          <Route exact path="/demo" element={<Demo />} />
          <Route exact path="/weather" element={<Weather />} />
          <Route exact path="/lorip" element={<LorIpMain />} />
          <Route exact path="/movie" element={<Movie />} />
          <Route exact path="/wildFire" element={<WildFire />} />
        </Routes>
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;
