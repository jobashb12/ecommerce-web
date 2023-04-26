import React from 'react';
import Nav from './component/Nav';
import Home from './component/Home';
import Cart from './component/Cart';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/cart" exact element={<Cart />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;
