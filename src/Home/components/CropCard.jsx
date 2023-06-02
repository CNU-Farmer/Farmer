import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

import '../css/CropCard.css';
import lettuce from '../img/lettuce.png';
import bar from '../img/bar.png';

const CropCard = function ({ crop }) {
    return (
        <div className="crop-card">
            <img className="crop-card-img" src={lettuce} alt="crop img" />
            <div className="crop-card-box">
                <div className="crop-card-background"/>
                <div className="crop-card-info">
                    <div className="crop-card-info-text-box">
                        <span className="crop-card-info__text">작물 종류</span>
                        <img className="crop-card-info__divider" src={bar} alt="|" />
                        <span className="crop-card-info__text">{crop.species}</span>
                    </div>
                    <span className="crop-card-info__name">{crop.name}</span>
                    <span className="crop-card-info__harvest">{`수확 ${crop.harvesting}`}</span>
                    <div className="crop-card-info-text-box">
                        <span className="crop-card-info__text">다음 물 줄 날짜</span>
                        <img className="crop-card-info__divider" src={bar} alt="|" />
                        <span className="crop-card-inf__water">{crop.latest_watered_date}</span>
                    </div>
                    <Link to="/state" className="crop-card-state-btn">상태 등록</Link>
                </div>
            </div>
        </div>
    )
};

CropCard.propTypes = {
    crop: PropTypes.object.isRequired,
  };

export default CropCard;