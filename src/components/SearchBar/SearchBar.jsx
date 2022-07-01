import './SearchBar.styles.scss';
import { FaSearch } from 'react-icons/fa';
import { useState, useRef, useContext } from 'react';
import CharacterContext from '../../context/CharacterContext';

function SearchBar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const inputReference = useRef(null);
  const { text, setText } = useContext(CharacterContext);

  //Filtering Names

  const changeHandler = (e) => {
    setText(e.target.value);
  };

  return (
    <div className='search'>
      <p className={`warning ${isExpanded && 'hide'} `}>Click for search</p>
      <div className={`search-bar ${isExpanded && 'active'} `}>
        <input
          ref={inputReference}
          type='text'
          placeholder='Search'
          onChange={changeHandler}
          value={text}
        />
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
