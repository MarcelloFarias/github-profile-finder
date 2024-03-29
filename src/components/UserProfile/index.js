import './style.scss';
import { LuUsers2 } from "react-icons/lu";

const UserProfile = ({user}) => {
    return (
        <div className="user-profile">
            <img src={user?.avatar_url} alt='user-avatar' />
            <h1>{user?.name}</h1>
            <h3>{user?.login}</h3>
            <p className='bio'>{user.bio}</p>
            <div className='followers'>
                <LuUsers2 style={{marginRight: '10px'}} />
                <p>{user?.followers} <span>followers</span></p>
                <p>.</p>
                <p>{user?.following} <span>following</span></p>
            </div>
            <p className='location'>📍 {user?.location}</p>
        </div>
    );
}

export default UserProfile;