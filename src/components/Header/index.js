import React from "react";
import './style.css';

const Header = () => {
    return (
        <>
            <header>
                <h2>Github User Searcher</h2>
                <input type='text' placeholder='Type a User Here...' />
            </header>
        </>
    );
}

export default Header;