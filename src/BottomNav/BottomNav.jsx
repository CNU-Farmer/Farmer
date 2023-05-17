import React, { useState } from "react";

import './BottomNav.css';
import date from './img/date.png';
import date_selected from './img/date-selected.png';
import home from './img/home.png';
import home_selected from './img/home-selected.png';
import plant from './img/plant.png';
import plant_selected from './img/plant-selected.png';

const BottomNav = function () {
    const [activeNav, setActiveNav] = useState(1);
    return(
        <div className="bottom-nav">
            <div className="bottom-nav-item" onClick={() => setActiveNav(1)}>
                <img className="bottom-nav-item__img" src={activeNav === 1 ? home_selected : home} alt="home" />
                {activeNav === 1 && <div className="bottom-nav-item__dot" />}
            </div>
            <div className="bottom-nav-item" onClick={() => setActiveNav(2)}>
                <img className="bottom-nav-item__img" src={activeNav === 2 ? date_selected : date} alt="calendar" />
                {activeNav === 2 && <div className="bottom-nav-item__dot" />}
            </div>
            <div className="bottom-nav-item" onClick={() => setActiveNav(3)}>
                <img className="bottom-nav-item__img" src={activeNav === 3 ? plant_selected : plant} alt="plant" />
                {activeNav === 3 && <div className="bottom-nav-item__dot" />}
            </div>
        </div>
    );
};

export default BottomNav;