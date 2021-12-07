import './App.scss';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import About from './components/About';
import Gallery from './components/Gallery';

function App() {
  return (
    <main>
      <Navbar />
      <Carousel />
      <About />
      <Gallery />
    </main>
    
  );
}

export default App;
