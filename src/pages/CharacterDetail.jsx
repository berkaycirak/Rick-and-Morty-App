import { useContext } from 'react';
import CharacterContext from '../context/CharacterContext';

import { useParams } from 'react-router-dom';

function CharacterDetail() {
  const { characterData } = useContext(CharacterContext);
  const params = useParams();
  const characterDetail = characterData.filter(
    (character) => character.name === params.name
  );

  const { image, name } = characterDetail[0];
  return (
    <div className='container'>
      <div className=''>
        <h1 className='character-name'>{name}</h1>
        <img className='character-img' src={image} alt='' />
      </div>
    </div>
  );
}

export default CharacterDetail;
