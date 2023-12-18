import React from "react";
import './style.scss';
import { FaGithub } from "react-icons/fa";

const Header = () => {
    return (
        <>
            <header>
                <h1><FaGithub/> Github User Finder</h1>
            </header>
        </>
    );
}

export default Header;