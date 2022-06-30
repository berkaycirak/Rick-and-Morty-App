import CharacterList from '../components/CharacterList/CharacterList';
import SearchBar from '../components/Layout/SearchBar/SearchBar';

function Home() {
  return (
    <div>
      <SearchBar />
      <CharacterList />
    </div>
  );
}

export default Home;
