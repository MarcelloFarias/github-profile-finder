import React, { useState } from 'react';
import Header from './components/Header/index.js';
import UserProfile from './components/UserProfile/index.js';
import './App.scss';

function App() {

  const [searchValue, setSearchValue] = useState('');

  const handleSearchValue = (e) => {
    setSearchValue(e.target.value);
  }

  const [userData, setUserData] = useState({});

  async function searchUser() {
    if(searchValue) {
      await fetch(`https://api.github.com/users/${searchValue}`)
      .then((response) => response.json())
      .then((data) => {
        setUserData(data);
        console.log(data);
      })
      .catch((error) => console.log(error));

      setSearchValue('');
    }
    return;
  }

  return (
    <>
      <Header />

      <main>
        <div className='input-field'>
          <label>Search for a github user</label>
          <input value={searchValue} onChange={handleSearchValue} type='text' placeholder='Type a github user here...' />
          <button className='btn btn-search' onClick={() => searchUser()}>Search</button>
        </div>
        <div className='user-container'>
          <UserProfile user={userData} />
        </div>
      </main>
    </>
  );
}

export default App;
