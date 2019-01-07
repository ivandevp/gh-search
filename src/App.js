import React, { useState } from 'react';
import SearchForm from './components/SearchForm';
import RepositoriesList from './components/RepositoriesList';
import RepoIssues from './components/RepoIssues';
// import logo from './logo.svg';
import styles from './App.module.css';

const App = () => {
  const [ query, setQuery ] = useState('');
  const [ sortCriterion, setSortCriterion ] = useState('best-match');
  const [ page, setPage ] = useState(1);
  const [ lastPage, setLastPage ] = useState(Number.MAX_SAFE_INTEGER);
  const [ showIssues, setShowIssues ] = useState(false);
  const [ repo, setRepo ] = useState(null);
  
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>RepoSearch</h1>
      <SearchForm
        criterion={sortCriterion}
        setQuery={setQuery}
        setSortCriterion={setSortCriterion}
      />
      <RepositoriesList
        query={query}
        sort={sortCriterion}
        lastPage={lastPage}
        page={page}
        showIssues={setShowIssues}
        setLastPage={setLastPage}
        setPage={setPage}
        setRepo={setRepo}
      />
      {showIssues && (
        <RepoIssues repo={repo} showIssues={setShowIssues} />
      )}
    </div>
  );
};

export default App;
