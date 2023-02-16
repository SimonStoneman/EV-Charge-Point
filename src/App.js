
import { useState } from 'react';
import Landing from './Pages/Landing';
import About from './Pages/About';
import Contact from './Pages/Contact'

import Header from './Components/Header/Header';

function App() {
  const [page, setPage] = useState('landing');

  return (
    <>
      <Header setPage={setPage} />

      {page === 'landing' ? <Landing /> : <About />}
 

    </>
  );
}

export default App;