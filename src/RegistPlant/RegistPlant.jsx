import React, { useState, useEffect, useRef } from "react";

import TypeSelect from "./components/TypeSelect";
import './css/RegistPlant.css';
import arrow_down from './img/arrow-down.png';
import calendar from './img/calendar.png';
import left_arrow from './img/left-arrow.png';

const RegistPlant = function () {
    const typeRef = useRef();
    const [openType, setOpenType] = useState(false);

    const onClickType = () => {
        setOpenType((cur) => !cur);
    };

    const handleClickTypeOutSide = (e) => {
        if (openType && !typeRef.current?.contains(e.target)) {
            setOpenType(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickTypeOutSide);
        return () => {
          document.removeEventListener('click', handleClickTypeOutSide);
        };
      });

    return (
        <div className="regist-plant">
            <div className="regist-plant-header">
                <img src={left_arrow} alt="뒤로가기" className="regist-plant-header__img"/>
                <span className="regist-plant-header-text">내 작물 등록</span>
            </div>
            <div className="regist-plant-form">
                <span className="regist-plant-text">작물 종류</span>
                <div ref={typeRef} className="regist-plant-input regist-plant-input-type" onClick={onClickType}>
                    <span>작물을 선택하세요.</span>
                    <img src={arrow_down} alt="arrow" className="regist-plant-img__arrow"/>
                    {openType && <TypeSelect />}
                </div>
                <span className="regist-plant-text">이름</span>
                <input className="regist-plant-input"/>
                <span className="regist-plant-text">마지막 물 준 날짜</span>
                <button className="regist-plant-input regist-plant-input-date">
                    <img className="regist-plant-img__calendar" src={calendar} alt="달력" />
                    <span>날짜 선택하기</span>
                </button>
            </div>
            <button className="regist-plant-next">다음</button>
        </div>
    )
};

export default RegistPlant;