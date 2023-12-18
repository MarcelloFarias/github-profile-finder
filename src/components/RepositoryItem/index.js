import './style.scss';

const RepositoryItem = ({repository}) => {
    return (
        <li className="repository-item">
            <div className='repository-name'>
                <a href={repository?.html_url}>{repository?.name}</a>
                <span>{repository?.visibility}</span>
            </div>
            <p className='repository-description'>{repository?.description}</p>
            <p>{repository?.language}</p>
        </li>
    );
}

export default RepositoryItem;