import React, { useState } from 'react';
import SearchForm from './components/SearchForm';
import RepositoriesList from './components/RepositoriesList';
import RepoIssues from './components/RepoIssues';
// import logo from './logo.svg';
// import './App.css';

const App = () => {
  const [ query, setQuery ] = useState('');
  const [ showIssues, setShowIssues ] = useState(false);
  const [ repo, setRepo ] = useState('');
  
  return (
    <div className="App">
      <h1>Github Repositories Search</h1>
      <SearchForm setQuery={setQuery} />
      <RepositoriesList query={query} showIssues={setShowIssues} setRepo={setRepo} />
      {showIssues && (
        <RepoIssues repo={repo} />
      )}
    </div>
  );
};

export default App;
