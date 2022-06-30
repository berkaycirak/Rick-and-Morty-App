import './Pagination.styles.scss';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import CharacterContext from '../../context/CharacterContext';

function Pagination() {
  const { charactersPerPage, characterData, setCurrentPage } =
    useContext(CharacterContext);
  const pageNumbers = [];

  for (
    let i = 1;
    i <= Math.ceil(characterData.length / charactersPerPage);
    i++
  ) {
    pageNumbers.push(i);
  }

  return (
    <div className='pagination'>
      <ul className='pagination-list'>
        {pageNumbers.map((number) => (
          <li key={number} className='page-item'>
            <Link
              to={`/characters/page=${number}`}
              onClick={() => {
                setCurrentPage(number);
              }}
              className={`page-link `}
            >
              {number}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Pagination;
