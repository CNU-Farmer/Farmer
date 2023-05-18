import React from "react";

import './css/RegistState.css';
import Header from "../Header/Header";
import plant from './img/plant.png';

const RegistState = function () {
    return(
        <div className="regist-state">
            <Header text="현재 상태 등록"/>
            <div className="regist-state-body">
                <img className="regist-state-body__img" src={plant} alt="plant" />
                <span className="regist-state-body__text">작물을 촬영하여 현재 상태를 알려주세요.</span>
                <button className="regist-state-body__btn">사진 찍기</button>
            </div>
            <button className="regist-state-next">다음</button>
        </div>
    );
};

export default RegistState;