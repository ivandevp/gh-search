import React, { useState, useEffect } from 'react';
import RepositoryCard from './RepositoryCard';

const API_ENDPOINT = 'https://api.github.com/search/repositories?q=';

const RepositoriesList = ({ query }) => {
    const [ repos, setRepos ] = useState([]);

    useEffect(
        () => {
            if (query) {
                fetch(`${API_ENDPOINT}${query}`)
                    .then(resp => resp.json())
                    .then((repos) => console.log(repos) || setRepos(repos.items));
            }
        },
        [query]
    );

    return (
        <ul>
            {repos.map(repo => (
                <li key={repo.id}>
                    <RepositoryCard repo={repo}  />
                </li>
            ))}
        </ul>
    );
};

export default React.memo(RepositoriesList);