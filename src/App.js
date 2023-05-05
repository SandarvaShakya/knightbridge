import './App.css';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import Hero from './components/Hero';
import Information from './components/Information';
import Navbar from './components/Navbar';
import Pricing from './components/Pricing';

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
