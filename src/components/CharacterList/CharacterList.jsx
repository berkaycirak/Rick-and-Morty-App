import { useContext } from 'react';
import CharacterContext from '../../context/CharacterContext';

function CharacterList() {
  const { currentCharacters } = useContext(CharacterContext);

  return (
    <div>
      {currentCharacters.map((character) => {
        return (
          <div key={character.id}>
            <div>{character.name}</div>
            <img src={character.image} alt={character.name} />
          </div>
        );
      })}
    </div>
  );
}

export default CharacterList;
