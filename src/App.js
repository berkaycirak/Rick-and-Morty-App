import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Layout/Navbar/Navbar';
import { CharacterProvider } from './context/CharacterContext';
import CharacterDetail from './pages/CharacterDetail';
import Home from './pages/Home';

function App() {
  return (
    <CharacterProvider>
      <Navbar />
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/characters/:name' element={<CharacterDetail />} />
        </Routes>
      </Router>
    </CharacterProvider>
  );
}

export default App;
