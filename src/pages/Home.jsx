import { useContext, useEffect } from 'react';
import CharacterContext from '../context/CharacterContext';
import CharacterList from '../components/CharacterList/CharacterList';

function Home() {
  return (
    <div>
      <CharacterList />
    </div>
  );
}

export default Home;
