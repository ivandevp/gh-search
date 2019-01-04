import React from 'react';

const RepositoryCard = ({ repo }) => (
    <div>
        <p>
            <strong>{repo.full_name}</strong>
            <span>{repo.owner.login}</span>
        </p>
        <p>{repo.description}</p>
    </div>
);

export default RepositoryCard;