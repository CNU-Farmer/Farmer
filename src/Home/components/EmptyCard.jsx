import React from "react";
import { Link } from "react-router-dom";

import '../css/EmptyCard.css';
import question_mark from '../img/question-mark.png';

const EmptyCard = function () {
    return (
        <div className="empty-card">
            <img className="empty-card-img" src={question_mark} alt="?" />
            <div className="empty-card-text">
                <span>아직 작물이</span>
                <span>등록되지 않았어요!</span>
            </div>
            <Link to='/register' className="empty-card-regist-btn">작물 등록</Link>
        </div>
    )
};

export default EmptyCard;