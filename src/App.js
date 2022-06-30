import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Layout/Navbar/Navbar';
import { CharacterProvider } from './context/CharacterContext';
import CharacterDetail from './pages/CharacterDetail';
import Home from './pages/Home';

function App() {
  return (
    <div className='App'>
      <CharacterProvider>
        <Navbar />
        <Router>
          <Routes>
            <Route index element={<Home />} />
            <Route path='/characters/:page' element={<Home />} />
            <Route
              path='/character-detail/:name'
              element={<CharacterDetail />}
            />
          </Routes>
        </Router>
      </CharacterProvider>
    </div>
  );
}

export default App;
