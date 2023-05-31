import React, { useState, useEffect, useRef } from "react";

import TypeSelect from "./components/TypeSelect";
import Header from "../Header/Header";
import './css/RegistCrop.css';
import arrow_down from './img/arrow-down.png';
import calendar from './img/calendar.png';
import DatePickerBox from "./components/DatePickerBox";
import { disable } from "workbox-navigation-preload";

const RegistCrop = function () {
    const typeRef = useRef();
    const [openType, setOpenType] = useState(false);
    const [type, setType] = useState({
        speciesEng: '',
        speciesKo: ''
    });
    const [name, setName] = useState('');
    const [selectedtDate, setSelectedDate] = useState(new Date().toString());

    const selectType = (e) => {
        setType(e);
    }

    const onClickType = () => {
        setOpenType((cur) => !cur);
    };

    const onChangeName = (e) => {
        setName(e.target.value);
    };

    const handleClickTypeOutSide = (e) => {
        if (openType && !typeRef.current?.contains(e.target)) {
            setOpenType(false);
        }
    };

    useEffect(() => {
        console.log(type.speciesEng + ', ' + name + ', ' + selectedtDate);
    }, [type, name, selectedtDate])

    useEffect(() => {
        document.addEventListener('click', handleClickTypeOutSide);
        return () => {
          document.removeEventListener('click', handleClickTypeOutSide);
        };
    });

    return (
        <div className="regist-crop">
            <Header text="내 작물 등록"/>
            <div className="regist-crop-form">
                <span className="regist-crop-text">작물 종류</span>
                <div ref={typeRef} className="regist-crop-input regist-crop-input-type" onClick={onClickType}>
                    <span>{type.speciesEng === '' ? '작물을 선택하세요' : type.speciesKo}</span>
                    <img src={arrow_down} alt="arrow" className="regist-crop-img__arrow"/>
                    {openType && <TypeSelect selectType={selectType} />}
                </div>
                <span className="regist-crop-text">이름</span>
                <input className="regist-crop-input" onChange={onChangeName}/>
                <span className="regist-crop-text">마지막 물 준 날짜</span>
                <div className="regist-crop-input regist-crop-input-date">
                    <img className="regist-crop-img__calendar" src={calendar} alt="달력" />
                    <DatePickerBox selectedtDate={selectedtDate} setSelectedDate={setSelectedDate} />
                </div>
            </div>
            <button className="regist-crop-next" disabled={type.speciesEng && name ? false : true}>다음</button>
        </div>
    )
};

export default RegistCrop;