import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import axios from "axios";

import './css/RegistState.css';
import Header from "../Header/Header";
import plant from './img/plant.png';


const override = {
    display: "flex",
    margin: "0 auto",
};

// 테스트 끝나면 확인 이미지 태그 제거
const RegistState = function () {
    const location = useLocation();
    const navigate = useNavigate();
    const [loading,setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState('');

    const showImg = (e) => {        
        if(e.target.files && e.target.files[0]) {
            setImageUrl(e.target.files[0]);
            onComplete(e.target.files[0]);
            // const data = new FormData();
            // data.append('crop_id', '4');
            // data.append('image', e.target.files[0]);

            // axios
            //     .post(`${process.env.REACT_APP_API_KEY}/register/img`, data)
            //     .then((res) => {
            //         console.log(res);
            //     })
            //     .catch((error) => {
            //         console.log(error);
            //         let values = error.config.data.values();
            //         for (const pair of values) {
            //             console.log(pair); 
            //         }
            //     });
        }
    };

    useEffect(() => {
        console.log(location);
    }, []);
    
    const onComplete = (file) => {
        setLoading(true);
        const qs = require('qs');
        axios
            .post(`${process.env.REACT_APP_API_KEY}/register`, qs.stringify(location.state))
            .then((response) => {
                console.log(response.data.response.success);
                const response_str = response.data.response.success;
                const id = response_str.charAt(response_str.length - 2);
                const data = new FormData();
                data.append('crop_id', id);
                data.append('image', file);
                axios
                    .post(`${process.env.REACT_APP_API_KEY}/register/img`, data)
                    .then((res) => {
                        let values = res.config.data.values();
                        for (const pair of values) {
                            console.log(pair); 
                        }
                        setLoading(false);
                        navigate('/');
                    });
            })
            .catch((error) => {
                console.log(error);
            });
    };

    if (loading) return <div className="spinner"><BeatLoader color="#2d8250" cssOverride={override}/></div>
    return(
        <div className="regist-state">
            <Header text="현재 상태 등록"/>
            <div className="regist-state-body">
                <img className="regist-state-body__img" src={plant} alt="plant" />
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