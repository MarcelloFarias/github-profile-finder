import React from "react";
import './style.css';

const Header = ({ searchText, onChange, onClick }) => {
    return (
        <>
            <header>
                <h2>Github User Searcher</h2>
                <input className="input-search" value={searchText} onChange={onChange} type='text' placeholder='Type a User Here...' />
                <button className="btn-search" onClick={onClick}>Search</button>
            </header>
        </>
    );
}

export default Header;