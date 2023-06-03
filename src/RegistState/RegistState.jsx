import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

import './css/RegistState.css';
import Header from "../Header/Header";
import plant from './img/plant.png';


// 테스트 끝나면 확인 이미지 태그 제거
const RegistState = function () {
    const location = useLocation();
    const [imageUrl, setImageUrl] = useState('');

    const showImg = (e) => {
        console.log(e.target.value);
        if(imageUrl) {
            URL.revokeObjectURL(imageUrl);
        }

        if(e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                setImageUrl(reader.result);
                console.log(e.target.files[0]);
            };
        }
    };

    useEffect(() => {
        console.log(location);
    }, []);
    
    // const onClickComplete = () => {
    //     const qs = require('qs');
    //     axios
    //         .post(`${process.env.REACT_APP_API_KEY}/register`, qs.stringify(location.state))
    //         .then((response) => {
    //             console.log(response.data.response.success);
    //             const response_str = response.data.response.success;
    //             const id = response_str.charAt(response_str.length - 2);
    //             const fs = require('fs');
    //             const data = new FormData();
    //             data.append('crop_id', id);
    //             data.append('image', fs.createReadStream())
    //             axios.
    //                 post(`${process.env.REACT_APP_API_KEY}/register/img`)

    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });
    // };

    return(
        <div className="regist-state">
            <Header text="현재 상태 등록"/>
            <div className="regist-state-body">
                <img className="regist-state-body__img" src={imageUrl === '' ? plant : imageUrl} alt="plant" />
                <span className="regist-state-body__text">작물을 위에서 아래 방향으로 촬영하여</span>
                <span className="regist-state-body__text">현재 상태를 알려주세요.</span>
                <div className="regist-state-body__btn">
                    <label for="file">사진 찍기</label>
                    <input type="file" capture="environment" accept="image/*" id="file" onChange={showImg}/>
                </div>
                <img id="test" className="test_img" alt="selected img"/>
            </div>
            <button className="regist-state-next" disabled={imageUrl === ''} >다음</button>
        </div>
    );
};

export default RegistState;