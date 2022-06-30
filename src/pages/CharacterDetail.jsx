import CardDetail from '../components/CardDetail/CardDetail';
import { useContext } from 'react';
import CharacterContext from '../context/CharacterContext';

import { useParams } from 'react-router-dom';

function CharacterDetail() {
  const { characterData } = useContext(CharacterContext);
  const params = useParams();
  const characterDetail = characterData.filter(
    (character) => character.name === params.name
  );

  return <CardDetail characterDetail={characterDetail} />;
}

export default CharacterDetail;
