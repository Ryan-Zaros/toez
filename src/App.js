import logo from './logo.jpeg';
import Toe from './components/Toe';
import LargeToe from './components/LargeToe';
import SmallToe from './components/SmallToe';
import About from './components/About';
import Splash from './components/Splash';
import './App.css';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            />{' '}
            Toez</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="http://friendly-bohr-afe2a8.netlify.app/">Home</Nav.Link>
            <Nav.Link href="http://friendly-bohr-afe2a8.netlify.app/large-toe">Large Toe</Nav.Link>
            <Nav.Link href="http://friendly-bohr-afe2a8.netlify.app/small-toe">Small Toe</Nav.Link>
            <Nav.Link href="http://friendly-bohr-afe2a8.netlify.app/about">About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Router>
        <Routes>
          <Route path='/' element={<Splash />} />
          <Route path='/toe' element={<Toe />} />
          <Route path='/large-toe' element={<LargeToe />} />
          <Route path='/small-toe' element={<SmallToe />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
