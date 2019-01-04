import React from 'react';
import RepositoryCard from './RepositoryCard';

const RepositoriesList = ({ repos }) => (
    <ul>
        {repos.map(repo => (
            <li key={repo.id}>
                <RepositoryCard {...repo}  />
            </li>
        ))}
    </ul>
);

export default RepositoriesList;