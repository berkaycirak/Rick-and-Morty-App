import './SearchBar.styles.scss';
import { FaSearch } from 'react-icons/fa';
import { useState, useRef } from 'react';

function SearchBar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const inputReference = useRef(null);

  return (
    <div className='search'>
      <p className={`warning ${isExpanded && 'hide'} `}>Click for search</p>
      <div className={`search-bar ${isExpanded && 'active'} `}>
        <input ref={inputReference} type='text' placeholder='Search' />
        <div
          onClick={() => {
            setIsExpanded(!isExpanded);
          }}
          className='icon'
        >
          <FaSearch className='btn' size='22px' />
        </div>
        {isExpanded && inputReference.current.focus()}
      </div>
    </div>
  );
}

export default SearchBar;
