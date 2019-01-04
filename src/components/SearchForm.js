import React, { useRef } from 'react';

const searchRepo = (e) => {
    e.preventDefault();
};

const SearchForm = ({ onSubmit }) => {
    const inputEl = useRef(null);
    return (
        <form onSubmit={onSubmit((inputEl.current || {}).value)}>
            <input ref={inputEl} type="search" />
            <button type="submit">Search</button>
        </form>
    );
};

export default SearchForm;