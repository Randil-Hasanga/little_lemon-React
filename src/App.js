import './App.css';
import Nav from './components/Nav';
import Header from './components/Header';
import About from './components/About';
import SpecialMenu from './components/SpecialMenu';
import Reviews from './components/Reviews';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Footer from './components/Footer';
import { Route, Router, Routes } from 'react-router-dom';
import Main from './components/Main';
import Reservations from './components/Reservations';

function App() {
  return(
    <main className='main'>
      <Nav/>
      <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path="/reservations" element={<Reservations/>} />
      </Routes>
      <Footer/>
    </main>
  );
}

export default App;
