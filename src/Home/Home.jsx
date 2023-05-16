import React, { useState } from "react";

import CropCard from "./components/CropCard";
import EmptyCard from "./components/EmptyCard";

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
            {cropList.length == 0 ? (
                <div className="home-none"><EmptyCard /></div>
            ) : (
                <div className="home-crops">{
                    cropList.map((e) => <CropCard crop={e} />)
                }</div>
            )}
        </div>
    );
};

export default Home;