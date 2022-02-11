import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { About } from './components/About';
import { Inspiration } from './components/Inspiration'
import { Home } from './components/Home';
import { BestWorks } from './components/BestWorks';


function App() {
  return (
    <>
      <BrowserRouter>
        {/* <ul className="nav justify-content-end">
          <li className="nav-item">
            <Link to="/" className="nav-link" aria-current="page">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="about" className="nav-link" aria-current="page">About</Link>
          </li>
          <li className="nav-item">
            <Link to="inspiration" className="nav-link" aria-current="page">Inspiration</Link>
          </li>
          <li className="nav-item">
            <Link to="bestWorks" className="nav-link" aria-current="page">Best Works</Link>
          </li>
        </ul> */}
        

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/inspiration" element={<Inspiration />} />
          <Route path="/bestWorks" element={<BestWorks />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
