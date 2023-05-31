import React, { useState } from "react";

import './css/RegistState.css';
import Header from "../Header/Header";
import plant from './img/plant.png';


// 테스트 끝나면 확인 이미지 태그 제거
const RegistState = function () {
    const showImg = (input) => {
        console.log(input);
        if(input.files && input.files[0]) {
            const reader = new FileReader();
            reader.onload = (e) => {
                document.getElementById('test').src = e.target.result;
            };
            reader.readAsDataURL(input.files[0]);
        } else {
            document.getElementById('test').src = "";
        }
    };
    return(
        <div className="regist-state">
            <Header text="현재 상태 등록"/>
            <div className="regist-state-body">
                <img className="regist-state-body__img" src={plant} alt="plant" />
                <span className="regist-state-body__text">작물을 촬영하여 현재 상태를 알려주세요.</span>
                <div className="regist-state-body__btn">
                    <label for="file">사진 찍기</label>
                    <input type="file" capture="environment" accept="image/*" id="file" onChange={(e) => showImg(e.target)}/>
                </div>
                <img id="test" className="test_img" alt="selected img"/>
            </div>
            <button className="regist-state-next">다음</button>
        </div>
    );
};

export default RegistState;