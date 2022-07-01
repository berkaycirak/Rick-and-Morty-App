import axios from 'axios';
import { useState, useEffect, createContext } from 'react';

export const CharacterContext = createContext();

export const CharacterProvider = ({ children }) => {
  const [characterData, setCharacterData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [charactersPerPage, setCharactersPerPage] = useState(5);

  // Fetch the api, and set the character infos into data array.
  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character').then((response) => {
      setCharacterData(response.data.results);
    });
  }, []);

  // Filtering
  const [text, setText] = useState('');
  // Filtered Character
  const filteredCharacters = characterData.filter((filteredCharacter) =>
    filteredCharacter.name.toLowerCase().includes(text.toLowerCase())
  );

  // Get current Characters
  const indexOfLastCharacter = currentPage * charactersPerPage;
  const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage;
  const currentCharacters = filteredCharacters.slice(
    indexOfFirstCharacter,
    indexOfLastCharacter
  );

  return (
    <CharacterContext.Provider
      value={{
        filteredCharacters,
        currentCharacters,
        charactersPerPage,
        characterData,
        setCurrentPage,
        text,
        setText,
      }}
    >
      {children}
    </CharacterContext.Provider>
  );
};

export default CharacterContext;
