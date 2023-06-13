import React from "react";

import BottomNav from "../BottomNav/BottomNav";
import Header from "../Header/Header";
import Crops from "./components/Crops";
import { useNavigate } from "react-router-dom";
import "./css/MyCrops.css";
import btnImg from "./img/regist-crop-btn.png";

const MyCrops = () => {
  const navigate = useNavigate();
  const navigateToRegistCrop = () => {
    navigate("/register");
  };
  const crops = [
    {
      id: "1",
      type: "상추",
      title: "상추도사",
    },
    {
      id: "2",
      type: "배추",
      title: "배추도사",
    },
    {
      id: "3",
      type: "대파",
      title: "대파도사",
    },
  ];
  return (
    <>
      <div className="my-crops-container">
        <Header text="내 작물" />
        <div>
          <Crops items={crops} />
          <img
            src={btnImg}
            className="regist-crop-btn"
            onClick={navigateToRegistCrop}
            alt=""
          />
        </div>
        <BottomNav />
      </div>
    </>
  );
};

export default MyCrops;
