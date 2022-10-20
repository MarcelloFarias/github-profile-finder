import React, { useEffect, useState } from 'react';
import './style.css';

const Repos = ({ data }) => {

    const [ userRepos, setUserRepos ] = useState([]);

    useEffect(() => {
        fetch(`https://api.github.com/users/${data?.login}/repos`)
        .then((response) => response.json())
        .then((data) => {
            setUserRepos(data);
        })
        .catch((error) => console.log(error));
    }, [userRepos, data?.login]);

    return (
        <>
            <div className='repos-container'>
                <ul className='repos-list'>
                    {userRepos.map((repo, index) => {
                        return (
                            <li key={index} className='repo-item'>
                                <div className='repo-name-container'>
                                    <a className='repo-name'>{repo?.name}</a>
                                    <p>{repo?.visibility}</p>
                                </div>
                                <p>{repo?.description}</p>
                                <p>{repo?.language}</p>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </>
    );
}

export default Repos;