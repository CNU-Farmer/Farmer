import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import './BottomNav.css';
import date from './img/date.png';
import date_selected from './img/date-selected.png';
import home from './img/home.png';
import home_selected from './img/home-selected.png';
import plant from './img/plant.png';
import plant_selected from './img/plant-selected.png';

const BottomNav = function () {
    const {pathname} = useLocation();
    const [activeNav, setActiveNav] = useState();
    useEffect(() => {
        console.log(pathname)
        if(pathname === '/') setActiveNav(1);
        else if(pathname === 'calendar') setActiveNav(2);
        else setActiveNav(3);
    }, []);
    return(
        <div className="bottom-nav">
            <Link to='/' className="bottom-nav-item">
                <img className="bottom-nav-item__img" src={activeNav === 1 ? home_selected : home} alt="home" />
                {activeNav === 1 && <div className="bottom-nav-item__dot" />}
            </Link>
            <Link to='calendar' className="bottom-nav-item">
                <img className="bottom-nav-item__img" src={activeNav === 2 ? date_selected : date} alt="calendar" />
                {activeNav === 2 && <div className="bottom-nav-item__dot" />}
            </Link>
            <Link to='/my_crops' className="bottom-nav-item">
                <img className="bottom-nav-item__img" src={activeNav === 3 ? plant_selected : plant} alt="plant" />
                {activeNav === 3 && <div className="bottom-nav-item__dot" />}
            </Link>
        </div>
    );
};

export default BottomNav;