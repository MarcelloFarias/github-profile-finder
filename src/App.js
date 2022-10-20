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
    })
    .catch((error) => console.log(error));
  }

  return (
    <>
      <Header searchValue={searchValue} onChange={(e) => setSearchValue(e.target.value)} onClick={searchUser} />
      <main>
        <Profile data={userData} />
      </main>
    </>
  );
}

export default App;
