import React, { useRef } from 'react';
import styles from './SearchForm.module.css';

const sortCriteria = [
    {
        id: 'best-match',
        name: 'Best Match',
    },
    {
        id: 'stars',
        name: 'Stars',
    },
    {
        id: 'forks',
        name: 'Forks',
    },
    {
        id: 'help-wanted-issues',
        name: 'Help Wanted Issues',
    },
    {
        id: 'updated',
        name: 'Last edition',
    },
];

const SearchForm = ({
    criterion,
    lastPage,
    page,
    setPage,
    setQuery,
    setSortCriterion,
}) => {
    const inputEl = useRef({});

    const setRepoToSearch = el => event => {
        event.preventDefault();
        setQuery(el.current.value);
    };

    return (
        <React.Fragment>
            <form onSubmit={setRepoToSearch(inputEl)} className={styles.searchForm}>
                <input
                    ref={inputEl}
                    type="search"
                    className={styles.searchInput}
                    placeholder="Search a repo"
                />
                <select
                    defaultValue={criterion}
                    onChange={(e) => setSortCriterion(e.target.value)}
                    className={styles.searchCriteria}
                >
                    {sortCriteria.map(criterion => (
                        <option
                            key={criterion.id}
                            value={criterion.id}
                        >
                            {criterion.name}
                        </option>
                    ))}
                </select>
                <button type="submit" className={styles.searchButton}>Search</button>
            </form>
            <div style={{ margin: 20, display: 'none' }}>
                {page > 1 && <button onClick={() => setPage(--page)}>Prev</button>}
                {page < lastPage && <button onClick={() => setPage(++page)}>Next</button>}
            </div>
        </React.Fragment>
    );
};

export default SearchForm;