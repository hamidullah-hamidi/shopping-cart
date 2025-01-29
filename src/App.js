import './App.css';
import { useEffect } from 'react';
import { useState } from 'react';
import CharacterGrid from './components/characters/CharacterGrid';
import Header from './components/Header';
import Search from './components/Search';

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(() => {
    async function fetchItems() {
      const res = await fetch(`https://rickandmortyapi.com/api/character?name=${query}`);
      const data = await res.json();

      setItems(data.results);
      setIsLoading(false);

      console.log(data.results);
    }

    fetchItems();
  }, [query]);

  return (
    <div className='container'>
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterGrid items={items} isLoading={isLoading} />
    </div>
  );
}

export default App;
