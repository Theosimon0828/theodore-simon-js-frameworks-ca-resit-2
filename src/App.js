import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Heading from './components/headings';

import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';

import './sass/style.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Heading/>
          <div>
            <Routes>
              <Route path="/" exact element={<Home/>} className="main-nav-link"/>
              <Route path="/about"  element={<About/>} />
              <Route path="/contact"  element={<Contact/>} />
            </Routes>
          </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
