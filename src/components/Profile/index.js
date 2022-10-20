import React from 'react';

const Profile = ({ data }) => {
    return (
        <>
            <div className='profile-container'>
                <img src={data?.avatar_url} alt="User avatar" />
                <h2>{data?.name}</h2>
                <h3>{data?.login}</h3>
                <p>{data?.bio}</p>
            </div>
        </>
    );
}

export default Profile;