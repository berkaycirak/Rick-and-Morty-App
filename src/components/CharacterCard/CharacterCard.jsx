import { Link } from 'react-router-dom';
import './CharacterCard.styles.scss';

function CharacterCard({ character }) {
  return (
    <Link to={`/characters/${character.name}`}>
      <div key={character.id}>
        <div>{character.name}</div>
        <img src={character.image} alt={character.name} />
      </div>
    </Link>
  );
}

export default CharacterCard;
