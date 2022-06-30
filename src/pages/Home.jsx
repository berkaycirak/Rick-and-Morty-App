import { useContext } from 'react';
import CharacterContext from '../context/CharacterContext';

function Home() {
  const { characterData } = useContext(CharacterContext);

  console.log(characterData);

  return <div>Home</div>;
}

export default Home;
