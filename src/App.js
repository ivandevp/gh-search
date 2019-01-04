import React, { useState } from 'react';
import SearchForm from './components/SearchForm';
import RepositoriesList from './components/RepositoriesList';
// import logo from './logo.svg';
// import './App.css';

const App = () => {
  const [ query, setQuery ] = useState('');
  
  const searchRepo = searchQuery => event => {
    event.preventDefault();
    setQuery(searchQuery);
  };
  
  return (
    <div className="App">
      <h1>Github Repositories Search</h1>
      <SearchForm onSubmit={searchRepo} />
      {query}
      <RepositoriesList query={query} repos={[]} />
    </div>
  );
};

export default App;
