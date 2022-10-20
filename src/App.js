import React, { useState } from 'react';
import Header from './components/Header/index.js';
import './App.css';

function App() {

  const [ searchValue, setSearchValue ] = useState('');

  async function searchUser() {
    await fetch(`https://api.github.com/users/${searchValue}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => console.log(error));
  }

  return (
    <>
      <Header searchValue={searchValue} onChange={(e) => setSearchValue(e.target.value)} onClick={searchUser} />
    </>
  );
}

export default App;
