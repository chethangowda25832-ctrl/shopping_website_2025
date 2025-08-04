import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/shop" element={<div className="min-h-[60vh] flex items-center justify-center"><p className="text-2xl text-gray-600">Shop Coming Soon</p></div>} />
            <Route path="/about" element={<div className="min-h-[60vh] flex items-center justify-center"><p className="text-2xl text-gray-600">About Coming Soon</p></div>} />
            <Route path="/contact" element={<div className="min-h-[60vh] flex items-center justify-center"><p className="text-2xl text-gray-600">Contact Coming Soon</p></div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;