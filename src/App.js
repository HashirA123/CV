import './App.css';
import { PulseLoader } from 'react-spinners';

import Navbar from './components/Navbar';
import Home from './sections/Home';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
     <div id="loading_start" className='loading_start_none'>
        <p>Loading</p>
        <PulseLoader color={"#31365F"} size={12} />
      </div>
      <Navbar/>
      <Home/>
      <Experience/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
