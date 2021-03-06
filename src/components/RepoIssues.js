import React, { useEffect, useState } from 'react';
import RepoIssue from './RepoIssue';
import styles from './RepoIssues.module.css';

const RepoIssues = ({ repo, showIssues }) => {
    const [ issues, setIssues ] = useState([]);
    
    useEffect(
        () => {
            if (repo && repo.issues_url) {
                fetch(repo.issues_url.replace('{/number}', '?sort=updated'))
                    .then(resp => resp.json())
                    .then(issuesResp => console.log(issuesResp) || setIssues(issuesResp));
            }
        },
        [ repo ],
    );

    return (
        <div className={styles.dialog}>
            <div className={styles.dialogContent}>
                <span className={styles.close} onClick={() => showIssues(false)}>x</span>
                <div className={styles.content}>
                    <h1>{repo.full_name}</h1>
                    <h2>{repo.owner.login}</h2>
                    <p>{repo.description}</p>
                    <p><strong>Created @ </strong> {repo.created_at}</p>
                    <p><strong>Last commit @ </strong> {repo.pushed_at}</p>
                    {repo.license && (
                        <p><strong>License: </strong>{repo.license.name}</p>
                    )}
                    {repo.language && (
                        <p>{repo.language}</p>
                    )}
                    {issues.map(issue => (
                        <RepoIssue key={issue.id} issue={issue} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RepoIssues;