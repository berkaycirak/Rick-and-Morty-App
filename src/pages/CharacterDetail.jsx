import { useContext } from 'react';
import CharacterContext from '../context/CharacterContext';

import { Link, useParams } from 'react-router-dom';

function CharacterDetail() {
  const { characterData } = useContext(CharacterContext);
  const params = useParams();
  const characterDetail = characterData.filter(
    (character) => character.name === params.name
  );

  console.log(characterDetail);
  const { image, name, status, gender, location, species } = characterDetail[0];
  console.log(location);
  return (
    <div className='container'>
      <div className=''>
        <h1 className='character-name'>{name}</h1>
        <img className='character-img' src={image} alt='' />
        <h1 className='character-name'>Gender: {gender}</h1>
        <h2>Species: {species}</h2>
        <h2>Status: {status}</h2>
        <h2>Location: {location.name}</h2>
      </div>

      <Link className='back-btn' to='/'>
        Back to Search
      </Link>
    </div>
  );
}

export default CharacterDetail;
