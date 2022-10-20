import React from "react";
import './style.css';

const Header = () => {
    return (
        <>
            <header>
                <h2>Github User Searcher</h2>
                <input className="input-search" type='text' placeholder='Type a User Here...' />
                <button className="btn-search">Search</button>
            </header>
        </>
    );
}

export default Header;