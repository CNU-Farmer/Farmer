import React from "react";

import '../css/TypeSelect.css';

const TypeSelect = function () {
    return(
        <div className="type-select">
            <button className="type-select-btn">상추</button>
            <button className="type-select-btn">방울 토마토</button>
            <button className="type-select-btn">대파</button>
        </div>
    )
};

export default TypeSelect;