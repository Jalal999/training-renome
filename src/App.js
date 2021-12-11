import './App.scss';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import About from './components/About';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

function App() {
  return (
    <main>
      <Navbar />
      <Carousel />
      <About />
      <Gallery />
      <Contact />
    </main>
    
  );
}

export default App;
