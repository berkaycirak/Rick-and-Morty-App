import './Pagination.styles.scss';
import { useContext } from 'react';
import CharacterContext from '../../context/CharacterContext';

function Pagination() {
  const { charactersPerPage, characterData } = useContext(CharacterContext);
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
            <a href='!#' className='page-link'>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Pagination;
