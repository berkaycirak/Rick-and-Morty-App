import './SearchBar.styles.scss';
import { FaSearch } from 'react-icons/fa';
import { useState, useRef } from 'react';

function SearchBar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const inputReference = useRef(null);

  return (
    <div className={`search-bar ${isExpanded && 'active'} `}>
      <input ref={inputReference} type='text' placeholder='Search' />
      <FaSearch
        className='btn'
        size='22px'
        onClick={() => {
          setIsExpanded(!isExpanded);
        }}
      />
      {isExpanded && inputReference.current.focus()}
    </div>
  );
}

export default SearchBar;
