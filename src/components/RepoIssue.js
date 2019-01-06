import React from 'react';

const RepoIssue = ({ issue }) => (
    <li>
        <strong>{issue.title}</strong><br />
        <p>{issue.body}</p>
        <p>
            <strong>Last edition:</strong> {issue.updated_at} by 
            <strong> {issue.user.login}</strong>
        </p>
    </li>
);

export default RepoIssue;