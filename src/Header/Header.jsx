import React from "react";
import PropTypes from 'prop-types';

import './Header.css';
import left_arrow from './img/left-arrow.png';

const Header = function ({text}) {
    return(
        <div className="header">
            <img src={left_arrow} alt="뒤로가기" className="header__img"/>
            <span className="header-text">{text}</span>
        </div>
    );
};

Header.propTypes = {
    text: PropTypes.object.isRequired,
};

export default Header;