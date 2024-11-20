import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Landing from './Pages/Landing';
import About from './Pages/About';
import Contact from './Pages/Contact'
import { PoiProvider } from './Components/Maparea/PoiContext'


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={
          <PoiProvider>
            <Landing />
          </PoiProvider>
        } />         
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />       
      </Routes>
      <Footer />
    </>
  )
}

export default App;