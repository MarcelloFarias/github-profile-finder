import React from 'react';
import './style.css';

const Profile = ({ data }) => {
    return (
        <>
            <div className='profile-container'>
                <img className="user-avatar" src={data?.avatar_url} alt="User avatar" />
                <a href={data?.html_url} className='user-name'><h1>{data?.name}</h1></a>
                <h3 className='user-login'>{data?.login}</h3>
                <p className='user-bio' >{data?.bio}</p>
                <div className='user-stats'>
                    <a className='stat'>{data?.followers} followers</a>
                    <a className='stat'>{data?.following} following</a>
                </div>

                <p className='user-location'>{data?.location}</p>
            </div>
        </>
    );
}

export default Profile;