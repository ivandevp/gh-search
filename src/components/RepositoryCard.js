import React from 'react';


const RepositoryCard = ({ repo, setRepo, showIssues }) => (
    <div onClick={(e) => {
        e.preventDefault();
        setRepo(repo);
        showIssues(true);
    }}>
        <p>
            <strong>{repo.full_name}</strong>
            <span>{repo.owner.login}</span>
        </p>
    </div>
);

export default RepositoryCard;