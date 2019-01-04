import React, { useState } from 'react';
import SearchForm from './components/SearchForm';
import RepositoriesList from './components/RepositoriesList';
// import logo from './logo.svg';
// import './App.css';

const App = () => {
  const [ query, setQuery ] = useState('');
  
  return (
    <div className="App">
      <h1>Github Repositories Search</h1>
      <SearchForm setQuery={setQuery} />
      <RepositoriesList query={query} repos={[]} />
    </div>
  );
};

export default App;
