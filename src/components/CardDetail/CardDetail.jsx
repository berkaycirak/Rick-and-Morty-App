import { Link } from 'react-router-dom';
import './CardDetail.styles.scss';

function CardDetail({ characterDetail }) {
  const { image, name, status, gender, location, species } = characterDetail[0];

  return (
    <div className='container'>
      <div className='character-details'>
        <h1 className='character-name'>{name}</h1>
        <img className='character-img' src={image} alt='' />
        <div className='character-props'>
          <h2 className='character-name'>
            <span>Gender:</span> {gender}
          </h2>
          <h2>
            <span>Species:</span> {species}
          </h2>
          <h2>
            <span>Status:</span> {status}
          </h2>
          <h2>
            <span>Location:</span> {location.name}
          </h2>
        </div>
      </div>

      <Link className='back-btn' to='/'>
        Back to Search
      </Link>
    </div>
  );
}

export default CardDetail;
