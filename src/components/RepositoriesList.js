import React, { useState, useEffect } from 'react';
import RepositoryCard from './RepositoryCard';

const API_ENDPOINT = 'https://api.github.com/search/repositories?q=';

const getLastPage = link => {
    const links = link.split(',');
    const lastPageLink = links[1].split(';')[0];
    return lastPageLink.substring(
        lastPageLink.lastIndexOf('=') + 1,
        lastPageLink.length - 1
    );
};

const RepositoriesList = ({
    page,
    query,
    setLastPage,
    setRepo,
    showIssues,
    sort,
}) => {
    const [ repos, setRepos ] = useState([]);

    useEffect(
        () => {
            if (query) {
                fetch(`${API_ENDPOINT}${query}&sort=${sort}&page=${page}`)
                    .then(resp => {
                        const link = resp.headers.get('Link');
                        setLastPage(getLastPage(link));
                        return resp.json();
                    })
                    .then(respRepo => setRepos(respRepo.items));
            }
        },
        [query, sort, page]
    );

    return (
        <ul>
            {(repos || []).map(repo => (
                <li key={repo.id}>
                    <RepositoryCard repo={repo} setRepo={setRepo} showIssues={showIssues}  />
                </li>
            ))}
        </ul>
    );
};

export default React.memo(RepositoriesList);