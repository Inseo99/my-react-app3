import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    
    return (
        <header>
            <Link to="/">홈</Link> &nbsp;&nbsp;
            <Link to="/boardWriteReact">게시판</Link>
            <hr/>
        </header>
    );
};

export default Header;