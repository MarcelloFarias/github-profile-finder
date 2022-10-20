import React, { useState } from 'react';
import Header from './components/Header/index.js';
import Profile from './components/Profile/index.js';
import './App.css';

function App() {

  const [ searchValue, setSearchValue ] = useState('');
  const [ userData, setUserData ] = useState();

  async function searchUser() {
    await fetch(`https://api.github.com/users/${searchValue}`)
    .then((response) => response.json())
    .then((data) => {
      setUserData(data);
      console.log(data)
    })
    .catch((error) => console.log(error));
  }

  return (
    <>
      <Header searchValue={searchValue} onChange={(e) => setSearchValue(e.target.value)} onClick={searchUser} />
      <main>
        {typeof userData === "undefined" 
        ? 
        <div className='message-container'>
          <h1>Welcome to Github User Searcher ! Please, search an user to see the data.</h1>
        </div>
        : 
        <div className={userData?.message === 'Not Found' ? 'message-container' : 'user-container'}>
          {userData?.message === "Not Found" 
          ?
          <h1>User Not Found</h1>
          :
          <Profile data={userData} />}
        </div>}
      </main>
    </>
  );
}

export default App;
