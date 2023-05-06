import './App.css';
import Contact from './sections/Contact';
import Gallery from './sections/Gallery';
import Hero from './sections/Hero';
import Information from './sections/Information';
import Navbar from './sections/Navbar';
import Pricing from './sections/Pricing';

const App = () => {
  return (
    <div className="App">
      <Navbar/>
      <div className="content">
        <Hero />
        <Information />
        <Pricing />
        <Gallery />
        <Contact />
      </div>
    </div>
  );
}

export default App;
