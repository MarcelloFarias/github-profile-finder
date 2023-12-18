import { useState, useEffect } from "react";
import './style.scss';
import RepositoryItem from "../RepositoryItem";

const RepositoriesList = ({ reposUrl }) => {
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        const requestController = new AbortController();

        fetch(reposUrl, requestController.signal)
            .then((response) => response.json())
            .then((data) => {
                setRepos(data);
                console.log(data);
            }).catch((error) => console.log(error));

        return () => requestController.abort();
    }, [reposUrl]);

    return (
        <ul className="repos-list">
            {repos?.map((repo) => {
                return <RepositoryItem key={repo.id} repository={repo}/>
            })}
        </ul>
    );
}

export default RepositoriesList;