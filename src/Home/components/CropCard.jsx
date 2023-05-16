import React from "react";
import PropTypes from 'prop-types';

import '../css/CropCard.css';
import lettuce from '../img/lettuce.png'

const CropCard = function ({ crop }) {
    return (
        <div className="crop-card">
            <img className="crop-card-img" src={lettuce} alt="crop img" />
            <div className="crop-card-box">
                <div className="crop-card-background"/>
                <div className="crop-card-info">
                    <span className="crop-card-info__text">작물 종류</span>
                    <span className="crop-card-info__type">{crop.type}</span>
                    <span className="crop-card-info__harvest">{`수확 ${crop.harvestDate}`}</span>
                    <div>
                        <span className="crop-card-info__text">다음 물 줄 날짜</span>
                        <span className="crop-card-inf__water">&nbsp;|&nbsp;{crop.waterDate}</span>
                    </div>
                    <button className="crop-card-state-btn">상태 등록</button>
                </div>
            </div>
        </div>
    )
};

CropCard.propTypes = {
    crop: PropTypes.object.isRequired,
  };

export default CropCard;