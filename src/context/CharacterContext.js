import axios from 'axios';
import { useState, useEffect, createContext } from 'react';

export const CharacterContext = createContext();

export const CharacterProvider = ({ children }) => {
  const [characterData, setCharacterData] = useState([]);

  // Fetch the api, and set the character infos into data array.
  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character').then((response) => {
      setCharacterData(response.data.results);
    });
  }, []);

  return (
    <CharacterContext.Provider value={{ characterData }}>
      {children}
    </CharacterContext.Provider>
  );
};

export default CharacterContext;
