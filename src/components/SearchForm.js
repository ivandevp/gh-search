import React, { useRef } from 'react';

const SearchForm = ({ setQuery }) => {
    const inputEl = useRef({});

    const setRepoToSearch = el => event => {
        event.preventDefault();
        setQuery(el.current.value);
    };

    return (
        <form onSubmit={setRepoToSearch(inputEl)}>
            <input ref={inputEl} type="search" />
            <button type="submit">Search</button>
        </form>
    );
};

export default SearchForm;