import React from "react";
import './style.css';

const Header = ({ searchText, onChange, onClick }) => {
    return (
        <>
            <header>
                <h1>Github User Searcher</h1>
                <div className="input-field">
                    <input className="input-search" value={searchText} onChange={onChange} type='text' placeholder='Type an User Here...' />
                    <button className="btn-search" onClick={onClick}>Search</button>
                </div>
            </header>
        </>
    );
}

export default Header;