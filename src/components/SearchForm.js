import React, { useRef } from 'react';

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
            <form onSubmit={setRepoToSearch(inputEl)}>
                <input ref={inputEl} type="search" />
                <button type="submit">Search</button>
            </form>
            <div style={{ margin: 20 }}>
                {page > 1 && <button onClick={() => setPage(--page)}>Prev</button>}
                {page < lastPage && <button onClick={() => setPage(++page)}>Next</button>}
                <label>
                    Sort:
                    <select defaultValue={criterion} onChange={(e) => setSortCriterion(e.target.value)}>
                        {sortCriteria.map(criterion => (
                            <option
                                key={criterion.id}
                                value={criterion.id}
                            >
                                {criterion.name}
                            </option>
                        ))}
                    </select>
                </label>
            </div>
        </React.Fragment>
    );
};

export default SearchForm;