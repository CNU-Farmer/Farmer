import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import TypeSelect from "./components/TypeSelect";
import Header from "../Header/Header";
import './css/RegistCrop.css';
import arrow_down from './img/arrow-down.png';
import calendar from './img/calendar.png';
import DatePickerBox from "./components/DatePickerBox";

const RegistCrop = function () {
    const typeRef = useRef();
    const navigate = useNavigate();
    const [openType, setOpenType] = useState(false);
    const [type, setType] = useState({
        speciesEng: '',
        speciesKo: ''
    });
    const [name, setName] = useState('');
    const [selectedtDate, setSelectedDate] = useState(new Date());

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
        console.log(type.speciesEng + ', ' + name + ', ' + dateFormat(selectedtDate));
    }, [type, name, selectedtDate])

    useEffect(() => {
        document.addEventListener('click', handleClickTypeOutSide);
        return () => {
          document.removeEventListener('click', handleClickTypeOutSide);
        };
    });

    const dateFormat = (date) => {
        return date.getFullYear() + '-' + ((date.getMonth() + 1) < 9 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1)) + '-' + (date.getDate() < 9 ? "0" + date.getDate() : date.getDate()) ;
    }

    const onClickNext = () => {
        navigate("/state", { state: {
            name: name,
            species:type.speciesEng,
            date: dateFormat(selectedtDate)
        }});
    };

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
                    <DatePickerBox selectedtDate={selectedtDate.toString()} setSelectedDate={setSelectedDate} />
                </div>
            </div>
            <button className="regist-crop-next" disabled={type.speciesEng && name ? false : true} onClick={onClickNext}>다음</button>
        </div>
    )
};

export default RegistCrop;