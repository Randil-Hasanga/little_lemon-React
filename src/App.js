import './App.css';
import Nav from './components/Nav';
import Header from './components/Header';
import About from './components/About';
import SpecialMenu from './components/SpecialMenu';
import Reviews from './components/Reviews';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function App() {
  return(
    <main className='main'>
      <Nav/>
      <Header/>
      <SpecialMenu/>
      <Reviews/>
    </main>
  );
}

export default App;
