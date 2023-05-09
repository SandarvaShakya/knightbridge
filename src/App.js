import './App.css';
import { BrowserRouter } from 'react-router-dom';

import Contact from './sections/Contact';
import Gallery from './sections/Gallery';
import Information from './sections/Information';
import Navbar from './sections/Navbar';
import Pricing from './sections/Pricing';
import Location from './sections/Location';
import Footer from './sections/Footer';
import Hero from './sections/Hero';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Hero />
          {/* <Hero1 /> */}
          <Information />
          <Pricing />
          <Gallery />
          <Location />
          <Contact />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
