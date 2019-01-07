import React from 'react';


const RepositoryCard = ({ repo, setRepo, showIssues }) => (
    <div onClick={(e) => {
        e.preventDefault();
        setRepo(repo);
        showIssues(true);
    }}>
        <p>
            <strong>{repo.full_name}</strong> by 
            <strong> {repo.owner.login}</strong>
        </p>
        <p>{repo.description}</p>
    </div>
);

export default RepositoryCard;