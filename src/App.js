import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Orderpage from './components/Orderpage';
import Thankyoupage from './components/Thankyoupage';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/orderpage" element={<Orderpage />} />
        <Route path="/thankyoupage" element={<Thankyoupage />} />
      </Routes>
     
      <nav>
      </nav>
      <footer>
      </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
