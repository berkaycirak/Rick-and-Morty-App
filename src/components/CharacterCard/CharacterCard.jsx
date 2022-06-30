import { Link } from 'react-router-dom';
import './CharacterCard.styles.scss';

function CharacterCard({ character }) {
  return (
    <Link to={`/character-detail/${character.name}`}>
      <div className='card' key={character.id}>
        <h1 className='card-name'>{character.name}</h1>
        <img className='card-img' src={character.image} alt={character.name} />
      </div>
    </Link>
  );
}

export default CharacterCard;
