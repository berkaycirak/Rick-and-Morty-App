import { useContext } from 'react';
import './CharacterList.styles.scss';
import CharacterContext from '../../context/CharacterContext';
import Pagination from '../Pagination/Pagination';
import CharacterCard from '../CharacterCard/CharacterCard';

function CharacterList() {
  const { currentCharacters } = useContext(CharacterContext);

  return (
    <>
      <div className='character-list'>
        {currentCharacters.map((character) => {
          return <CharacterCard key={character.id} character={character} />;
        })}
      </div>
      <Pagination />
    </>
  );
}

export default CharacterList;
