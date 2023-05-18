import React, { useState } from "react";

import './css/Home.css';
import CropCard from "./components/CropCard";
import EmptyCard from "./components/EmptyCard";
import BottomNav from "../BottomNav/BottomNav";
import logo from './img/logo.png';

const data = [
    {
        type: '상추',
        name: '상추도사',
        harvestDate: '2주전',
        waterDate: '2022.04.11' 
    }
];

const Home = function () {
    const [cropList, setCropList] = useState(data);
    return (
        <div className="home">
            <img className="home-log" src={logo} alt="Farmer" />
            <div className="home-body">
                {cropList.length == 0 ? <EmptyCard /> : (
                    cropList.map((e) => <CropCard crop={e} />)
                )}
            </div>
            <BottomNav />
        </div>
    );
};

export default Home;