import { Link } from 'react-router-dom';
import './CardDetail.styles.scss';

function CardDetail({ characterDetail }) {
  const { image, name, status, gender, location, species } = characterDetail[0];

  return (
    <div className='container'>
      <div className='character-details'>
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

export default CardDetail;
