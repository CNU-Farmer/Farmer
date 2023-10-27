import React from "react";
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";

import '../css/CropCard.css';
import lettuce from '../img/lettuce.png';
import bar from '../img/bar.png';

const nameMap = {
    'lettuce': '상추'
};

const CropCard = function ({ crop }) {
    const navigate = useNavigate();
    const date = new Date(crop.latest_watered_date);
    const dateFormat = (date) => {
        return date.getFullYear() + '.' + ((date.getMonth() + 1) < 9 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1)) + '.' + (date.getDate() < 9 ? "0" + date.getDate() : date.getDate()) ;
    }

    const onClickRegistBtn = () => {
        navigate("/state", { state: {
            crop_id: crop.id
        }});
    };
    return (
        <div className="crop-card">
            <img className="crop-card-img" src={lettuce} alt="crop img" />
            <div className="crop-card-box">
                <div className="crop-card-background"/>
                <div className="crop-card-info">
                    <div className="crop-card-info-text-box">
                        <span className="crop-card-info__text">작물 종류</span>
                        <img className="crop-card-info__divider" src={bar} alt="|" />
                        <span className="crop-card-info__text">{nameMap[crop.species]}</span>
                    </div>
                    <span className="crop-card-info__name">{crop.name}</span>
                    <div className="crop-card-info__harvest">
                        <span className="crop-card-info__harvest-sm">수확&nbsp;&nbsp;&nbsp;</span>
                        <span className="crop-card-info__harvest-bg">{crop.harvesting === null ? 0 : crop.harvesting}</span>
                        <span className="crop-card-info__harvest-sm">일 전</span>
                    </div>
                    <div className="crop-card-info-text-box">
                        <span className="crop-card-info__text">다음 물 줄 날짜</span>
                        <img className="crop-card-info__divider" src={bar} alt="|" />
                        <span className="crop-card-inf__water">{dateFormat(date)}</span>
                    </div>
                    <button className="crop-card-state-btn" onClick={onClickRegistBtn}>상태 등록</button>
                </div>
            </div>
        </div>
    )
};

CropCard.propTypes = {
    crop: PropTypes.object.isRequired,
  };

export default CropCard;