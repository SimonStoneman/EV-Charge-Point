
import { useState } from 'react';
import Landing from './Pages/Landing';
import About from './Pages/About';
import Contact from './Pages/Contact'
import Footer from './Components/Footer/Footer'


import Header from './Components/Header/Header';
import SuggestBar from './Components/SuggestBar/suggestBar';

function App() {
  const [page, setPage] = useState('landing');

  return (
    <>
      <Header setPage={setPage} />
      

      {page === 'landing' ? <Landing /> : <About />}
      
      <SuggestBar />
      
      
      <Footer />
 

    </>
  );
}

export default App;