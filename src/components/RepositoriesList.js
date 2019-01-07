import React, { useState, useEffect } from 'react';
import RepositoryCard from './RepositoryCard';
import styles from './RepositoriesList.module.css';

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
    lastPage,
    page,
    query,
    setLastPage,
    setPage,
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
        <React.Fragment>
            {repos && repos.length > 1 && (
                <div className={styles.controls}>
                    <button disabled={page <= 1} onClick={() => setPage(--page)}>Prev</button>
                    <button disabled={page >= lastPage} onClick={() => setPage(++page)}>Next</button>
                </div>
            )}
            <ul className={styles.repoList}>
                {(repos || []).map(repo => (
                    <li key={repo.id} className={styles.repo}>
                        <RepositoryCard repo={repo} setRepo={setRepo} showIssues={showIssues}  />
                    </li>
                ))}
            </ul>
        </React.Fragment>
    );
};

export default React.memo(RepositoriesList);