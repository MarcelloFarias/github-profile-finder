import React, { useState } from 'react';
import Header from './components/Header/index.js';
import UserProfile from './components/UserProfile/index.js';
import './App.scss';
import RepositoriesList from './components/RepositoriesList/index.js';
import Footer from './components/Footer/index.js';

function App() {

  const [searchValue, setSearchValue] = useState('');

  const handleSearchValue = (e) => {
    setSearchValue(e.target.value);
  }

  const [userData, setUserData] = useState();
  const [reposUrl, setReposUrl] = useState('');

  async function searchUser() {
    if (searchValue) {
      await fetch(`https://api.github.com/users/${searchValue}`)
        .then((response) => response.json())
        .then((data) => {
          if(data.message) {
            return alert(data.message);
          }
          setUserData(data);
          setReposUrl(data?.repos_url)
          console.log(data);
        })
        .catch((error) => console.log(error));

      setSearchValue('');
    }
    return;
  }

  const [repoSearch, setRepoSearch] = useState('');

  const handleRepoSearch = (e) => {
    setRepoSearch(e.target.value);
  }
 
  return (
    <>
      <Header />

      <main>
        <div className='input-field'>
          <label>Search for a github user</label>
          <input value={searchValue} onChange={handleSearchValue} type='text' className='user-input' placeholder='Type a github user here...' />
          <button className='btn btn-search' onClick={() => searchUser()}>Search</button>
        </div>
        {
          userData ? (
            <div className='user-container'>
              <UserProfile user={userData} />
              <input value={repoSearch} onChange={handleRepoSearch} type='text' placeholder='Find a repository...' className='repo-input'/>
              <RepositoriesList reposUrl={reposUrl} repoSearch={repoSearch} />
            </div>
          ) : (
            <div className='no-content-container'>
              <h3>Welcome ! search an user to see the profile...</h3>
            </div>
          )
        }
      </main>
      <Footer />
    </>
  );
}

export default App;
