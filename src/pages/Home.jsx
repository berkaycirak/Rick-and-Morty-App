import { useContext } from 'react';
import CharacterContext from '../context/CharacterContext';
import CharacterList from '../components/CharacterList/CharacterList';
import Pagination from '../components/Pagination/Pagination';

function Home() {
  const { characterData } = useContext(CharacterContext);

  console.log(characterData);

  return (
    <div>
      <CharacterList />
      <Pagination />
    </div>
  );
}

export default Home;
