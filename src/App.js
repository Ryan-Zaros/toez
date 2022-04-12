import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from "react";
import Header from "./components/Header/Header";
import Card from "./components/Card/Card";
import SwipeButtons from "./components/SwipeButtons/SwipeButtons";
import Chats from "./components/Chats/Chats";
import ChatScreen from "./components/ChatScreen/ChatScreen";

// Netlify host URL: http://friendly-bohr-afe2a8.netlify.app/

function App() {
  return (
    <div className="App">
      {/* <Navbar bg="dark" variant="dark">
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
            <Nav.Link href="http:localhost:3000">Home</Nav.Link>
            <Nav.Link href="http:localhost:3000/large-toe">Large Toe</Nav.Link>
            <Nav.Link href="http:localhost:3000/small-toe">Small Toe</Nav.Link>
            <Nav.Link href="http:localhost:3000/about">About</Nav.Link>
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
      </Router> */}
      <Router>
        <Routes>
          <Route path="/chat/:person" element={<><Header backButton="/chat" /><ChatScreen/></>}>
          </Route>
          <Route path="/chat" element={<><Header backButton="/" /><Chats /></>}>
          </Route>
          <Route path="/" element={<><Header /><Card /><SwipeButtons /></>}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
