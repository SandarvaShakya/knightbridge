import './App.css';
import { BrowserRouter } from 'react-router-dom';

import Contact from './sections/Contact';
import Gallery from './sections/Gallery';
import Hero from './sections/Hero';
import Information from './sections/Information';
import Navbar from './sections/Navbar';
import Pricing from './sections/Pricing';
import Location from './sections/Location';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Hero />
          <Information />
          <Pricing />
          <Gallery />
          <Location />
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
