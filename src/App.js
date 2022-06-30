import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Layout/Navbar/Navbar';
import { CharacterProvider } from './context/CharacterContext';
import Home from './pages/Home';

function App() {
  return (
    <CharacterProvider>
      <Navbar />
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
    </CharacterProvider>
  );
}

export default App;
